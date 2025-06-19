import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
const dummyPdfUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
let mockPatients = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
    dateOfBirth: '1985-03-15',
    phone: '(555) 123-4567',
    email: 'john.smith@email.com',
    address: '123 Main St, Anytown, ST 12345',
    // Assuming you might have these fields from previous examples
    insuranceProvider: 'HealthNet',
    emergencyContact: 'Jane Smith (555) 123-4568',
    medicalHistory: ['Allergy to penicillin', 'Hypertension'],
    documents: [
      { id: 'doc1-1', link: dummyPdfUrl, type: 'x-ray', uploadDate: '2023-01-15', size: '2.5MB' },
      { id: 'doc1-2', link: dummyPdfUrl, type: 'treatment-plan', uploadDate: '2023-01-20', size: '1.2MB' },
    ],
  },
  {
    id: '2',
    firstName: 'Emily',
    lastName: 'Johnson',
    dateOfBirth: '1992-07-22',
    phone: '(555) 987-6543',
    email: 'emily.johnson@email.com',
    address: '456 Oak Ave, Anytown, ST 12345',
    insuranceProvider: 'BlueShield',
    emergencyContact: 'David Johnson (555) 987-6544',
    medicalHistory: ['Asthma'],
    documents: [
      { id: 'doc2-1', link: dummyPdfUrl, type: 'receipt', uploadDate: '2023-06-10', size: '0.5MB' },
    ],
  },
  {
    id: '3',
    firstName: 'Michael',
    lastName: 'Brown',
    dateOfBirth: '1978-11-08',
    phone: '(555) 456-7890',
    email: 'michael.brown@email.com',
    address: '789 Pine St, Anytown, ST 12345',
    insuranceProvider: 'Aetna',
    emergencyContact: 'Sarah Brown (555) 456-7891',
    medicalHistory: ['Diabetes Type 2'],
    documents: [],
  },
  {
    id: '4',
    firstName: 'Jessica',
    lastName: 'Davis',
    dateOfBirth: '1995-01-30',
    phone: '(555) 234-5678',
    email: 'jessica.davis@email.com',
    address: '101 Maple Dr, Anytown, ST 12345',
    insuranceProvider: 'Cigna',
    emergencyContact: 'Robert Davis (555) 234-5679',
    medicalHistory: ['None'],
    documents: [
      { id: 'doc4-1', link: dummyPdfUrl, type: 'treatment-plan', uploadDate: '2024-01-10', size: '1.0MB' },
    ],
  },
  {
    id: '5',
    firstName: 'David',
    lastName: 'Wilson',
    dateOfBirth: '1980-09-12',
    phone: '(555) 345-6789',
    email: 'david.wilson@email.com',
    address: '202 Birch Ln, Anytown, ST 12345',
    insuranceProvider: 'UnitedHealthcare',
    emergencyContact: 'Linda Wilson (555) 345-6780',
    medicalHistory: ['High cholesterol'],
    documents: [
      { id: 'doc5-1', link: dummyPdfUrl, type: 'x-ray', uploadDate: '2023-11-05', size: '2.8MB' },
      { id: 'doc5-2', link: dummyPdfUrl, type: 'schedule', uploadDate: '2023-11-06', size: '0.3MB' },
    ],
  },
  {
    id: '6',
    firstName: 'Sarah',
    lastName: 'Miller',
    dateOfBirth: '2001-05-25',
    phone: '(555) 567-8901',
    email: 'sarah.miller@email.com',
    address: '303 Cedar Ct, Anytown, ST 12345',
    insuranceProvider: 'Kaiser Permanente',
    emergencyContact: 'James Miller (555) 567-8902',
    medicalHistory: ['Migraines'],
    documents: [],
  },
  {
    id: '7',
    firstName: 'Christopher',
    lastName: 'Garcia',
    dateOfBirth: '1970-12-01',
    phone: '(555) 678-9012',
    email: 'chris.garcia@email.com',
    address: '404 Spruce Pl, Anytown, ST 12345',
    insuranceProvider: 'Humana',
    emergencyContact: 'Maria Garcia (555) 678-9013',
    medicalHistory: ['Arthritis'],
    documents: [
      { id: 'doc7-1', link: dummyPdfUrl, type: 'notes', uploadDate: '2022-08-19', size: '0.1MB' },
    ],
  },
  {
    id: '8',
    firstName: 'Amanda',
    lastName: 'Rodriguez',
    dateOfBirth: '1988-02-18',
    phone: '(555) 789-0123',
    email: 'amanda.rodriguez@email.com',
    address: '505 Willow Way, Anytown, ST 12345',
    insuranceProvider: 'MetLife Dental',
    emergencyContact: 'Carlos Rodriguez (555) 789-0124',
    medicalHistory: ['Seasonal allergies'],
    documents: [
      { id: 'doc8-1',link: dummyPdfUrl, type: 'records', uploadDate: '2021-07-22', size: '15.2MB' },
      { id: 'doc8-2', link: dummyPdfUrl, type: 'billing', uploadDate: '2024-02-01', size: '0.2MB' },
    ],
  }
];

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.get('/api/patients', (req, res) => {
  setTimeout(() => {
    const searchTerm = req.query.searchTerm?.toLowerCase() || '';
    if (searchTerm) {
      const filteredPatients = mockPatients.filter(patient =>
        patient.firstName.toLowerCase().includes(searchTerm) ||
        patient.lastName.toLowerCase().includes(searchTerm) ||
        (patient.email && patient.email.toLowerCase().includes(searchTerm)) ||
        (patient.phone && patient.phone.toLowerCase().includes(searchTerm))
      );
      res.json(filteredPatients);
    } else {
      res.json(mockPatients); // Return all patients if no search term
    }
  }, 2000); // Simulate a delay for realistic API response time
});

app.get('/api/patients/:id', (req, res) => {
  const patientId = req.params.id;
  const patient = mockPatients.find(p => p.id === patientId);
  if (patient) {
    res.json(patient);
  } else {
    res.status(404).json({ message: 'Patient not found' });
  }
});


app.post('/api/patient', (req, res) => {
  const newPatientData = req.body;
  if (!newPatientData || !newPatientData.firstName || !newPatientData.lastName) {
    return res.status(400).json({ message: 'Missing required patient data (firstName, lastName)' });
  }
  const newPatient = {
    id: uuidv4(),
    ...newPatientData,
  };
  mockPatients.push(newPatient);
  console.log(`New patient added: ${newPatient.firstName} ${newPatient.lastName} (ID: ${newPatient.id})`);
  res.status(201).json(newPatient);
});

app.delete('/api/patients/:id', (req, res) => {
  const patientId = req.params.id;
  const patientIndex = mockPatients.findIndex((p) => p.id === patientId);

  if (patientIndex !== -1) {
    const deletedPatient = mockPatients.splice(patientIndex, 1);
    console.log(`Deleted patient with ID: ${patientId}`, deletedPatient[0]);
    res.status(200).json({ message: `Patient with ID ${patientId} deleted successfully.` });
  } else {
    console.log(`Patient with ID: ${patientId} not found for deletion.`);
    res.status(404).json({ message: `Patient with ID ${patientId} not found.` });
  }
});

app.listen(port, () => {
  console.log(`Mock patient data server listening at http://localhost:${port}`);
});
