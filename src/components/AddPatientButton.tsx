
import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const AddPatientButton: React.FC = () => {
  return (
    <Button className="bg-blue-600 hover:bg-blue-700">
      <Plus className="w-4 h-4 mr-2" />
      Add Patient
    </Button>
  );
};
