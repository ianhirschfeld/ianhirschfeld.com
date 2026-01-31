import clsx from 'clsx';

import Footer from './Footer';
import PageHeader from './PageHeader';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  isFullWidth?: boolean;
}

function PageLayout({ children, className, isFullWidth = false }: PageLayoutProps) {
  return (
    <div>
      <PageHeader />
      <article className={clsx('prose mx-auto px-5', !isFullWidth && 'max-w-2xl', className)}>
        {children}
      </article>
      <Footer />
    </div>
  );
}

export default PageLayout;
