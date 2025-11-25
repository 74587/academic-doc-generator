import { faker } from '@faker-js/faker';

export const generateRandomData = () => {
  // Generate a past date for statement
  const statementDate = faker.date.past({ years: 0.5 });
  // Due date is typically 2-4 weeks after statement
  const dueDate = new Date(statementDate);
  dueDate.setDate(dueDate.getDate() + faker.number.int({ min: 14, max: 30 }));
  
  // Issue date typically current or very recent
  const issueDate = faker.date.recent({ days: 5 });
  
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  // Common Texas/US universities to choose from if desired, or just generic
  const university = "Hajimi University"; 
  
  return {
    universityName: university,
    studentName: `${lastName} ${firstName}`, // Last First format as per original input example
    studentID: `${faker.string.numeric(6)}-${faker.string.numeric(4)}`,
    address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state()}`,
    term: "Fall 2024", // Keep fixed or logic based on date? Keeping logical for now
    major: "Computer Science", // Could randomize but might break specific template text
    program: "Bachelor of Science",
    college: "College of Science and Engineering",
    statementDate: formatDate(statementDate),
    dueDate: formatDate(dueDate),
    issueDate: formatDate(issueDate)
  };
};
