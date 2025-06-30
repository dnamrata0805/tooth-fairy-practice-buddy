## Setup
``yarn``

## How to run
``yarn dev``
This command runs the node server that serves mock patients

## What to do
- Patient list page should be able to fetch initial patients
- It should be able to search through the patients on the backend side
- There should be a general fallback for loading and error states.

## Bonus
- Refactor patient list page and suggest other improvements
- Render a multi-selectable document list in the patient details page.
- Add a functional delete button for the selected documents

## Assumptions
- The app will potentially have many interactions with 40+ APIs in the backend across all the user flows
- The users will expect good performance, especially for the patient list including search functionality. (There can be upto 10,000 patients per doctor)


## Tech notes
# base URL: http://localhost:3001
# sample patient: {
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
  }

# API endpoints:
- fetch patients
endpoint:'/api/patients'
method: GET
query params: 'searchTerm'
response: patients[]

- Get patient details
endpoint: '/api/patients/:id'
method: GET
response: patient

- create a patient
endpoint: '/api/patient'
method: POST
request body: patient

- Delete a patient
method: Delete
endpoint: '/api/patients/:id'
