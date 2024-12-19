import { useEffect, useState } from 'react';
import { fetchDictrict, fetchProvince, fetchWard } from '@/_lib/address';

const Address = () => {
  const [addresses, setAddresses] = useState<any[]>([]);
  const [status, setStatus] = useState<'loading' | 'success' | 'failed'>('loading');
  const [error, setError] = useState<string | null>(null);  

  useEffect(() => {
    const fetchAddressData = async () => {
      try {
        setStatus('loading');
        const [districtData, provinceData, wardData] = await Promise.all([
          fetchDictrict(),
          fetchProvince(),
          fetchWard(),
        ]);

        // Combine address data
        const combinedAddresses = districtData.map((district: any) => {
          const province = provinceData.find((p: any) => p.id === district.province_id);
          const ward = wardData.find((w: any) => w.district_id === district.id);
          return {
            ...district,
            province: province ? province.name : 'Unknown Province',
            ward: ward ? ward.name : 'Unknown Ward',
          };
        });

        setAddresses(combinedAddresses);
        setStatus('success');
      } catch (err) {
        console.error(err);
        setError('Failed to fetch address data');
        setStatus('failed');
      }
    };

    fetchAddressData();
  }, []);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return (
      <div>
        <p>Error: {error}</p>
        <button
          onClick={() => setStatus('loading')}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!addresses.length) {
    return <p>No addresses found.</p>;
  }

  return (
    <div>
      <h3 className="text-2xl mb-4 border-b border-dashed border-gray-300">
        Billing Address
      </h3>
      {addresses.map((address) => (
        <address key={address.id} className="mb-6">
          <p className="text-xl font-semibold text-gray-800">
            District: {address.name}
          </p>
          <p className="text-gray-700">
            Ward: {address.ward}, Province: {address.province}
          </p>
          <small className="text-gray-500">
            District Code: {address.code}
          </small>
          <p className="mt-2 text-gray-600">Secondary Address</p>
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
