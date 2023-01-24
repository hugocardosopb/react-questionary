import React, { useState } from 'react';
import Questionario from './Questionario';
import { QuestionarioGlobal } from './QuestionarioContext';

const App = () => {
  return (
    <>
      <QuestionarioGlobal>
        <>{<Questionario />}</>
      </QuestionarioGlobal>
    </>
  );
};

export default App;
