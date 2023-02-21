import React from 'react'
import '../cssfiles/EditProfile.css';

const EditProfile = () => {
  return (
	<div className="editprofile-container">
		<div className="editprofile-row">
			<div className="editprofile-column-side"></div>
			<div className="bg-black">
				<div className="editprofile-column-main">
					<h1 className="font-bold text-2xl mt-8 ml-64 text-white">Edit Profile</h1>

						<div className="editprofile-column-row">
								<h1 class="font-bold text-xl mt-10 ml-20 text-white">Profile Details</h1>
								<h1 class="font-bold text-xl mt-10 ml-48 text-white">Change Password</h1>

								<input class="shadow appearance-none border rounded text-white ml-20 w-52 py-2 px-2 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            					id="new_name"
            					type="text"
            					placeholder="New Name"
								/>
								<input class="shadow appearance-none border rounded text-white ml-28 w-52 py-2 px-2 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            					id="current_password"
            					type="text"
            					placeholder="Current Password"
								/>
								<br/>
								<input class="shadow appearance-none border rounded text-white ml-20 w-52 py-2 px-2 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            					id="new_phone"
            					type="text"
            					placeholder="New PhoneNumber"
								/>
								<input class="shadow appearance-none border rounded text-white ml-28 w-52 py-2 px-2 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            					id="new_password"
            					type="text"
            					placeholder="New Password"
								/>

						</div>
						<div className="editprofile-column-row">
								<h1 class="font-bold text-xl mt-10 ml-20 text-white">Manage Payment Details</h1>
								<h1 class="font-bold text-xl mt-10 ml-20 text-white">Manage Address Details</h1>
								<br/>
								<button class="bg-blue-500 w-32 mt-6 ml-32 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
									Payment
								</button>

								<button class="bg-blue-500 w-32 mt-6 ml-48 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
									Address
								</button>
						</div>
						<div className="editprofile-column-row">
							<button type="button" 
                			class="text-white bg-gray-800 w-6/12 mt-10 ml-44 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    		Save Changes
                			</button>
						</div>
				</div>
			</div>
			<div className="editprofile-column-side"></div>
		</div>
	</div>
  )
}

export default EditProfile