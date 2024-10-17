import React, { useState } from 'react';

function ProfileForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
  };

  return (
    <div className="container">
      <h3 className="text-2xl mb-2" style={{ borderBottom: '1px dashed #ccc' }}>
        Account Details
      </h3>
      <form onSubmit={handleSubmit} className="mt-6 pb-8">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-base mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="border w-full py-3 px-3 text-gray-700"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-gray-700 text-base mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="border w-full py-3 px-3 text-gray-700"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="displayName"
            className="block text-gray-700 text-base mb-2"
          >
            Display Name
          </label>
          <input
            type="text"
            id="displayName"
            className="border w-full py-3 px-3 text-gray-700"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 text-base mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="border w-full py-3 px-3 text-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <h3 className="mb-2 text-xl">Password change</h3>
        <div className="mb-6">
          <label
            htmlFor="currentPassword"
            className="block text-gray-700 text-base mb-2"
          >
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            className="border w-full py-3 px-3 text-gray-700"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label
              htmlFor="newPassword"
              className="block text-gray-700 text-base mb-2"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="border w-full py-3 px-3 text-gray-700"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-base mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="border w-full py-3 px-3 text-gray-700"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-red-500 hover:bg-black transition duration-500 text-white py-3 px-4 focus:outline-none focus-shadow-outline"
          >
            SAVE CHANGES
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
