
import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Patient } from '../pages/Index';
import { PatientSearchInput } from './PatientSearchInput';

interface PatientListProps {
  selectedPatient: Patient | null;
  onSelectPatient: (patient: Patient) => void;
}

export const PatientList: React.FC<PatientListProps> = ({ selectedPatient, onSelectPatient }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const patients = []; // mockPatients; // Replace with actual data fetching logic

  return (
    <div className="h-screen flex flex-col bg-white">
      <div className="p-6 border-b border-gray-200">
        <PatientSearchInput
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        {patients.map((patient) => {
          const isSelected = selectedPatient?.id === patient.id;
          return (
            <div
              onClick={() => onSelectPatient(patient)}
              className={cn(
                "p-4 border-b border-gray-100 cursor-pointer transition-colors hover:bg-gray-50",
                isSelected ? "bg-blue-50 border-blue-200" : ""
              )}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900">
                  {patient.firstName} {patient.lastName}
                </h3>
              </div>

              <div className="space-y-1">
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-3 h-3 mr-2" />
                  {patient.phone}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-3 h-3 mr-2" />
                  {patient.email}
                </div>
              </div>
            </div>
          )
        }
        )}

        {patients.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            <p>No patients found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};
