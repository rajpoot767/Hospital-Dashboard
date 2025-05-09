import { Users, Calendar, FlaskRound as Flask, BedDouble } from 'lucide-react';
import StatsCard from '../components/dashboard/StatsCard';
import LineChart from '../components/dashboard/LineChart';
import DoughnutChart from '../components/dashboard/DoughnutChart';
import RecentPatients from '../components/dashboard/RecentPatients';
import UpcomingAppointments from '../components/dashboard/UpcomingAppointments';
import { ChevronUp } from '../components/dashboard/ChevronDown';

const Dashboard = () => {
  const stats = [
    {
      title: 'Patients Today',
      value: 145,
      change: 12,
      increasing: true,
      icon: Users,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
    },
    {
      title: 'Appointments',
      value: 43,
      change: 8,
      increasing: true,
      icon: Calendar,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900',
    },
    {
      title: 'Lab Requests',
      value: 32,
      change: -5,
      increasing: false,
      icon: Flask,
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-100 dark:bg-purple-900',
    },
    {
      title: 'Beds Occupied',
      value: '78%',
      change: 3,
      increasing: true,
      icon: BedDouble,
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-100 dark:bg-orange-900',
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-300">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Patient Admissions</h2>
          <LineChart />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Department Distribution</h2>
          <DoughnutChart />
        </div>
      </div>

      {/* Recent patients and upcoming appointments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <RecentPatients />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <UpcomingAppointments />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
