import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from './feedbackApi';
import './feedback.css'
import { Link } from 'react-router-dom';

const FeedBack = () => {
    const [formdata, setFormdata] = useState({
        email: '',
        name: '',
        subject: '',
        message: ''

    })
    const navigate = useNavigate();
    const handleChange = (e) => {
        e.preventDefault();
        setFormdata({ ...formdata, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addFeedback(formdata);
            navigate('/')
        }
        catch (error) {
            console.log(error);
        }

        console.log(formdata);
    }

    return (
        <div className='feedback'>
            <div className="down">
                <div className="login-form">
                    <h2>FEEDBACK</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            className='feedinput'
                            type="email"
                            placeholder="Email"
                            id="email"
                            onChange={handleChange}
                            required
                        />
                        <input
                            className='feedinput'
                            type="name"
                            placeholder="Name"
                            id="name"
                            onChange={handleChange}
                        />
                        <input
                            className='feedinput'
                            type="name"
                            placeholder="Experience"
                            id="experience"
                            onChange={handleChange}
                        />
                        <input
                            className='feedinput'
                            type="name"
                            placeholder="Any Comments"
                            id="comments"
                            onChange={handleChange}
                            required
                        />
                        {/* <button className='feedbutton' type="submit" id='fb'>Submit</button> */}
                        <Link to="/" > <button className='feedbutton' type="submit" id='fb'>Submit</button>
                        
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;