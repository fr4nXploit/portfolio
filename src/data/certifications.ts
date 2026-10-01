export interface Credential {
  title: string;
  issuer: string;
  date: string;
  dateLabel: string;
  shortName?: string;
}
export interface CredentialCategory {
  id: string;
  title: string;
  items: Credential[];
}
const training = (title: string): Credential => ({ title, issuer: 'Professional Training', date: '2024', dateLabel: '2024' });

// Author-supplied titles, issuers and dates. Verification URLs can be added when supplied.
export const credentialCategories: CredentialCategory[] = [
  { id: 'cybersecurity', title: 'Ciberseguridad & ethical hacking', items: [
    { shortName: 'eCPPTv3', title: 'Certified Professional Penetration Tester', issuer: 'INE Security', date: '2025-01', dateLabel: 'ENE 2025' },
    { shortName: 'eCTHPv2', title: 'Certified Threat Hunting Professional', issuer: 'INE Security', date: '2025-01', dateLabel: 'ENE 2025' },
    { shortName: 'eJPTv2', title: 'Junior Penetration Tester', issuer: 'INE Security', date: '2024-09', dateLabel: 'SEP 2024' },
    { title: 'Ethical Hacking Essentials (EHE)', issuer: 'EC-Council', date: '2024', dateLabel: '2024' },
    training('Ethical Hacking Course'),
    { title: 'IBM Cybersecurity Analyst', issuer: 'IBM', date: '2024', dateLabel: '2024' },
    { title: "CS50's Introduction to Cybersecurity", issuer: 'Harvard University', date: '2024', dateLabel: '2024' },
    training('Computer Forensics Course'),
    training('DLP: Data Loss Prevention Course'),
    training('Introduction to Cybersecurity Course'),
    training('Introduction to Social Engineering'),
    training('New Basic Course on Computer Security for Companies'),
  ] },
  { id: 'infrastructure', title: 'Sistemas & infraestructura', items: [
    training('Linux Server Administration Course'),
    training('Introduction to Terminal and Command Line Course'),
    training('Internet Computer Networks Course'),
  ] },
  { id: 'development', title: 'Programación & desarrollo', items: [
    { title: "CS50's Introduction to Computer Science", issuer: 'Harvard University', date: '2024', dateLabel: '2024' },
    training('React.js Course'),
    training('Angular Fundamentals Course'),
    training('Python Course: Comprehensions, Functions and Error Handling'),
    training('Basic Python Course'),
    training('Definitive HTML and CSS Course'),
  ] },
  { id: 'databases', title: 'Bases de datos', items: [
    training('Practical SQL and MySQL Course'),
    training('PostgreSQL Course'),
    training('Data Modeling in MongoDB Course'),
  ] },
  { id: 'academic', title: 'Formación académica', items: [
    { title: 'Information Systems Engineering Specialization', issuer: 'Instituto Tecsup', date: '2024-08', dateLabel: 'AGO 2024' },
    { title: 'Specialization in Cybersecurity and Ethical Hacking', issuer: 'Instituto Tecsup', date: '2024-08', dateLabel: 'AGO 2024' },
  ] },
];
export const credentialCount = credentialCategories.reduce((sum, category) => sum + category.items.length, 0);
export const certifications = ['eCTHPv2', 'eCPPTv3', 'eJPTv2'].map(name => {
  const credential = credentialCategories[0].items.find(item => item.shortName === name)!;
  return { ...credential, name };
});
