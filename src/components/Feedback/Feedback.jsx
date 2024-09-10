const Feedback = ({ feedbackCounts, totalFeedback,positiveFeedback }) => {    
    return (  
        <div className="feedback">  
            <h2>Feedback Statistics</h2>  
            <p >Good: {feedbackCounts.good}</p>  
            <p >Neutral: {feedbackCounts.neutral}</p>  
            <p>Bad: {feedbackCounts.bad}</p>  
            <p>Total: {totalFeedback}</p>  
            <p>Positive Feedback: {positiveFeedback}%</p>  
        </div>  
    );  
};  

export default Feedback;




