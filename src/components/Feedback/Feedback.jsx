import s from "./Feedback.module.css";

const Feedback = ({ feedback }) => {  
  return (  
      <div className="feedback-container">  
          <h2 className="text-lg font-semibold">Відгуки:</h2>  
          <p>Добре: {feedback.good}</p>  
          <p>Нейтрально: {feedback.neutral}</p>  
          <p>Погано: {feedback.bad}</p>  
      </div>  
  );  
};  

export default Feedback;  
