import { Clock, MoreVertical } from 'lucide-react';

const UpcomingAppointments = () => {
  const appointments = [
    { id: 1, patient: 'Emma Thompson', doctor: 'Dr. John Smith', time: '09:30 AM', type: 'Checkup' },
    { id: 2, patient: 'David Miller', doctor: 'Dr. Sarah Chen', time: '10:15 AM', type: 'Consultation' },
    { id: 3, patient: 'Sophie Anderson', doctor: 'Dr. Michael Rodriguez', time: '11:00 AM', type: 'Follow-up' },
    { id: 4, patient: 'Thomas Brown', doctor: 'Dr. Emily Wilson', time: '01:30 PM', type: 'Procedure' },
    { id: 5, patient: 'Olivia Martinez', doctor: 'Dr. Robert Johnson', time: '02:45 PM', type: 'Checkup' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">Today's Appointments</h2>
        <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View all</a>
      </div>
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                <Clock className="h-5 w-5 text-blue-600 dark:text-blue-300" />
              </div>
              <div>
                <p className="font-medium text-gray-800 dark:text-white">{appointment.patient}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{appointment.doctor}</p>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{appointment.time}</span>
                  <span className="mx-2 text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{appointment.type}</span>
                </div>
              </div>
            </div>
            <div>
              <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600">
                <MoreVertical className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingAppointments;
