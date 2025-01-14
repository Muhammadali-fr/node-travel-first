import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Form = () => {
    const navigate = useNavigate()

    const [title, setTitle] = useState('');
    const [descr, setDescr] = useState('');
    const [img, setImg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/travel/add', {
                title,
                image: img,
                descr,
            });
            toast.success('Created successfully!');
            navigate('/')
            setTimeout(() => {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth', // This enables smooth scrolling
                });
            }, 1000);
        } catch (error) {
            console.error('Error creating entry:', error.response?.data || error.message);
            toast.error('Failed to create.');
        }
    }


    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white text-gray-800 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Create New Entry</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                {/* Title */}
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter a title"
                        required
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter a description"
                        rows="5"
                        required
                        onChange={e => setDescr(e.target.value)}

                    ></textarea>
                </div>

                {/* Text */}
                <div className="mb-4">
                    <label htmlFor="text" className="block text-gray-700 font-medium mb-2">
                        image
                    </label>
                    <input
                        type="text"
                        id="text"
                        name="text"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter additional content"
                        required
                        onChange={e => setImg(e.target.value)}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 font-medium"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
