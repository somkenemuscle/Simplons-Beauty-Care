import React, { useState, createContext, useContext } from 'react';
// Creating a context to manage feedback state
const FeedbackContext = createContext();

// Custom hook to use the feedback context
export const useFeedback = () => useContext(FeedbackContext);

// Feedback provider component
export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([]);

    const addFeedback = (newFeedback) => {
        setFeedback([...feedback, newFeedback]);
    };

    return (
        <FeedbackContext.Provider value={{ feedback, addFeedback }}>
            {children}
        </FeedbackContext.Provider>
    );
};


