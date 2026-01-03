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

  const linkContent = (
    <img
      src={image}
      alt={title}
      className="absolute inset-0 size-full object-cover transition-transform duration-200 group-hover:scale-110"
    />
  );

  const titleContent = <h3 className="mt-2.5 mb-0">{title}</h3>;

  return (
    <li className="block w-[400px] max-lg:w-[320px] max-md:w-full">
      {path ? (
        <Link
          to={path}
          className="group relative block w-full overflow-hidden rounded-2_5xl pt-[56.25%] max-md:rounded-none"
        >
          {linkContent}
        </Link>
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block w-full overflow-hidden rounded-2_5xl pt-[56.25%] max-md:rounded-none"
        >
          {linkContent}
        </a>
      )}
      <div className="px-5">
        {path ? (
          <Link to={path} className="text-off-black">
            {titleContent}
          </Link>
        ) : (
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-off-black">
            {titleContent}
          </a>
        )}
        <p className="mt-1.5 mb-0 text-[1.6rem]">{description}</p>
      </div>
    </li>
  );
}

interface ProjectListProps {
  items: Project[];
}

function ProjectList({ items }: ProjectListProps) {
  return (
    <ul className="m-0 grid list-none justify-center gap-x-5 gap-y-10 p-0 max-md:-mx-5 [grid-template-columns:repeat(auto-fill,400px)] max-lg:[grid-template-columns:repeat(auto-fill,320px)] max-md:[grid-template-columns:100%]">
      {items.map((item, i) => (
        <ProjectItem key={i} item={item} />
      ))}
    </ul>
  );
}

export default ProjectList;
