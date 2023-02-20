import React from 'react'
import '../cssfiles/AdminPanel.css';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  return (
	<div className="admin-row">
		<div className="admin-column">
			<div class="box-content h-80 w-80 bg-black mt-20 ml-52 shadow appearance-none border rounded">
				<div class="flex flex-col items-center justify-center">
					<h1 class="text-white text-center font-bold text-2xl mt-8 mb-4">Manage Movies</h1>
  					<Link to="/addmovie"><button class="shadow appearance-none border rounded text-white h-10 w-60 m-2">Add Movie</button></Link>
					<button class="shadow appearance-none border rounded text-white h-10 w-60 m-2">Delete Movie</button>
					<button class="shadow appearance-none border rounded text-white h-10 w-60 m-2">Update Movie</button>
				</div>
			</div>
		</div>
			
		<div className="admin-column">
			<div class="box-content h-80 w-80 bg-black mt-20 ml-52 shadow appearance-none border rounded">
				<div class="flex flex-col items-center justify-center">
					<h1 class="text-white text-center font-bold text-2xl mt-8 mb-4">Manage Promotions</h1>
  					<button class="shadow appearance-none border rounded text-white h-10 w-60 m-2">Add Promotions</button>
					<button class="shadow appearance-none border rounded text-white h-10 w-60 m-2">Delete Promotions</button>
					<button class="shadow appearance-none border rounded text-white h-10 w-60 m-2">Update Promotions</button>
				</div>
			</div>
		</div>
	</div>
  )
}

export default AdminPanel