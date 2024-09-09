import { useEffect, useState } from "react";
import Options from './components/Options/Options';  
import Feedback from './components/Feedback/Feedback';  
import Notification from './components/Notification/Notification';  

const App = () => {  
    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });  

    useEffect(() => {  
        const savedFeedback = JSON.parse(localStorage.getItem('feedback')) || { good: 0, neutral: 0, bad: 0 };  
        setFeedback(savedFeedback);  
    }, []);  

    useEffect(() => {  
        localStorage.setItem('feedback', JSON.stringify(feedback));  
    }, [feedback]);  

    const updateFeedback = (feedbackType) => {  
        setFeedback((prevFeedback) => ({  
            ...prevFeedback,  
            [feedbackType]: prevFeedback[feedbackType] + 1,  
        }));  
    };  

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;  

    const resetFeedback = () => {  
        setFeedback({ good: 0, neutral: 0, bad: 0 });  
    };  

    return (  
        <div className="app">  
            <h1>Sip Happens Café</h1>  
            <p>Please leave your feedback about our service by selecting one of the options below.</p>  
            <Options   
                updateFeedback={updateFeedback}   
                totalFeedback={totalFeedback}   
                resetFeedback={resetFeedback}   
                feedbackCounts={feedback}  
            />  
            {totalFeedback > 0 ? (  
                <Feedback feedbackCounts={feedback} totalFeedback={totalFeedback} />  
            ) : (  
                <Notification />  
            )}  
        </div>  
    );  
};  

export default App;