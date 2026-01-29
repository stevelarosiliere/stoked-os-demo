export type Coach = {
  id: string;
  name: string;
  email: string;
  phone: string;
  certifications: string[];
  assignedPartners: string[];
  activePrograms: number;
  yearsWithStoked: number;
  status: "active" | "on-leave" | "training";
  avatar: string;
};

export const coaches: Coach[] = [
  {
    id: "coach-1",
    name: "Marcus Johnson",
    email: "marcus.j@stoked.org",
    phone: "(347) 555-0101",
    certifications: ["Skate Certified", "Mentor 101", "Mental Health First Aid"],
    assignedPartners: ["partner-1", "partner-3"],
    activePrograms: 3,
    yearsWithStoked: 5,
    status: "active",
    avatar: "MJ",
  },
  {
    id: "coach-2",
    name: "Aaliyah Reyes",
    email: "aaliyah.r@stoked.org",
    phone: "(347) 555-0102",
    certifications: ["Surf Certified", "Snow Certified", "Mentor 101"],
    assignedPartners: ["partner-2", "partner-4"],
    activePrograms: 2,
    yearsWithStoked: 4,
    status: "active",
    avatar: "AR",
  },
  {
    id: "coach-3",
    name: "Devon Clarke",
    email: "devon.c@stoked.org",
    phone: "(347) 555-0103",
    certifications: ["Skate Certified", "Snow Certified", "Mental Health First Aid"],
    assignedPartners: ["partner-3", "partner-5"],
    activePrograms: 3,
    yearsWithStoked: 6,
    status: "active",
    avatar: "DC",
  },
  {
    id: "coach-4",
    name: "Jasmine Okafor",
    email: "jasmine.o@stoked.org",
    phone: "(347) 555-0104",
    certifications: ["Surf Certified", "Mentor 101", "Mental Health First Aid"],
    assignedPartners: ["partner-1", "partner-6"],
    activePrograms: 2,
    yearsWithStoked: 3,
    status: "active",
    avatar: "JO",
  },
  {
    id: "coach-5",
    name: "Carlos Medina",
    email: "carlos.m@stoked.org",
    phone: "(347) 555-0105",
    certifications: ["Skate Certified", "Surf Certified", "Snow Certified"],
    assignedPartners: ["partner-2", "partner-7"],
    activePrograms: 2,
    yearsWithStoked: 2,
    status: "active",
    avatar: "CM",
  },
  {
    id: "coach-6",
    name: "Brianna Washington",
    email: "brianna.w@stoked.org",
    phone: "(347) 555-0106",
    certifications: ["Snow Certified", "Mentor 101"],
    assignedPartners: ["partner-4", "partner-8"],
    activePrograms: 2,
    yearsWithStoked: 3,
    status: "active",
    avatar: "BW",
  },
  {
    id: "coach-7",
    name: "Kwame Asante",
    email: "kwame.a@stoked.org",
    phone: "(347) 555-0107",
    certifications: ["Skate Certified", "Mentor 101", "Mental Health First Aid"],
    assignedPartners: ["partner-9", "partner-10"],
    activePrograms: 2,
    yearsWithStoked: 1,
    status: "active",
    avatar: "KA",
  },
  {
    id: "coach-8",
    name: "Luz Fernandez",
    email: "luz.f@stoked.org",
    phone: "(347) 555-0108",
    certifications: ["Surf Certified", "Snow Certified", "Mental Health First Aid"],
    assignedPartners: ["partner-11", "partner-12"],
    activePrograms: 2,
    yearsWithStoked: 2,
    status: "active",
    avatar: "LF",
  },
  {
    id: "coach-9",
    name: "Tyrese Mitchell",
    email: "tyrese.m@stoked.org",
    phone: "(347) 555-0109",
    certifications: ["Mentor 101"],
    assignedPartners: ["partner-3"],
    activePrograms: 0,
    yearsWithStoked: 0,
    status: "training",
    avatar: "TM",
  },
];
