import React, { useState } from 'react';


const questions = [
  "What is the capital of France?",
  "Who painted the Mona Lisa?",
  "What year did World War II end?"
];

const Mentor = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleSubmit = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setProgress(((currentQuestionIndex + 1) / questions.length) * 100);
    }
  };

  const renderTabs = () => {
    return questions.map((question, index) => (
      <button
        key={index}
        className={`px-4 py-2 ${currentQuestionIndex === index ? 'bg-blue-500 text-red-200' : 'bg-gray-200 text-gray-800'} rounded-l-md`}
        onClick={() => setCurrentQuestionIndex(index)}
      >
        Question {index + 1}
      </button>
    ));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Quiz Game</h1>
      <div className="mb-4">
        <p className="text-lg">{questions[currentQuestionIndex]}</p>
      </div>
      <div className="flex mb-4">
        {renderTabs()}
      </div>
      <div className="w-full h-6 bg-gray-200 rounded-md mb-4">
        <div className="h-full bg-blue-500 rounded-md" style={{ width: `${progress}%` }}></div>
      </div>
      <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
        Next Question
      </button>
    </div>
    
  );
};

export default Mentor;
