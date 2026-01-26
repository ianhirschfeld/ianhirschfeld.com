import { useRef, useState } from 'react';

import headshotImage from '~/assets/Ian_Hirschfeld_headshot.jpg';
import ArrowIcon from '~/assets/icons/ArrowIcon.svg?react';
import Blob from '~/components/Blob';
import SocialLink from '~/components/SocialLink';
import { BLUE_BLOBS, CORNER, RED_BLOBS, SOCIAL_LINKS, TAN_BLOBS } from '~/constants';

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
    <header className="border-brand-tan bg-dark-off-white max-h-auto:h-auto relative h-screen w-screen border-b">
      {/* Banner with blobs and headshot */}
      <div className="relative">
        {/* Blobs */}
        <div className="max-h-auto:size-[240px] relative z-1 mx-auto size-[360px] max-md:size-[300px]">
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
        <h1 className="font-rift mb-2.5 text-[6rem] leading-none max-md:text-[5rem]">
          Ian Hirschfeld
        </h1>
        <p className="font-rift text-brand-red max-h-auto:mb-5 mb-10 text-[4rem] leading-none opacity-80 max-md:text-[3rem]">
          Code <span className="text-grey">&middot;</span> Movies{' '}
          <span className="text-grey">&middot;</span> TTRPGs
        </p>
        <ul className="max-h-auto:mb-5 m-0 list-none p-0">
          {Object.values(SOCIAL_LINKS).map((link) => (
            <li key={link.id} className="mr-7.5 inline-block align-top last:mr-0 max-md:mr-5">
              <SocialLink link={link} />
            </li>
          ))}
        </ul>
      </div>

      {/* Arrow button */}
      <div className="max-h-auto:hidden absolute bottom-5 flex h-10 w-full justify-center">
        <div
          ref={arrowButtonRef}
          className={`size-10 origin-bottom ${isSwinging ? 'animate-custom-swing' : ''}`}
        >
          <button
            onClick={onScrollClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="[&_svg]:fill-grey block size-full cursor-pointer overflow-hidden border-none bg-none p-0 whitespace-nowrap outline-none [&_svg]:size-full"
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
