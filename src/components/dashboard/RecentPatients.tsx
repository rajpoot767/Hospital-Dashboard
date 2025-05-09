import { UserRound, MoreVertical } from 'lucide-react';

const RecentPatients = () => {
  const patients = [
    { id: 1, name: 'Sarah Johnson', age: 42, status: 'Admitted', department: 'Cardiology', date: '2023-05-20' },
    { id: 2, name: 'Michael Chen', age: 35, status: 'Discharged', department: 'Orthopedics', date: '2023-05-19' },
    { id: 3, name: 'Robert Williams', age: 58, status: 'Admitted', department: 'Neurology', date: '2023-05-18' },
    { id: 4, name: 'Linda Davis', age: 29, status: 'Emergency', department: 'Trauma', date: '2023-05-20' },
    { id: 5, name: 'James Wilson', age: 47, status: 'Discharged', department: 'Gastroenterology', date: '2023-05-17' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">Recent Patients</h2>
        <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View all</a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              <th className="px-4 py-3">Patient</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Department</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            {patients.map((patient) => (
              <tr key={patient.id} className="text-gray-700 dark:text-gray-300">
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">
                      <UserRound className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="font-semibold">{patient.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{patient.age} years</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    patient.status === 'Admitted' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    patient.status === 'Discharged' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {patient.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">{patient.department}</td>
                <td className="px-4 py-3 text-sm">{patient.date}</td>
                <td className="px-4 py-3 text-sm">
                  <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                    <MoreVertical className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentPatients;
