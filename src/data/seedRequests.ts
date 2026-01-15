import type { Request } from "../types";

// Helper to generate ISO date for a specific weekday (0 = Sunday)
const getDateForWeekday = (weekday: number) => {
  const now = new Date();
  const dayDiff = weekday - now.getDay();
  const date = new Date(now);
  date.setDate(now.getDate() + dayDiff);
  date.setHours(10); // set time to 10AM
  return date.toISOString();
};

// Helper to generate random numeric ID similar to Date.now()
const randomId = () => Date.now() + Math.floor(Math.random() * 1000000);

// Seed requests array
export const seedRequests: Request[] = [
  // Monday
  { id: randomId(), artisanId: 1, name: "Samuel Ade", email: "samuel.ade@example.com", request: "Carpentry", date: getDateForWeekday(1) },
  { id: randomId(), artisanId: 2, name: "Fatima Bello", email: "fatima.bello@example.com", request: "Electrician", date: getDateForWeekday(1) },
  { id: randomId(), artisanId: 3, name: "Chinedu Okafor", email: "chinedu.okafor@example.com", request: "Plumbing", date: getDateForWeekday(1) },
  // { id: randomId(), artisanId: 4, name: "Aisha Musa", email: "aisha.musa@example.com", request: "Painting", date: getDateForWeekday(1) },
  // { id: randomId(), artisanId: 5, name: "Emeka Obi", email: "emeka.obi@example.com", request: "Carpentry", date: getDateForWeekday(1) },

  // Tuesday
  { id: randomId(), artisanId: 6, name: "Rahmat Lawal", email: "rahmat.lawal@example.com", request: "Electrician", date: getDateForWeekday(2) },
  { id: randomId(), artisanId: 7, name: "Bola Johnson", email: "bola.johnson@example.com", request: "Plumbing", date: getDateForWeekday(2) },
  { id: randomId(), artisanId: 8, name: "Uche Nwosu", email: "uche.nwosu@example.com", request: "Painting", date: getDateForWeekday(2) },
  { id: randomId(), artisanId: 9, name: "Kemi Adeyemi", email: "kemi.adeyemi@example.com", request: "Carpentry", date: getDateForWeekday(2) },
  { id: randomId(), artisanId: 10, name: "Tunde Folarin", email: "tunde.folarin@example.com", request: "Electrician", date: getDateForWeekday(2) },

  // Wednesday
  { id: randomId(), artisanId: 11, name: "Ngozi Chukwu", email: "ngozi.chukwu@example.com", request: "Plumbing", date: getDateForWeekday(3) },
  { id: randomId(), artisanId: 12, name: "Ibrahim Sule", email: "ibrahim.sule@example.com", request: "Painting", date: getDateForWeekday(3) },
  { id: randomId(), artisanId: 13, name: "Chika Obi", email: "chika.obi@example.com", request: "Carpentry", date: getDateForWeekday(3) },
  // { id: randomId(), artisanId: 14, name: "Amina Bello", email: "amina.bello@example.com", request: "Electrician", date: getDateForWeekday(3) },
  // { id: randomId(), artisanId: 15, name: "Peter Okeke", email: "peter.okeke@example.com", request: "Plumbing", date: getDateForWeekday(3) },

  // Thursday
  { id: randomId(), artisanId: 16, name: "Maryam Usman", email: "maryam.usman@example.com", request: "Painting", date: getDateForWeekday(4) },
  { id: randomId(), artisanId: 17, name: "John Uche", email: "john.uche@example.com", request: "Carpentry", date: getDateForWeekday(4) },
  { id: randomId(), artisanId: 18, name: "Ngozi Eze", email: "ngozi.eze@example.com", request: "Electrician", date: getDateForWeekday(4) },
  { id: randomId(), artisanId: 19, name: "Aliyu Abubakar", email: "aliyu.abubakar@example.com", request: "Plumbing", date: getDateForWeekday(4) },
  // { id: randomId(), artisanId: 20, name: "Chinelo Nwankwo", email: "chinelo.nwankwo@example.com", request: "Painting", date: getDateForWeekday(4) },

  // Friday
  { id: randomId(), artisanId: 21, name: "Femi Adebayo", email: "femi.adebayo@example.com", request: "Carpentry", date: getDateForWeekday(5) },
  { id: randomId(), artisanId: 22, name: "Zainab Yusuf", email: "zainab.yusuf@example.com", request: "Electrician", date: getDateForWeekday(5) },
  { id: randomId(), artisanId: 23, name: "Emmanuel Okoro", email: "emmanuel.okoro@example.com", request: "Plumbing", date: getDateForWeekday(5) },
  { id: randomId(), artisanId: 24, name: "Aisha Mohammed", email: "aisha.mohammed@example.com", request: "Painting", date: getDateForWeekday(5) },
  { id: randomId(), artisanId: 25, name: "Tayo Akinwale", email: "tayo.akinwale@example.com", request: "Carpentry", date: getDateForWeekday(5) },
];
