export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  photo?: string;
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Your future collaborator",
    role: "Client or teammate",
    company: "Add a verified recommendation",
    quote: "This is a clearly marked placeholder for a real recommendation. Replace it with a quote and permission before publishing.",
    placeholder: true
  },
  {
    name: "Your future client",
    role: "Product partner",
    company: "Add a verified company",
    quote: "Placeholder recommendation: add a specific outcome, the context of the work, and the person’s approved wording here.",
    placeholder: true
  }
];
