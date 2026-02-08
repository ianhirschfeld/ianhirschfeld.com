import clsx from 'clsx';
import { useState } from 'react';

import GitHubIcon from '~/assets/icons/GithubIcon.svg?react';
import LinkedInIcon from '~/assets/icons/LinkedinIcon.svg?react';
import { SOCIAL_LINKS, type SocialLink as SocialLinkType } from '~/constants';

interface SocialLinkProps {
  link: SocialLinkType;
  className?: string;
}

function SocialLink({ link, className }: SocialLinkProps) {
  const [blob, setBlob] = useState(link.blobs[0]);
  const isGithub = link.id === SOCIAL_LINKS.github.id;

  const handleMouseEnter = () => {
    setBlob(link.blobs[1]);
  };

  const handleMouseLeave = () => {
    setBlob(link.blobs[0]);
  };

  const renderIcon = () => {
    switch (link.id) {
      case 'github':
        return <GitHubIcon />;
      case 'linkedin':
        return <LinkedInIcon />;
      default:
        return null;
    }
  };

  return (
    <a
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx('relative block size-10', className)}
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute top-1/2 left-1/2 z-1 size-[200%] -translate-1/2 opacity-80"
      >
        <path
          d={blob}
          transform="translate(100 100)"
          className="fill-brand-blue transition-[d] duration-150"
        />
      </svg>
      <span
        className={clsx(
          'relative z-2 flex size-full items-center justify-center [&_path]:fill-white',
          isGithub ? '[&_svg]:size-4/5' : '[&_svg]:size-7/10'
        )}
      >
        {renderIcon()}
      </span>
    </a>
  );
}

export default SocialLink;
