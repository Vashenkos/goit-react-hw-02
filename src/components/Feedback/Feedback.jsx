const Feedback = ({ feedbackCounts, totalFeedback }) => {  
    const positiveFeedback = Math.round((feedbackCounts.good / totalFeedback) * 100);  

    return (  
        <div className="feedback">  
            <h2>Feedback Statistics</h2>  
            <p className="good">Good: {feedbackCounts.good}</p>  
            <p className="neutral">Neutral: {feedbackCounts.neutral}</p>  
            <p>Bad: {feedbackCounts.bad}</p>  
            <p>Total: {totalFeedback}</p>  
            <p>Positive Feedback: {positiveFeedback}%</p>  
        </div>  
    );  
};  

export default Feedback;