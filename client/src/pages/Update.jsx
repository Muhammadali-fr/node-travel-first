import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
    const [title, setTitle] = useState('');
    const [descr, setDescr] = useState('');
    const [img, setImg] = useState('');

    const { id } = useParams()
    const navigate = useNavigate()

    const fetchData = async () => {
        const { data } = await axios.get(`http://localhost:5000/api/travel/${id}`)
        console.log(data);
        setTitle(data.travel.title)
        setDescr(data.travel.title)
        setImg(data.travel.image)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const updateHandler = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/api/travel/${id}`, {
            title,
            image: img,
            descr,
        })

        navigate('/');

    }

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white text-gray-800 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Update your car</h2>
            <form onSubmit={updateHandler}>
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
                        value={title}
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
                        value={descr}
                    ></textarea>
                </div>

                {/* Text */}
                <div className="mb-4">
                    <label htmlFor="text" className="block text-gray-700 font-medium mb-2">
                        Text
                    </label>
                    <input
                        type="text"
                        id="text"
                        name="text"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter additional content"
                        required
                        onChange={e => setImg(e.target.value)}
                        value={img}
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

export default Update;
