import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface NavProps {
  className?: string;
}

function Nav({ className }: NavProps) {
  return (
    <nav className={clsx('font-rift text-[3rem] max-md:text-[2rem]', className)}>
      <Link to="/now" className="inline-block">
        Now
      </Link>
      <Link to="/about" className="inline-block">
        About
      </Link>
      <Link to="/projects" className="inline-block">
        Projects
      </Link>
      <Link to="/writing" className="inline-block">
        Writing
      </Link>
    </nav>
  );
}

export default Nav;
