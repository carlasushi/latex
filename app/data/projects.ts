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
    description: 'Interactive installation exploring digital portals and spatial awareness.',
    image: '/images/projects/portall-placeholder.jpg', // Add actual image path
    slug: 'portall'
  },
  // More projects can be added here later
];
