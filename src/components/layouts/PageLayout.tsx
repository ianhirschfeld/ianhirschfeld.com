import clsx from 'clsx';

import Footer from './Footer';
import PageHeader from './PageHeader';

interface PageLayoutProps {
  children: React.ReactNode;
  isFullWidth?: boolean;
}

function PageLayout({ children, isFullWidth = false }: PageLayoutProps) {
  return (
    <div>
      <PageHeader />
      <article className={clsx('mx-auto px-5', !isFullWidth && 'max-w-[680px]')}>{children}</article>
      <Footer />
    </div>
  );
}

export default PageLayout;
