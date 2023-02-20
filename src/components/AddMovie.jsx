import React from 'react'
import '../cssfiles/AddMovie.css';

const AddMovie = () => {
  return (
    <div className="addmovie-container">
      <div className="addmovie-row">
        <div className="addmovie-column-side">side</div>
        <div class="bg-black">
        <div className="addmovie-column-main">
          <h1 class="font-bold text-2xl mt-6 text-white text-center">Add Movie</h1>

          <form>
            <h1 class="font-bold text-lg mt-8 ml-16 text-white">Movie title</h1>
            <input class="shadow appearance-none border rounded text-white ml-16 w-72 py-2 px-2 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="movietitle"
            type="text"
            placeholder="Movie Title"
            />

            <h1 class="font-bold text-lg mt-5 ml-16 text-white">Date</h1>
            <input class="shadow appearance-none border rounded text-white ml-16 w-72 py-2 px-2 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date" 
            id="showdate" 
            name="birthday"/>
            
            <br/>
            <h1 class="font-bold text-lg mt-5 ml-16 text-white">Room Number</h1>
            <input class="shadow appearance-none border rounded ml-16 w-72 py-2 px-2 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="movietitle"
            type="text"
            placeholder="Movie Title"
            />

            <br/>
            <h1 class="font-bold text-lg mt-5 ml-16 text-white">Movie Link</h1>
            <input class="shadow appearance-none border rounded ml-16 w-72 py-2 px-2 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="movietitle"
            type="text"
            placeholder="Movie Title"
            />

            <br/>
            <h1 class="font-bold text-lg mt-5 ml-16 text-white">Image</h1>
            <input class="w-72 ml-16 text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
            id="file_input" 
            type="file"></input>
          </form>





        </div>
        </div>
        <div className="addmovie-column-side">side</div>
      </div>
    </div>
  )
}

export default AddMovie