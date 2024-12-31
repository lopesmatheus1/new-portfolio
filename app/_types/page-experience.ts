export interface Experience {
  companyName: string;
  contractType: string;
  description: string;
  endDate: Date; // Use "Date" se você quiser trabalhar com objetos Date em vez de strings
  startDate: Date; // Use "Date" se você quiser trabalhar com objetos Date em vez de strings
  title: string;
  experience: string;
  location: string;
}

export interface ExperiencesResponse {
  experiences: Experience[];
}
