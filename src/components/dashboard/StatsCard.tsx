import { ElementType } from 'react';
import { ChevronDown } from './ChevronDown';

interface StatsCardProps {
  title: string;
  value: string | number;
  change: number;
  increasing: boolean;
  icon: ElementType;
  iconColor: string;
  bgColor: string;
}

const StatsCard = ({ 
  title, 
  value, 
  change, 
  increasing, 
  icon: Icon, 
  iconColor, 
  bgColor 
}: StatsCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-all duration-200 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${bgColor}`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className={`text-sm font-medium ${increasing ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'} flex items-center`}>
          {increasing ? <ChevronDown className="h-4 w-4 mr-1 transform rotate-180" /> : <ChevronDown className="h-4 w-4 mr-1" />}
          {Math.abs(change)}%
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">from last week</span>
      </div>
    </div>
  );
};

export default StatsCard;
