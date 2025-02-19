import Link from 'next/link';
import { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/lab/${project.slug}`} className="block group">
      <div className="space-y-4">
        <div className="bg-gray-200 aspect-square overflow-hidden">
          {/* Add image when available */}
        </div>
        <h2 className="text-xl font-light group-hover:underline">{project.title}</h2>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </Link>
  );
}
