
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface PatientSearchInputProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const PatientSearchInput: React.FC<PatientSearchInputProps> = ({ 
  searchTerm, 
  onSearchChange 
}) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <Input
        placeholder="Search patients..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10"
      />
    </div>
  );
};
