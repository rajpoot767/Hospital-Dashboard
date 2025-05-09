import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';

const BedManagement = () => {
  const [beds, setBeds] = useState([
    { id: 1, roomNumber: '101', bedNumber: 'A', type: 'General', status: 'Occupied', patient: 'John Doe' },
    { id: 2, roomNumber: '101', bedNumber: 'B', type: 'General', status: 'Available', patient: null },
    { id: 3, roomNumber: '102', bedNumber: 'A', type: 'ICU', status: 'Occupied', patient: 'Jane Smith' },
    { id: 4, roomNumber: '102', bedNumber: 'B', type: 'ICU', status: 'Available', patient: null },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddBedPopup, setShowAddBedPopup] = useState(false);
  const [newBed, setNewBed] = useState({
    roomNumber: '',
    bedNumber: '',
    type: 'General',
    status: 'Available',
    patient: '',
  });

  useEffect(() => {
    document.title = 'Bed Management - Medicare';
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredBeds = beds.filter(bed => {
    const searchStr = `${bed.roomNumber} ${bed.bedNumber} ${bed.type} ${bed.status} ${bed.patient || ''}`.toLowerCase();
    return searchStr.includes(searchTerm.toLowerCase());
  });

  const handleAddBedClick = () => {
    setShowAddBedPopup(true);
  };

  const closeAddBedPopup = () => {
    setShowAddBedPopup(false);
    setNewBed({
      roomNumber: '',
      bedNumber: '',
      type: 'General',
      status: 'Available',
      patient: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewBed(prevBed => ({
      ...prevBed,
      [name]: value,
    }));
  };

  const handleSaveBed = () => {
    const nextId = beds.length > 0 ? Math.max(...beds.map(b => b.id)) + 1 : 1;
    const newBedWithId = { ...newBed, id: nextId };
    setBeds([...beds, newBedWithId]);
    closeAddBedPopup();
  };

  const handleDeleteBed = (id: number) => {
    setBeds(beds.filter(bed => bed.id !== id));
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Bed Management</h1>
          <p className="text-gray-600 dark:text-gray-300">Track real-time bed availability</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-2">
          <button
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={handleAddBedClick}
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Bed
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-6 p-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search beds..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Bed List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Room
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Bed
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Patient
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {filteredBeds.map((bed) => (
                <tr key={bed.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {bed.roomNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {bed.bedNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {bed.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {bed.status === 'Available' ? (
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        Available
                      </span>
                    ) : (
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                        Occupied
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {bed.patient || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-3">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                      onClick={() => handleDeleteBed(bed.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Bed Popup */}
      {showAddBedPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden w-full max-w-md">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Add New Bed</h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="roomNumber">
                  Room Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                  id="roomNumber"
                  type="text"
                  name="roomNumber"
                  value={newBed.roomNumber}
                  onChange={handleInputChange}
                  placeholder="Room Number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="bedNumber">
                  Bed Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                  id="bedNumber"
                  type="text"
                  name="bedNumber"
                  value={newBed.bedNumber}
                  onChange={handleInputChange}
                  placeholder="Bed Number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="type">
                  Bed Type
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                  id="type"
                  name="type"
                  value={newBed.type}
                  onChange={handleInputChange}
                >
                  <option value="General">General</option>
                  <option value="ICU">ICU</option>
                  <option value="Emergency">Emergency</option>
                  <option value="Private">Private</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="status">
                  Bed Status
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                  id="status"
                  name="status"
                  value={newBed.status}
                  onChange={handleInputChange}
                >
                  <option value="Available">Available</option>
                  <option value="Occupied">Occupied</option>
                </select>
              </div>
              {newBed.status === 'Occupied' && (
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="patient">
                    Patient Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                    id="patient"
                    type="text"
                    name="patient"
                    value={newBed.patient}
                    onChange={handleInputChange}
                    placeholder="Patient Name"
                  />
                </div>
              )}
            </div>
            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-right">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                onClick={handleSaveBed}
              >
                Save
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={closeAddBedPopup}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BedManagement;
