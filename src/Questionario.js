import React, { useContext, useEffect, useState } from 'react';
import Button from './Button';
import { QuestionarioContext } from './QuestionarioContext';

const Questionario = () => {
  const dados = useContext(QuestionarioContext);

  function handleChange({ target }) {
    dados.setQuestion(target.value);
  }

  return (
    <>
      <form className="questionario" style={{ marginBottom: '15px' }}>
        <h1 style={{ color: 'grey' }}>Questionário</h1>
        {dados.perguntas.map(({ id, pergunta, options, resposta }) => {
          if (id === dados.next) {
            const pergunta_01 = <h3 key={pergunta}>{pergunta}</h3>;

            const resposta_01 = options.map((r, index) => (
              <label key={index}>
                <input
                  type="radio"
                  onChange={handleChange}
                  value={r}
                  checked={r === dados.question}
                  className="radio"
                />
                {r}
              </label>
            ));
            return [pergunta_01, resposta_01];
          }
          return [];
        })}
      </form>
      {dados ? <Button /> : null}
      <div>
        {dados.respondida === 4 ? <h1>Sua pontuação é: {dados.ponto}</h1> : ''}
      </div>
    </>
  );
};

export default Questionario;
