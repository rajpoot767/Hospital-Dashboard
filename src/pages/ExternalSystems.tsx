import React from 'react';
 

 const ExternalSystems = () => {
  const handleConnect = (systemName: string) => {
  alert(`Connecting to ${systemName}... (Implementation not available in this demo)`);
  };
 

  return (
  <div className="container mx-auto p-4">
  <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">External Systems Integration</h1>
 

  {/* Pharmacy Systems */}
  <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
  <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Pharmacy Systems</h2>
  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
  <li>View medication availability and pricing</li>
  <li>Submit electronic prescriptions</li>
  <li>Receive updates on order status</li>
  <li>Manage formulary compliance</li>
  </ul>
  <button
  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
  onClick={() => handleConnect('Pharmacy System')}
  >
  Connect to Pharmacy System
  </button>
  </section>
 

  {/* Lab Systems (LIS) */}
  <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
  <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Lab Systems (LIS)</h2>
  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
  <li>Order lab tests electronically</li>
  <li>Receive lab results in real-time</li>
  <li>Track the status of lab tests</li>
  <li>View historical lab data for patients</li>
  </ul>
  <button
  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
  onClick={() => handleConnect('Lab System')}
  >
  Connect to Lab System
  </button>
  </section>
 

  {/* Billing Systems */}
  <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
  <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Billing Systems</h2>
  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
  <li>Automatically generate invoices based on services rendered</li>
  <li>Submit claims to insurance providers</li>
  <li>Track claim status and payments</li>
  <li>Manage patient balances</li>
  </ul>
  <button
  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
  onClick={() => handleConnect('Billing System')}
  >
  Connect to Billing System
  </button>
  </section>
 

  {/* EHR Systems */}
  <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
  <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">EHR (Electronic Health Record) Systems</h2>
  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
  <li>Share patient data with other healthcare providers</li>
  <li>Access patient information from other healthcare organizations</li>
  <li>Coordinate care across different settings</li>
  </ul>
  <button
  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
  onClick={() => handleConnect('EHR System')}
  >
  Connect to EHR System
  </button>
  </section>
 

  {/* Medical Device Integration */}
  <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
  <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Medical Device Integration</h2>
  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
  <li>Collect data from vital signs monitors, ventilators, and other medical devices</li>
  <li>Transmit data to the EHR for analysis and reporting</li>
  <li>Improve patient monitoring and safety</li>
  </ul>
  <button
  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
  onClick={() => handleConnect('Medical Devices')}
  >
  Connect to Medical Devices
  </button>
  </section>
  </div>
  );
 };
 

 export default ExternalSystems;
