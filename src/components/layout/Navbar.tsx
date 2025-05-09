import { Bell, Menu, Sun, Moon, Search, User } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';

interface NavbarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Navbar = ({ sidebarOpen, setSidebarOpen }: NavbarProps) => {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();

  return (
    <header className="z-10 py-4 bg-white dark:bg-gray-800 shadow-sm">
      <div className="container flex items-center justify-between h-full px-6 mx-auto">
        {/* Mobile hamburger */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Menu"
        >
          <Menu className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </button>

        {/* Search input */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              className="w-full pl-10 pr-4 py-2 text-sm text-gray-700 placeholder-gray-500 bg-gray-100 border-0 rounded-md dark:placeholder-gray-400 dark:text-gray-300 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Search for patients, appointments..."
              aria-label="Search"
            />
          </div>
        </div>

        {/* Right side buttons */}
        <ul className="flex items-center flex-shrink-0 space-x-4">
          {/* Theme toggler */}
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-1"
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </li>

          {/* Notifications */}
          <li className="flex">
            <button className="relative rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-1">
              <Bell className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-500 rounded-full"></span>
            </button>
          </li>

          {/* Profile menu */}
          <li className="relative">
            <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <User className="w-5 h-5" />
              </div>
            </button>
            {/* Profile dropdown would go here */}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
