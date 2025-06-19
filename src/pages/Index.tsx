import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { PatientList } from '../components/PatientList';
import { PatientDetails } from '../components/PatientDetails';

export type Patient = {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  address: string;
  insuranceProvider: string;
  emergencyContact: string;
  medicalHistory: string[];
  documents: Document[];
};

export type Document = {
  id: string;
  name: string;
  type: 'x-ray' | 'treatment-plan' | 'insurance' | 'consent-form' | 'notes';
  uploadDate: string;
  size: string;
  url?: string;
};

const Index = () => {
  const [activeView, setActiveView] = useState<'patients' | 'documents'>('patients');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      
      <main className="flex-1 flex">
        {activeView === 'patients' && (
          <>
            <div className="w-1/2 border-r border-gray-200">
              <PatientList 
                selectedPatient={selectedPatient}
                onSelectPatient={setSelectedPatient}
              />
            </div>
            <div className="w-1/2">
              {selectedPatient ? (
                <PatientDetails patient={selectedPatient} />
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <h3 className="text-lg font-medium mb-2">Select a Patient</h3>
                  <p>Choose a patient from the list to view their details</p>
                </div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Index;
