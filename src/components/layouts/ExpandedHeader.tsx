import { useRef, useState } from 'react';

import headshotImage from '../../assets/Ian_Hirschfeld_headshot.jpg';
import ArrowIcon from '../../assets/icons/ArrowIcon.svg?react';
import { BLUE_BLOBS, CORNER, RED_BLOBS, SOCIAL_LINKS, TAN_BLOBS } from '../../constants';
import Blob from '../Blob';
import SocialLink from '../SocialLink';

interface ExpandedHeaderProps {
  onScrollClick: () => void;
}

function ExpandedHeader({ onScrollClick }: ExpandedHeaderProps) {
  const [isSwinging, setIsSwinging] = useState(false);
  const arrowButtonRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsSwinging(true);
  };

  const handleMouseLeave = () => {
    setIsSwinging(false);
  };

  return (
    <header className="relative h-screen w-screen border-b border-brand-tan bg-dark-off-white max-h-auto:h-auto">
      {/* Banner with blobs and headshot */}
      <div className="relative">
        {/* Blobs */}
        <div className="relative z-1 mx-auto size-[360px] max-md:size-[300px] max-h-auto:size-[240px]">
          <div className="absolute -top-10 z-1 size-full">
            <Blob blobs={TAN_BLOBS} corner={CORNER.topRight} color="var(--color-brand-tan)" />
          </div>
          <div className="absolute -bottom-2.5 -left-10 z-2 size-full">
            <Blob blobs={BLUE_BLOBS} corner={CORNER.bottomLeft} color="var(--color-brand-blue)" />
          </div>
          <div className="absolute -right-7.5 -bottom-5 z-3 size-full">
            <Blob blobs={RED_BLOBS} corner={CORNER.bottomRight} color="var(--color-brand-red)" />
          </div>
        </div>

        {/* Headshot */}
        <div className="absolute top-1/2 left-1/2 z-2 size-[150px] -translate-1/2 overflow-hidden rounded-full">
          <img src={headshotImage} alt="Ian Hirschfeld" className="size-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="px-10 text-center">
        <h1 className="mb-2.5 font-rift text-[6rem] leading-none max-md:text-[5rem]">Ian Hirschfeld</h1>
        <p className="mb-10 font-rift text-[4rem] leading-none text-brand-red opacity-80 max-md:text-[3rem] max-h-auto:mb-5">
          Code <span className="text-grey">&middot;</span> Movies <span className="text-grey">&middot;</span> TTRPGs
        </p>
        <ul className="m-0 list-none p-0 max-h-auto:mb-5">
          {Object.values(SOCIAL_LINKS).map((link) => (
            <li key={link.id} className="mr-7.5 inline-block align-top last:mr-0 max-md:mr-5">
              <SocialLink link={link} />
            </li>
          ))}
        </ul>
      </div>

      {/* Arrow button */}
      <div className="absolute bottom-5 flex h-10 w-full justify-center max-h-auto:hidden">
        <div
          ref={arrowButtonRef}
          className={`size-10 origin-bottom ${isSwinging ? 'animate-custom-swing' : ''}`}
        >
          <button
            onClick={onScrollClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="block size-full cursor-pointer overflow-hidden whitespace-nowrap border-none bg-none p-0 outline-none [&_svg]:size-full [&_svg]:fill-grey"
          >
            <ArrowIcon />
            <span className="sr-only">Learn More</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default ExpandedHeader;
