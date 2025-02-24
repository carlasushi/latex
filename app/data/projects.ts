export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Port+all',
    description: 'A digital archive project at 7artscafe.',
    image: '/images/portall/portall_1.jpeg',
    slug: 'portall'
  },
  // More projects can be added here later
];
