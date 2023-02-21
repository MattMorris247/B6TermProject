import React from 'react'
import '../cssfiles/AddPromotion.css'

const AddPromotion = () => {
  return (
	<div className="addpromotion-container">
      <div className="addpromotion-row">
        <div className="addpromotion-column-side"></div>
        <div class="bg-black">
        <div className="addpromotion-column-main">
          <h1 class="font-bold text-2xl mt-6 text-white text-center">Add Promotion</h1>

          <form>
            <h1 class="font-bold text-lg mt-8 ml-16 text-white">Promotion title</h1>
            <input class="shadow appearance-none border rounded text-white ml-16 w-72 py-2 px-2 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="promotiontitle"
            type="text"
            placeholder="Promotion Title"
            />
            
            <br/>
            <h1 class="font-bold text-lg mt-5 ml-16 text-white">Promotion Amount</h1>
            <input class="shadow appearance-none border rounded ml-16 w-72 py-2 px-2 my-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="promotion_amount"
            type="text"
            placeholder="Promotion Amount"
            />

            <br/>
            <h1 class="font-bold text-lg mt-5 ml-16 text-white">Promotion Code</h1>
            <input class="shadow appearance-none border rounded ml-16 w-72 py-2 px-2 my-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="promotion_code"
            type="text"
            placeholder="Promotion Code"
            />
			<br/>

			<button class="bg-blue-500 mt-6 ml-40 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
				Submit
			</button>
          </form>
        </div>
        </div>
        <div className="addpromotion-column-side"></div>
      </div>
    </div>
  )
}

export default AddPromotion