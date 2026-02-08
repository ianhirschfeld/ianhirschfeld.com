import { Link } from 'react-router-dom';

import headshotImage from '~/assets/Ian_Hirschfeld_headshot.jpg';
import Blob from '~/components/Blob';
import SocialLink from '~/components/SocialLink';
import { BLUE_BLOBS, CORNER, RED_BLOBS, SOCIAL_LINKS, TAN_BLOBS } from '~/constants';

import Nav from './Nav';

function PageHeader() {
  return (
    <header className="border-brand-tan bg-dark-off-white relative h-20 border-b">
      {/* Blobs */}
      <div className="pointer-events-none absolute -top-5 -left-2.5 z-1 size-[140px]">
        <div className="absolute -top-5 -right-2.5 z-1 size-full">
          <Blob
            blobs={TAN_BLOBS}
            corner={CORNER.topRight}
            color="var(--color-brand-tan)"
            deltaMax={5}
          />
        </div>
        <div className="absolute bottom-0 -left-5 z-2 size-full">
          <Blob
            blobs={BLUE_BLOBS}
            corner={CORNER.bottomLeft}
            color="var(--color-brand-blue)"
            deltaMax={5}
          />
        </div>
        <div className="absolute -right-1.5 -bottom-1.5 z-3 size-full">
          <Blob
            blobs={RED_BLOBS}
            corner={CORNER.bottomRight}
            color="var(--color-brand-red)"
            deltaMax={5}
          />
        </div>
      </div>

      {/* Headshot */}
      <Link
        to="/"
        className="absolute top-1/2 left-5 z-2 size-[70px] -translate-y-1/2 overflow-hidden rounded-full"
      >
        <img src={headshotImage} alt="Ian Hirschfeld" className="size-full object-cover" />
      </Link>

      {/* Content */}
      <div className="ml-[150px] flex h-full items-center max-sm:ml-[140px] max-sm:block">
        <Nav className="max-md:text-2xl max-sm:pt-1 max-sm:pb-2 max-sm:text-right max-sm:text-xl [&_a]:mr-5 max-sm:[&_a]:mr-2.5" />
        <div className="flex-1 max-sm:hidden" />
        <div className="mr-8 flex justify-center gap-7 max-sm:mr-5 max-sm:justify-end max-sm:gap-5">
          {Object.values(SOCIAL_LINKS).map((link) => (
            <SocialLink key={link.id} link={link} className="max-sm:size-6" />
          ))}
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
