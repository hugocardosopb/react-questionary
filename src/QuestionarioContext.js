import React, { Children, createContext, useState } from 'react';
import Button from './Button';

export const QuestionarioContext = createContext();

export const QuestionarioGlobal = ({ children }) => {
  const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
  ];

  function nextQuestion({ target }) {
    const prox = next.slice(1);

    if (next < 'p4') {
      setQuestion(null);
      setNext(`p${Number(prox) + 1}`);
      setRespondida(respondida + 1);
    }

    const resposta_certa = perguntas.map((p) => {
      if (p.id === next) {
        if (question === p.resposta) {
          setPonto(ponto + 1);
        }
      }
    });

    if (target.textContent === 'Finaliza') {
      setRespondida(respondida + 1);
    }

    return resposta_certa;
  }

  const [question, setQuestion] = useState(null);
  const [next, setNext] = useState(`p${1}`);
  const [ponto, setPonto] = useState(0);
  const [respondida, setRespondida] = useState(0);

  return (
    <QuestionarioContext.Provider
      value={{
        perguntas,
        question,
        setQuestion,
        next,
        setNext,
        nextQuestion,
        ponto,
        respondida,
      }}
    >
      {children}
    </QuestionarioContext.Provider>
  );
};
