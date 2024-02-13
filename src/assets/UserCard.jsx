import React from 'react';

function UserCard({ user }) {
  return (
    <div className='relative'>
    <div className='absolute inset-0 bg-slate-600 rounded-xl blur'></div>
    <div className="max-w-md mx-auto bg-slate-200 rounded-xl overflow-hidden shadow-lg md:max-w-2xl transition-transform duration-300 transform hover:scale-105">
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
        <img className="h-56 rounded-lg object-center" src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      </div>
      <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
        <div>
          <h1 className="text-gray-900 font-bold text-2xl mb-6">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h1>
          {/*<p className="text-gray-700 text-base mb-4">Email: {user.email}</p>*/}
          <p className="text-gray-700 text-base mb-4">Gender: {user.gender}</p>
          {/*<p className="text-gray-700 text-base mb-4">Location: {`${user.location.city}, ${user.location.state}, ${user.location.country}`}</p> */}
          <p className="text-gray-700 text-base mb-4">Phone Number: {user.phone}</p>
          <p className="text-gray-700 text-base mb-4">Cell: {user.cell}</p>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default UserCard;
