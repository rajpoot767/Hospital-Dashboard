import { useState } from 'react';
import { Save, Plus, PencilLine, Trash2 } from 'lucide-react';

const HospitalSettings = () => {
  const [activeTab, setActiveTab] = useState('departments');
  
  const departments = [
    { id: 1, name: 'Cardiology', description: 'Heart and cardiovascular system', head: 'Dr. Sarah Miller', rooms: 12 },
    { id: 2, name: 'Neurology', description: 'Brain and nervous system', head: 'Dr. Michael Chen', rooms: 8 },
    { id: 3, name: 'Orthopedics', description: 'Bones, joints, and muscles', head: 'Dr. James Wilson', rooms: 10 },
    { id: 4, name: 'Pediatrics', description: 'Children\'s healthcare', head: 'Dr. Emily Johnson', rooms: 15 },
    { id: 5, name: 'Oncology', description: 'Cancer treatment', head: 'Dr. Robert Brown', rooms: 9 },
    { id: 6, name: 'Gastroenterology', description: 'Digestive system', head: 'Dr. Lisa Martinez', rooms: 7 },
  ];
  
  const rooms = [
    { id: 1, number: '101', type: 'General Ward', beds: 6, department: 'Cardiology', floor: '1st' },
    { id: 2, number: '102', type: 'Private Room', beds: 1, department: 'Cardiology', floor: '1st' },
    { id: 3, number: '201', type: 'ICU', beds: 4, department: 'Neurology', floor: '2nd' },
    { id: 4, number: '202', type: 'General Ward', beds: 8, department: 'Orthopedics', floor: '2nd' },
    { id: 5, number: '301', type: 'Private Room', beds: 1, department: 'Pediatrics', floor: '3rd' },
    { id: 6, number: '302', type: 'Emergency', beds: 3, department: 'Emergency', floor: '3rd' },
  ];
  
  const labTests = [
    { id: 1, name: 'Complete Blood Count (CBC)', price: 50, turnAroundTime: '1 day', department: 'Hematology' },
    { id: 2, name: 'Lipid Profile', price: 75, turnAroundTime: '1 day', department: 'Biochemistry' },
    { id: 3, name: 'Liver Function Test', price: 80, turnAroundTime: '1 day', department: 'Biochemistry' },
    { id: 4, name: 'Thyroid Function Test', price: 90, turnAroundTime: '2 days', department: 'Endocrinology' },
    { id: 5, name: 'MRI Scan', price: 350, turnAroundTime: '2 days', department: 'Radiology' },
    { id: 6, name: 'CT Scan', price: 300, turnAroundTime: '1 day', department: 'Radiology' },
  ];

  return (
    <div className="container mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Hospital Settings</h1>
        <p className="text-gray-600 dark:text-gray-300">Configure hospital departments, rooms, and services</p>
      </div>

      {/* Settings Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-6">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex overflow-x-auto">
            {[
              { id: 'departments', name: 'Departments' },
              { id: 'rooms', name: 'Rooms & Beds' },
              { id: 'lab-tests', name: 'Lab Tests' },
              { id: 'working-hours', name: 'Working Hours' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-4 text-sm font-medium whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Department Settings */}
      {activeTab === 'departments' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Departments</h2>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="h-5 w-5 mr-2" />
              Add Department
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Department Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Department Head
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Rooms
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {departments.map((department) => (
                  <tr key={department.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {department.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {department.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {department.head}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {department.rooms}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-3">
                        <PencilLine className="h-5 w-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Rooms & Beds Settings */}
      {activeTab === 'rooms' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Rooms & Beds</h2>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="h-5 w-5 mr-2" />
              Add Room
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Room Number
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Beds
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Floor
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {rooms.map((room) => (
                  <tr key={room.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {room.number}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        room.type === 'ICU' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                        room.type === 'Private Room' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                        room.type === 'Emergency' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                        'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}>
                        {room.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {room.beds}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {room.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {room.floor}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-3">
                        <PencilLine className="h-5 w-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Lab Tests Settings */}
      {activeTab === 'lab-tests' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Lab Tests</h2>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="h-5 w-5 mr-2" />
              Add Test
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Test Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Price ($)
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Turn Around Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {labTests.map((test) => (
                  <tr key={test.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {test.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      ${test.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {test.turnAroundTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {test.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-3">
                        <PencilLine className="h-5 w-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Working Hours Settings */}
      {activeTab === 'working-hours' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Working Hours</h2>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Save className="h-5 w-5 mr-2" />
              Save Changes
            </button>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 gap-6">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                <div key={day} className="flex flex-col md:flex-row md:items-center md:justify-between pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0">
                  <div className="text-sm font-medium text-gray-900 dark:text-white w-40">{day}</div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked={day !== 'Sunday'} />
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Open</span>
                    </label>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-3 md:mt-0">
                    <div>
                      <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Opening Time</label>
                      <input 
                        type="time" 
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        defaultValue={day !== 'Sunday' ? '09:00' : ''}
                        disabled={day === 'Sunday'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Closing Time</label>
                      <input 
                        type="time" 
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        defaultValue={day !== 'Sunday' ? '17:00' : ''}
                        disabled={day === 'Sunday'}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HospitalSettings;
