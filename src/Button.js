import React, { useContext, useEffect, useState } from 'react';
import { QuestionarioContext } from './QuestionarioContext';

const Button = () => {
  const [disabledbutton, setDisabledbutton] = useState(false);

  const dados = useContext(QuestionarioContext);

  useEffect(() => {
    if (dados.question == null) {
      setDisabledbutton(true);
    } else {
      setDisabledbutton(false);
    }
  }, [dados.question]);

  return (
    <>
      <button onClick={dados.nextQuestion} disabled={disabledbutton}>
        {dados.next === 'p4' ? 'Finaliza' : 'Proxima'}
      </button>
    </>
  );
};

export default Button;
