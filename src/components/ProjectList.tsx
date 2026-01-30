import { Link } from 'react-router-dom';

export interface Project {
  title: string;
  description: string;
  image: string;
  url?: string;
  path?: string;
}

interface ProjectItemProps {
  item: Project;
}

function ProjectItem({ item }: ProjectItemProps) {
  const { image, title, description, url, path } = item;

  return (
    <div>
      <Link
        to={path || url || ''}
        target={url ? '_blank' : undefined}
        rel={url ? 'noopener noreferrer' : undefined}
        className="group rounded-2.5xl relative block w-full overflow-hidden pt-[56.25%] max-md:rounded-none"
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 size-full object-cover transition-transform duration-200 group-hover:scale-110"
        />
      </Link>
      <div className="px-5">
        <h3 className="font-rift mt-2.5 mb-1.5 text-3xl">
          <Link
            to={path || url || ''}
            target={url ? '_blank' : undefined}
            rel={url ? 'noopener noreferrer' : undefined}
            className="text-off-black animated-underline"
          >
            {title}
          </Link>
        </h3>
        <p className="my-0 text-sm">{description}</p>
      </div>
    </div>
  );
}

interface ProjectListProps {
  items: Project[];
}

function ProjectList({ items }: ProjectListProps) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <ProjectItem key={i} item={item} />
      ))}
    </div>
  );
}

export default ProjectList;
