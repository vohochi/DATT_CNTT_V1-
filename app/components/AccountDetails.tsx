import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { fetchProfile } from '@/_lib/customer';
import { Customer } from '@/types/Customer';

function ProfileForm() {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userProfile, setUserProfile] = useState<Customer | null>(null);
  console.log(userProfile);
  const router = useRouter();

  useEffect(() => {
    const userId = Cookies.get('user_id');

    if (userId) {
      fetchProfile(parseInt(userId))
        .then((data) => {
          const profile = data.data;
          setUserProfile(profile);

          console.log('User Profile Data:', profile);

          // Pre-fill form inputs with fetched user data
          setName(profile.name || '');
          setNickName(profile.nick_name || '');
          setEmail(profile.email || '');
          setPhone(profile.phone || '');
          setAddress(profile.address || '');
          setBirthday(profile.birthday || '');
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
        });
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Basic password validation (add more rules as needed)
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(newPassword)) {
      setPasswordError(
        'Password must be at least 8 characters long and include lowercase, uppercase, and numbers.'
      );
      return;
    }

    // Password confirmation
    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      return;
    }

    // Handle form submission logic here (send data to your server)
    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          nickName,
          email,
          phone,
          address,
          birthday,
          currentPassword,
          newPassword,
        }),
      });

      if (response.ok) {
        // Handle successful update, e.g., redirect
        router.push('/profile');
      } else {
        // Handle errors, e.g., display an error message
        console.error('Error updating profile');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container">
      <h3 className="text-2xl mb-2" style={{ borderBottom: '1px dashed #ccc' }}>
        Account Details
      </h3>
      <form onSubmit={handleSubmit} className="mt-6 pb-8">
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 text-base mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="border w-full py-3 px-3 text-gray-700"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="nickName"
            className="block text-gray-700 text-base mb-2"
          >
            Nickname
          </label>
          <input
            type="text"
            id="nickName"
            className="border w-full py-3 px-3 text-gray-700"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
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
        <div className="mb-6">
          <label htmlFor="phone" className="block text-gray-700 text-base mb-2">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            className="border w-full py-3 px-3 text-gray-700"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="address"
            className="block text-gray-700 text-base mb-2"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            className="border w-full py-3 px-3 text-gray-700"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="birthday"
            className="block text-gray-700 text-base mb-2"
          >
            Birthday
          </label>
          <input
            type="date"
            id="birthday"
            className="border w-full py-3 px-3 text-gray-700"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
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
        <div className="mb-6">
          {passwordError && <p className="text-red-500">{passwordError}</p>}
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
