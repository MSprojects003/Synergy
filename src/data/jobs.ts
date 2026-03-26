// src/data/jobs.ts
export const CAREERS_EMAIL = "mbaasatheef@gmail.com";

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

export const jobs: Job[] = [
  {
    id: "data-entry-operator",
    title: "Data Entry Operator",
    department: "Logistic Sector",
    location: "On-site · Colombo",
    type: "Full-time",
    description:
      "We are looking for a motivated and detail-oriented Data Entry Operator to join a well-established company in the logistics sector. The selected candidate will be responsible for accurately entering, updating, and maintaining operational data related to logistics and daily activities.",
    imageUrl:
      "https://images.unsplash.com/photo-1559028012-481c04fa06cb?auto=format&fit=crop&q=80&w=2074",
    closingDate: "2026-04-15",
    responsibilities: [
      "Enter and update data in company systems and spreadsheets",
      "Maintain accurate records of logistics operations",
      "Verify data for accuracy and completeness",
      "Prepare basic reports when required",
      "Coordinate with internal teams for data updates",
    ],
    requirements: [
      "GCE O/L or A/L qualification",
      "Basic computer knowledge (MS Excel / MS Word)",
      "Good attention to detail",
      "Ability to work responsibly and meet deadlines",
      "Prior experience in data entry will be an added advantage",
    ],
  },
  {
    id: "warehouse-supervisor",
    title: "Warehouse Supervisor",
    department: "Logistic Sector",
    location: "On-site · Colombo",
    type: "Full-time",
    description:
      "We are seeking an experienced and responsible Warehouse Supervisor to oversee warehouse operations for a well-established company in the logistics sector. The Warehouse Supervisor will be responsible for supervising daily warehouse activities, ensuring efficient inventory management, and maintaining proper storage and dispatch procedures.",
    imageUrl:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c83137?auto=format&fit=crop&q=80&w=2070",
    closingDate: "2026-04-20",
    responsibilities: [
      "Supervise daily warehouse operations and staff",
      "Manage receiving, storing, and dispatching goods",
      "Maintain accurate inventory records and stock control",
      "Ensure proper handling and storage of materials",
      "Monitor warehouse safety and operational procedures",
      "Coordinate with logistics and operations teams",
    ],
    requirements: [
      "GCE O/L or A/L qualification",
      "Previous warehouse or logistics experience preferred",
      "Basic computer knowledge (MS Excel / inventory systems)",
      "Good leadership and communication skills",
      "Ability to work in a fast-paced environment",
    ],
  },
  {
    id: "electrician",
    title: "Electrician (Logistics Warehouse)",
    department: "Maintenance",
    location: "On-site · Colombo",
    type: "Full-time",
    description:
      "We are seeking a skilled and reliable Electrician to support electrical maintenance activities at a logistics warehouse facility. The Electrician will be responsible for maintaining and repairing electrical systems within the warehouse to ensure smooth and safe operations.",
    imageUrl:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2069",
    closingDate: "2026-04-25",
    responsibilities: [
      "Install, maintain, and repair electrical wiring and equipment within the warehouse",
      "Troubleshoot electrical faults related to warehouse facilities and machinery",
      "Perform routine inspections and preventive maintenance of electrical systems",
      "Ensure all electrical work complies with safety regulations and company standards",
      "Support maintenance of lighting systems, power distribution, and warehouse equipment",
    ],
    requirements: [
      "GCE O/L qualification (A/L is an added advantage)",
      "NVQ or relevant technical qualification in Electrical field preferred",
      "Previous experience in warehouse, industrial, or facility maintenance will be an advantage",
      "Basic knowledge of electrical safety standards",
      "Ability to work independently and respond to maintenance issues promptly",
    ],
  },
  {
    id: "junior-electrician",
    title: "Junior Electrician (Logistics Warehouse)",
    department: "Maintenance",
    location: "On-site · Colombo",
    type: "Full-time",
    description:
      "We are looking for a motivated Junior Electrician to assist with electrical maintenance activities at a logistics warehouse facility. The Junior Electrician will support the maintenance team in ensuring that warehouse electrical systems, lighting, and equipment operate safely and efficiently.",
    imageUrl:
      "https://images.unsplash.com/photo-1581092580490-1c6c8c8c8c8c?auto=format&fit=crop&q=80&w=2070", // You can replace with better one later
    closingDate: "2026-04-30",
    responsibilities: [
      "Assist in installation, maintenance, and repair of warehouse electrical systems",
      "Support troubleshooting of electrical faults and minor repairs",
      "Help maintain lighting systems, power distribution, and related equipment",
      "Conduct routine inspections and preventive maintenance tasks",
      "Follow workplace safety standards and maintenance procedures",
    ],
    requirements: [
      "GCE O/L qualification (A/L is an added advantage)",
      "NVQ or relevant technical training in Electrical field preferred",
      "Basic knowledge of electrical systems and tools",
      "Willingness to learn and work in a warehouse environment",
      "Previous training or experience in electrical work will be an advantage",
    ],
  },
  {
    id: "part-time-warehouse-workers",
    title: "Part-Time Warehouse Workers",
    department: "Logistic Sector",
    location: "On-site · Colombo",
    type: "Part-time",
    description:
      "We are currently looking for Part-Time Workers to support warehouse operations in a logistics company. Available positions include Data Entry Operators, Sticker Pasting / Bundling Assistants, Packing Assistants, and Loading & Unloading Helpers.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a9c?auto=format&fit=crop&q=80&w=2070",
    closingDate: "2026-05-10",
    responsibilities: [
      "Perform assigned warehouse tasks efficiently",
      "Support packing, labeling, and bundling of goods",
      "Assist with loading and unloading shipments",
      "Maintain accuracy in data entry and basic records (for Data Entry role)",
    ],
    requirements: [
      "Basic computer knowledge required for Data Entry Operators",
      "Ability to work in a warehouse environment",
      "Responsible and able to follow instructions",
    ],
  },
  {
    id: "temporary-warehouse-workers",
    title: "Temporary Warehouse Workers (Daily Wage)",
    department: "Logistic Sector",
    location: "On-site · Colombo",
    type: "Contract",
    description:
      "We are currently seeking temporary workers on a daily wage basis to support operations at a logistics warehouse facility. Available positions include Data Entry Operators, Sticker Pasting / Bundling Assistants, Packing Assistants, and Loading & Unloading Helpers.",
    imageUrl:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c83137?auto=format&fit=crop&q=80&w=2070",
    closingDate: "2026-05-15",
    responsibilities: [
      "Perform assigned warehouse tasks efficiently",
      "Support packing, labeling, and bundling of goods",
      "Assist with loading and unloading shipments",
      "Maintain accuracy in data entry and basic records (for Data Entry role)",
    ],
    requirements: [
      "Basic computer knowledge required for Data Entry Operators",
      "Ability to work in a warehouse environment",
      "Physically fit and able to perform assigned duties",
      "Responsible and able to follow instructions",
    ],
  },
];