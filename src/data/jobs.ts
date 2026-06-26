// src/data/jobs.ts
export const CAREERS_EMAIL = "synergyfmservices@gmail.com";

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  description: string;
  imageUrl: string;
  closingDate: string; // ISO format: "YYYY-MM-DD"
  responsibilities: string[];
  requirements: string[];
}

import image1 from "../assets/jobs/image.png"
import image2 from "../assets/jobs/image2.png"
import image3 from "../assets/jobs/image3.png"
import image4 from "../assets/jobs/image4.png"
import image5 from "../assets/jobs/image5.png"
import image6 from "../assets/jobs/image6.png"
export const jobs: Job[] = [
  {
    id: "Warehouse Supervisor",
    title: "Warehouse Supervisor",
    department: "Logistic Sector",
    location: "On-site · Colombo",
    type: "Full-time",
    description:
"-",
    imageUrl:
       image1,
    closingDate: "2029-04-15",
    responsibilities: [
      "-",
    ],
    requirements: [
      "Minimum G.C.E. Advanced Level (A/L) - must have sat for the examinationn",
      "Ability to supervise and coordinate a team effectively",
      
    ],
  },

  {
    id: "Warehouse Picker",
    title: "Warehouse Picker",
    department: "Logistic Sector",
    location: "On-site · Colombo",
    type: "Full-time",
    description:
"-",
    imageUrl:
       image2,
    closingDate: "2029-04-15",
    responsibilities: [
      "-",
    ],
    requirements: [
      "Minimum G.C.E. Ordinary Level (O/L) – must have sat for the examination",
      "Ability to work independently",
      "Looking for Male candidates",
      
    ],
  },
  {
    id: "Warehouse Assistant",
    title: "Warehouse Assistant",
    department: "Logistic Sector",
    location: "On-site · Colombo",
    type: "Full-time",
    description:
"-",
    imageUrl:
       image3,
    closingDate: "2029-04-15",
    responsibilities: [
      "-",
    ],
    requirements: [
      "Minimum G.C.E. Ordinary Level (O/L) – must have sat for the examination",
      "Ability to work independently",
      "Dedicated and hardworking",
      "Looking for Male candidates",
      
    ],
  },

 {
    id: "Data Entry Operator",
    title: "Data Entry Operator",
    department: "Logistic Sector",
    location: "On-site · Colombo",
    type: "Full-time",
    description:
"-",
    imageUrl:
       image4,
    closingDate: "2029-04-15",
    responsibilities: [
      "-",
    ],
    requirements: [
      "Minimum G.C.E. Advanced Level (A/L) - must have sat for the examination",
      "Basic computer literacy (MS Excel, Word etc.)",
      "Ability to supervise and coordinate a team effectively",
      
      
    ],
  },

   {
    id: "Warehouse Helper",
    title: "Warehouse Helper",
    department: "Logistic Sector",
    location: "On-site · Colombo",
    type: "Full-time",
    description:
"-",
    imageUrl:
       image5,
    closingDate: "2029-04-15",
    responsibilities: [
      "-",
    ],
    requirements: [
      "Minimum educational qualification is not mandatory",
       "Dedicated and hardworking",
      "Female candidates are encouraged to apply",
      
      
    ],
  },


  {
    id: "Delivery Rider (Bike & Three-wheel)",
    title: "Delivery Rider (Bike & Three-wheel)",
    department: "Logistic Sector",
    location: "On-site · Colombo",
    type: "Full-time",
    description:
"-",
    imageUrl:
       image6,
    closingDate: "2029-04-15",
    responsibilities: [
      "-",
    ],
    requirements: [
      "Must have a valid motorcycle driving license",
      "Ability to ride safely and responsibly on public roads",
      "Good knowledge of road safety rules and traffic regulations",
      
      
    ],
  },

  
]