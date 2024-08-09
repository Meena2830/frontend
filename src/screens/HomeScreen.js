import React from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css';

const HomeScreen = () => {
    return (
        <div>
            <h1>Welcome to Project Management Tool</h1>
            <nav>
                <Link to="/login">Login</Link> 
                <Link to="/register">Register</Link> 
                <Link to="/projects">Project Session</Link> 
                <Link to="/tasks">Task Session</Link> {/* Added Task Session link */}
            </nav>
        </div>
    );
};

export default HomeScreen;
