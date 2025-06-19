
import React from 'react';
import { Users, FileText, Calendar, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeView: 'patients' | 'documents';
  setActiveView: (view: 'patients' | 'documents') => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const menuItems = [
    {
      id: 'patients' as const,
      label: 'Patients',
      icon: Users,
    }
  ];

  return (
    <div className="w-64 bg-blue-900 text-white h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold mb-2">DentalCare Pro</h1>
        <p className="text-blue-200 text-sm">Practice Management</p>
      </div>
      
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveView(item.id)}
                className={cn(
                  "w-full flex items-center px-4 py-3 rounded-lg transition-colors",
                  "hover:bg-blue-800 text-left",
                  activeView === item.id ? "bg-blue-800 text-white" : "text-blue-100"
                )}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-blue-800">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center mr-3">
            <span className="text-sm font-medium">DR</span>
          </div>
          <div>
            <p className="text-sm font-medium">Dr. Sarah Johnson</p>
            <p className="text-xs text-blue-200">Dentist</p>
          </div>
        </div>
      </div>
    </div>
  );
};
