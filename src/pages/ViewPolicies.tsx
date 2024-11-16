import React from 'react';
import Header from '../components/Header';
import { IonPage } from '@ionic/react';

export default function ViewPolicies() {
  // Sample data for policies
  const policies = [
    {
      id: 1,
      policyNumber: 'KMB6732',
      carModel: 'VW Taigun 2024',
      carImage: '/images/car.jpg', // Replace with the actual image URL of the car
      startDate: '15/03/2024',
      endDate: '15/03/2027',
      provider: 'Kotak Mahindra',
    },
   
  ];

  const handleViewDetails = (policyId: number) => {
    // Here you can implement navigation or modal to view detailed information
    alert(`Viewing details for policy ID: ${policyId}`);
  };

  return (
    <IonPage className='bg-white h-screen overflow-auto'>
      <Header goBack={true} title={"View Policies"} />
      <div className='p-4 font-faculty flex flex-col h-full'>
        <h1 className='text-xl font-bold mb-4 text-black'>Your Added Policies</h1>

        {policies.length > 0 ? (
          policies.map((policy) => (
            <div
              key={policy.id}
              className='bg-gray-100 p-4 mb-4 rounded-lg shadow-md transition-all hover:bg-gray-200 text-black'
            >
              <div className='flex flex-row'>
                <img
                  src={policy.carImage}
                  alt={policy.carModel}
                  className='w-24 h-24 object-cover rounded-md mr-4 '
                />
                <div className='flex flex-col justify-between'>
                  <h2 className='font-bold text-lg'>{policy.carModel}</h2>
                  <p className='text-sm text-gray-700 mb-1'>
                    <strong>Policy Number:</strong> {policy.policyNumber}
                  </p>
                  <p className='text-sm text-gray-700 mb-1'>
                    <strong>Provider:</strong> {policy.provider}
                  </p>
                  <p className='text-sm text-gray-700 mb-1'>
                    <strong>Valid From:</strong> {policy.startDate}
                  </p>
                  <p className='text-sm text-gray-700'>
                    <strong>Valid To:</strong> {policy.endDate}
                  </p>
                </div>
              </div>
              <button
                className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all'
                onClick={() => handleViewDetails(policy.id)}
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p className='text-gray-500'>No policies have been added yet.</p>
        )}
      </div>
    </IonPage>
  );
}
