import { useState } from 'react';
import { Calendar, Clock, Plus, Search, Filter, MoreVertical } from 'lucide-react';

const Appointments = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const appointments = [
    {
      id: 1,
      patientName: 'Sarah Johnson',
      doctorName: 'Dr. Michael Chen',
      department: 'Cardiology',
      date: '2024-03-15',
      time: '09:30 AM',
      status: 'Scheduled',
      type: 'Follow-up'
    },
    {
      id: 2,
      patientName: 'Robert Williams',
      doctorName: 'Dr. Emily Wilson',
      department: 'Neurology',
      date: '2024-03-15',
      time: '10:15 AM',
      status: 'In Progress',
      type: 'Consultation'
    },
    {
      id: 3,
      patientName: 'Maria Garcia',
      doctorName: 'Dr. James Anderson',
      department: 'Orthopedics',
      date: '2024-03-15',
      time: '11:00 AM',
      status: 'Completed',
      type: 'Initial Visit'
    }
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Appointments</h1>
          <p className="text-gray-600 dark:text-gray-300">Manage and schedule patient appointments</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="h-5 w-5 mr-2" />
            New Appointment
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
                placeholder="Search appointments..."
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
            {['Upcoming', 'Today', 'Completed', 'Cancelled'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-4 py-4 text-sm font-medium whitespace-nowrap ${
                  activeTab === tab.toLowerCase()
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

      {/* Calendar View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Calendar</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-md dark:bg-blue-900 dark:text-blue-300">Month</button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md dark:text-gray-300 dark:hover:bg-gray-700">Week</button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md dark:text-gray-300 dark:hover:bg-gray-700">Day</button>
            </div>
          </div>
          <div className="border rounded-lg border-gray-200 dark:border-gray-700 p-4 h-96 flex items-center justify-center">
            <Calendar className="h-16 w-16 text-gray-400" />
            <p className="ml-4 text-gray-500 dark:text-gray-400">Calendar integration coming soon</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Today's Schedule</h2>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="border-l-4 border-blue-500 pl-4 py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-800 dark:text-white">{appointment.patientName}</p>
                  <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{appointment.doctorName}</p>
                <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-1" />
                  {appointment.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
