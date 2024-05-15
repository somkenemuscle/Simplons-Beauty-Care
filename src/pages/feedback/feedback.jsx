import React, { useState } from 'react';
import { useFeedback } from "../../context/feedbackContext";
import useSlideAnimation from '../../animation/useSlideAnimation';
import '../../styles/feedback.css';


export default function Feedback() {
    //slide animation
    useSlideAnimation();

    //feedback state
    const { addFeedback } = useFeedback();
    const [showAlert, setShowAlert] = useState(false);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const feedbackData = {
            name: formData.get('name'),
            message: formData.get('message')
        };
        addFeedback(feedbackData);
        e.target.reset(); // Reset the form fields after submission
        setShowAlert(true); // Set showAlert to true to display the alert
        // Hide the alert after 3 seconds
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };

    return (
        <div className='hidden' id='feedback-form-container'>
            {showAlert && <div className="alert">Feedback added</div>}
            <h5 style={{ textAlign: 'center' }}>Give feedback</h5>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-floating">
                    <textarea name="message" className="form-control" placeholder="Enter your feedback" id="floatingTextarea2" style={{ height: "100px" }} required></textarea>
                    <label htmlFor="floatingTextarea2">Message</label>
                </div>
                <br />
                <button style={{ width: '100%' }} type="submit" className="btn btn-dark">Give Feedback</button>
            </form>
        </div>
    );
}
