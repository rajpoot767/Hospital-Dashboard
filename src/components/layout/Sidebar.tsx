import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Settings, Calendar, FlaskRound as Flask, CreditCard, Pill, UserPlus, X, PlusCircle, Building2, ListChecks, Archive, LayoutDashboard, MonitorSmartphone, FileText, UserCog, Database, BedDouble } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { user } = useAuth();

  const navigationItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Patient Management', icon: Users, path: '/patients' },
    { name: 'Create New User', icon: UserPlus, path: '/users' },
    { name: 'Hospital Settings', icon: Settings, path: '/settings' },
    { name: 'Appointments', icon: Calendar, path: '/appointments' },
    { name: 'Patient Records', icon: ListChecks, path: '/patient-records' },
    { name: 'Inventory Management', icon: Archive, path: '/inventory' },
    { name: 'Reporting & Analytics', icon: LayoutDashboard, path: '/reporting' },
    { name: 'Telemedicine', icon: MonitorSmartphone, path: '/telemedicine' },
    { name: 'Billing & Claims', icon: CreditCard, path: '/billing' },
    { name: 'Staff Scheduling', icon: Calendar, path: '/staff-scheduling' },
    { name: 'Bed Management', icon: BedDouble, path: '/bed-management' },
    { name: 'External Systems', icon: Database, path: '/external-systems' },
    { name: 'Patient Portal', icon: Users, path: '/patient-portal' },
    { name: 'Feedback & Surveys', icon: FileText, path: '/feedback' },
    { name: 'User Role Management', icon: UserCog, path: '/user-roles' },
    { name: 'System Configuration', icon: Settings, path: '/system-config' },
    { name: 'Lab Tests', icon: Flask, path: '/lab-tests' },
    { name: 'Pharmacy', icon: Pill, path: '/pharmacy' },
    { name: 'Departments', icon: Building2, path: '/departments' },
  ];

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity lg:hidden ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      >
        {/* Closing button for mobile sidebar */}
        {sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        )}
      </div>

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 lg:transform-none lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <Link to="/" className="flex items-center space-x-2">
            <PlusCircle className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-semibold text-gray-800 dark:text-white">MediCare</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center px-2 py-3">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                {user?.name?.charAt(0) || 'U'}
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{user?.name || 'User'}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{user?.role || 'Role'}</p>
            </div>
          </div>
        </div>

        <nav className="mt-4 px-2 space-y-1 overflow-y-auto h-[calc(100vh-150px)]">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path || 
                           (item.path !== '/' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <item.icon className={`mr-3 h-5 w-5 ${isActive ? 'text-blue-500' : 'text-gray-500 dark:text-gray-400'}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
