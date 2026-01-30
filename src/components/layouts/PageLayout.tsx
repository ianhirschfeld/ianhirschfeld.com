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
      <article className={clsx('prose mx-auto px-5', !isFullWidth && 'max-w-2xl')}>
        {children}
      </article>
      <Footer />
    </div>
  );
}

export default PageLayout;
