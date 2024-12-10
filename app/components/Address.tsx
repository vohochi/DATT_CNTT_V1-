import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { fetchAddressGroups } from '@/store/slice/addressSlice';
import { useEffect } from 'react';

const Address = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { groups, status, error } = useSelector((state: RootState) => state.address);

  // Fetch addresses on component mount
  useEffect(() => {
    dispatch(fetchAddressGroups());
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return (
      <div>
        <p>Error: {error}</p>
        <button
          onClick={() => dispatch(fetchAddressGroups())}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!groups.length) {
    return <p>No addresses found.</p>;
  }

  return (
    <div>
      <h3 className="text-2xl mb-4 border-b border-dashed border-gray-300">
        Billing Address
      </h3>
      {groups.map((address) => (
        <address key={address.id} className="mb-6">
          <p className="text-xl font-semibold text-gray-800">
            {address.house_number}
          </p>
          <p className="text-gray-700">
            {address.ward}, {address.district}, {address.province} <br />
            <small className="text-gray-500">
              Ward Code: {address.ward_code}, District Code: {address.district_code}
            </small>
          </p>
          <p className={`mt-2 ${address.is_primary ? 'text-green-600' : 'text-gray-600'}`}>
            {address.is_primary ? 'Primary Address' : 'Secondary Address'}
          </p>
          <a
            href="#"
            className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
          >
            <span className="iconify" data-icon="fa:pencil-square-o" data-width="16"></span>
            <span className="ml-2 italic">Edit Address</span>
          </a>
        </address>
      ))}
    </div>
  );
};

export default Address;
