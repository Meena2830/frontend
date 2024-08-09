import React, { useState } from 'react';
import { createTask } from '../api'; 
import './TaskScreen.css';
// Make sure this imports the correct function

const TaskScreen = () => {
    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
        status: 'To Do',
        projectId: '' // Assuming tasks are linked to a project
    });

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleChange = (e) => {
        setTaskData({
            ...taskData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await createTask(taskData); // Call the API function
            setSuccessMessage('Task created successfully!');
            setError(null);
            console.log('Task Creation Successful:', response);
        } catch (error) {
            console.error('Error creating task:', error);
            setError('Task creation failed. Please try again.');
            setSuccessMessage(null);
        }
    };

    return (
        <div>
            <h1>Create Task</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={taskData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={taskData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <select name="status" value={taskData.status} onChange={handleChange}>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <div>
                    <label>Project ID:</label>
                    <input
                        type="text"
                        name="projectId"
                        value={taskData.projectId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Create Task</button>
            </form>
        </div>
    );
};

export default TaskScreen;
