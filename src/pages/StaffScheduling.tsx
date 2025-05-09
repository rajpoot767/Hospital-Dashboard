import { useState } from 'react';
import { Calendar, Plus, User, Clock, FileText, Search, Filter } from 'lucide-react';

const StaffScheduling = () => {
  const [activeTab, setActiveTab] = useState('roster');
  const [schedules, setSchedules] = useState([
    { id: 1, staffName: 'John Smith', role: 'Doctor', shift: 'Morning', date: '2024-03-16', time: '8:00 AM - 4:00 PM' },
    { id: 2, staffName: 'Alice Johnson', role: 'Nurse', shift: 'Evening', date: '2024-03-16', time: '4:00 PM - 12:00 AM' },
    { id: 3, staffName: 'Michael Brown', role: 'Receptionist', shift: 'Morning', date: '2024-03-17', time: '8:00 AM - 4:00 PM' },
  ]);
  const [showAddSchedulePopup, setShowAddSchedulePopup] = useState(false);
  const [newSchedule, setNewSchedule] = useState({
    staffName: '',
    role: '',
    shift: '',
    date: '',
    startTime: '',
    endTime: '',
  });

  const handleAddScheduleClick = () => {
    setShowAddSchedulePopup(true);
  };

  const closeAddSchedulePopup = () => {
    setShowAddSchedulePopup(false);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewSchedule({ ...newSchedule, [name]: value });
  };

  const handleSaveSchedule = () => {
    // Save the new schedule logic here
    console.log('New Schedule:', newSchedule);
    closeAddSchedulePopup();
  };

  const staffMembers = ['John Smith', 'Alice Johnson', 'Michael Brown', 'Emily Davis'];
  const roles = ['Doctor', 'Nurse', 'Receptionist', 'Lab Assistant'];
  const shifts = ['Morning', 'Evening', 'Night'];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Staff Scheduling</h1>
          <p className="text-gray-600 dark:text-gray-300">Manage staff rosters and shift planning</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={handleAddScheduleClick}
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Schedule
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-6">
        <div className="p-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="relative md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search staff schedules..."
              />
            </div>
            <div className="flex mt-4 md:mt-0">
              <button className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t border-gray-200 dark:border-gray-700">
          <nav className="flex overflow-x-auto">
            {['Roster', 'Availability', 'Time Off', 'Reporting'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase().replace(' ', ''))}
                className={`px-4 py-4 text-sm font-medium whitespace-nowrap ${
                  activeTab === tab.toLowerCase().replace(' ', '')
                    ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Staff Roster View */}
      {activeTab === 'roster' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Staff Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Shift
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {schedules.map((schedule) => (
                  <tr key={schedule.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                          <User className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {schedule.staffName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {schedule.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {schedule.shift}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {schedule.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {schedule.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Staff Availability */}
      {activeTab === 'availability' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Staff Availability</h2>
          <p className="text-gray-600 dark:text-gray-300">Manage staff availability and time off requests</p>
          {/* Add staff availability management components here */}
        </div>
      )}

      {/* Time Off Requests */}
      {activeTab === 'timeoff' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Time Off Requests</h2>
          <p className="text-gray-600 dark:text-gray-300">Approve or reject staff time off requests</p>
          {/* Add time off request management components here */}
        </div>
      )}

      {/* Reporting */}
      {activeTab === 'reporting' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Reporting</h2>
          <p className="text-gray-600 dark:text-gray-300">Generate reports on staff scheduling data</p>
          {/* Add reporting components here */}
        </div>
      )}

      {/* Add Schedule Popup */}
      {showAddSchedulePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden w-full max-w-md">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Add New Schedule</h3>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="staffName">
                  Staff Name
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                  id="staffName"
                  name="staffName"
                  onChange={handleInputChange}
                >
                  <option value="">Select Staff</option>
                  {staffMembers.map((staff) => (
                    <option key={staff} value={staff}>
                      {staff}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="role">
                  Role
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                  id="role"
                  name="role"
                  onChange={handleInputChange}
                >
                  <option value="">Select Role</option>
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="shift">
                  Shift
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                  id="shift"
                  name="shift"
                  onChange={handleInputChange}
                >
                  <option value="">Select Shift</option>
                  {shifts.map((shift) => (
                    <option key={shift} value={shift}>
                      {shift}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="date">
                  Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                  id="date"
                  type="date"
                  name="date"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="startTime">
                  Start Time
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                  id="startTime"
                  type="time"
                  name="startTime"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="endTime">
                  End Time
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                  id="endTime"
                  type="time"
                  name="endTime"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-right">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                onClick={handleSaveSchedule}
              >
                Save
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={closeAddSchedulePopup}
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

export default StaffScheduling;
