import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Books = () => {

  const [booksArr, setBooksArr] = useState([]);

  const fetchData = async () => {
    axios.get("http://localhost:5000/api/travel")
      .then(response => {
        // console.log(response.data);
        setBooksArr(response.data.travels)
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/travel/${id}`)
      fetchData()
    } catch (err) {
      console.log('ochirish vaqtida hatolik', err);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Books</h1>
      <div className="grid grid-cols-2 gap-8">
        {booksArr.length == 0 ? (<p>no book</p>) :
          (booksArr.map((book) => (
            <div
              key={book._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{book.title}</h3>
                <p className="text-gray-600 text-lg">{book.descr}</p>
              </div>

              <div className="flex justify-start space-x-2 p-6">
                <Link to={`/update/${book._id}`}>
                  <button className='text-green-500 border border-green-500 py-1 px-4 rounded bg-green-100 hover:bg-green-200'>update</button>
                </Link>
                <button onClick={() => handleDelete(book._id)} className='text-red-500 border border-red-500 py-1 px-4 rounded bg-red-100 hover:bg-red-200'>delete</button>
              </div>
            </div>
          )))
        }
      </div>
    </div >
  );
};

export default Books;
