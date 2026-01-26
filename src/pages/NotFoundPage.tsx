import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageLayout from '~/components/layouts/PageLayout';

function NotFoundPage() {
  useEffect(() => {
    document.title = '404: Not Found | Ian Hirschfeld';
  }, []);

  return (
    <PageLayout>
      <section className="section">
        <h1 className="section-heading1">404: Not Found</h1>
        <p>
          Woah, woah, woah! There is nothing here, maybe there once was, but unfortunately not
          anymore. I recommend you head back to the <Link to="/">home page</Link> and go from there.
        </p>
      </section>
    </PageLayout>
  );
}

export default NotFoundPage;
