
import React from 'react';
import { Phone, Mail, MapPin, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { Patient } from '../pages/Index';
import { formatDate, calculateAge } from '../utils/dateUtils';

interface PatientDetailsProps {
  patient: Patient;
}

export const PatientDetails: React.FC<PatientDetailsProps> = ({ patient }) => {
  return (
    <div className="h-screen overflow-y-auto bg-gray-50 p-6">
      <div className="max-w-4xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {patient.firstName} {patient.lastName}
          </h1>
          <p className="text-gray-600">
            Age {calculateAge(patient.dateOfBirth)} • Born {formatDate(patient.dateOfBirth)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-600" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-gray-400" />
                <span>{patient.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-gray-400" />
                <span>{patient.email}</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-gray-400 mt-0.5" />
                <span>{patient.address}</span>
              </div>
            </CardContent>
          </Card>
      </div>
    </div>
    </div>
  );
};
