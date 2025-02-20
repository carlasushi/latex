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
    description: 'Port+ALL – A Living Archive for 7artscafe',
    image: '/images/portall/postcard.webp',
    slug: 'portall'
  },
  // More projects can be added here later
];
