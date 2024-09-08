import s from "./Options.module.css";

const Options = ({ onFeedback }) => {  
  return (  
      <div className="options-container">  
          <button onClick={() => onFeedback} className="btn">Good</button>  
          <button onClick={() => onFeedback} className="btn">Neutral</button>  
          <button onClick={() => onFeedback} className="btn">Bed</button>  
          <button onClick={onReset} className="btn">Reset</button>  
      </div>  
  );  
};  

export default Options;  
