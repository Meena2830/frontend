import React, { useState } from 'react';
import { createProject } from '../api';
import './ProjectScreen.css';


const ProjectScreen = () => {
    const [projectData, setProjectData] = useState({
        projectName: '',
        projectDescription: '',
    });

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleChange = (e) => {
        setProjectData({
            ...projectData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await createProject(projectData);
            setSuccessMessage('Project created successfully!');
            setError(null);
            console.log('Project Creation Successful:', response);
        } catch (error) {
            console.error('Error creating project:', error);
            setError('Project creation failed. Please try again.');
            setSuccessMessage(null);
        }
    };

    return (
        <div>
            <h1>Create Project</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Project Name:</label>
                    <input
                        type="text"
                        name="projectName"
                        value={projectData.projectName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Project Description:</label>
                    <textarea
                        name="projectDescription"
                        value={projectData.projectDescription}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Create Project</button>
            </form>
        </div>
    );
};

export default ProjectScreen;
