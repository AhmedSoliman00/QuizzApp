import { useState } from "react";
import {jsQuizz} from "./constants";
import "./App.css";
import Quiz from "./Quiz";
function App() {
  return (
    <>
      <Quiz questions = {jsQuizz.questions} />
      
    </>
  );
}

export default App;
