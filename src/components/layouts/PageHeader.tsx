import { Link } from 'react-router-dom';

import headshotImage from '../../assets/Ian_Hirschfeld_headshot.jpg';
import { BLUE_BLOBS, CORNER, RED_BLOBS, SOCIAL_LINKS, TAN_BLOBS } from '../../constants';
import Blob from '../Blob';
import SocialLink from '../SocialLink';
import Nav from './Nav';

function PageHeader() {
  return (
    <header className="relative h-20 border-b border-brand-tan bg-dark-off-white">
      {/* Blobs */}
      <div className="pointer-events-none absolute -top-5 -left-2.5 z-1 size-[140px]">
        <div className="absolute -top-5 -right-2.5 z-1 size-full">
          <Blob blobs={TAN_BLOBS} corner={CORNER.topRight} color="var(--color-brand-tan)" deltaMax={5} />
        </div>
        <div className="absolute -left-5 bottom-0 z-2 size-full">
          <Blob blobs={BLUE_BLOBS} corner={CORNER.bottomLeft} color="var(--color-brand-blue)" deltaMax={5} />
        </div>
        <div className="absolute -right-1.5 -bottom-1.5 z-3 size-full">
          <Blob blobs={RED_BLOBS} corner={CORNER.bottomRight} color="var(--color-brand-red)" deltaMax={5} />
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
      <div className="ml-[150px] flex h-full items-center max-md:ml-[140px] max-md:block">
        <Nav className="max-md:pt-2.5 max-md:pb-2.5 max-md:text-right [&_a]:mr-5 max-md:[&_a]:mr-2.5" />
        <div className="flex-1 max-md:hidden" />
        <ul className="m-0 list-none p-0 max-md:text-right">
          {Object.values(SOCIAL_LINKS).map((link) => (
            <li key={link.id} className="mr-7.5 inline-block align-top max-lg:mr-5">
              <SocialLink link={link} />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default PageHeader;
