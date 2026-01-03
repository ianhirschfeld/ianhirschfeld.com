import { useRef } from 'react';

import ExpandedHeader from './ExpandedHeader';
import Footer from './Footer';
import Nav from './Nav';

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const contentRef = useRef<HTMLElement>(null);

  const handleScrollClick = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <ExpandedHeader onScrollClick={handleScrollClick} />
      <article ref={contentRef} className="mx-auto max-w-[680px] px-5">
        {/* Nav with decorative corners */}
        <div className="relative">
          {/* Left corner */}
          <div className="absolute -top-px -left-[19px] z-2 size-5 bg-dark-off-white">
            <div className="size-5 rounded-tr-[10px] border-t border-r border-brand-tan bg-off-white" />
          </div>
          {/* Nav */}
          <Nav className="relative -top-px z-1 rounded-b-[10px] border border-t-0 border-brand-tan bg-dark-off-white text-center [&_a]:mx-5 [&_a]:py-2.5 max-md:[&_a]:mx-2.5" />
          {/* Right corner */}
          <div className="absolute -top-px -right-[19px] z-2 size-5 bg-dark-off-white">
            <div className="size-5 rounded-tl-[10px] border-t border-l border-brand-tan bg-off-white" />
          </div>
        </div>
        {children}
      </article>
      <Footer />
    </div>
  );
}

export default MainLayout;
