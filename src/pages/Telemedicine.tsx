import { useState } from 'react';
import { Calendar, Video, MessageSquare, FileText, Pill } from 'lucide-react';

const Telemedicine = () => {
  const [upcomingAppointments, setUpcomingAppointments] = useState([
    { id: 1, patientName: 'Sarah Johnson', time: '10:00 AM' },
    { id: 2, patientName: 'Michael Chen', time: '11:30 AM' },
  ]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Telemedicine</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Conduct remote consultations with patients.</p>

      {/* Schedule a Consultation */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Schedule a Consultation</h2>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Calendar className="h-5 w-5 mr-2" />
          Schedule Now
        </button>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Upcoming Appointments</h2>
        <ul>
          {upcomingAppointments.map((appointment) => (
            <li key={appointment.id} className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <div>
                <p className="text-gray-800 dark:text-white font-medium">{appointment.patientName}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Time: {appointment.time}</p>
              </div>
              <button className="flex items-center px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Video className="h-4 w-4 mr-2" />
                Start Call
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors">
            <FileText className="h-5 w-5 mr-2" />
            View Medical Records
          </button>
          <button className="flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-700 transition-colors">
            <MessageSquare className="h-5 w-5 mr-2" />
            Send Message
          </button>
          <button className="flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors">
            <Pill className="h-5 w-5 mr-2" />
            Prescription Management
          </button>
        </div>
      </div>
    </div>
  );
};

export default Telemedicine;
