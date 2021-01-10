import React from 'react'
import { Link } from 'gatsby'

import { PageLayout } from '../components/layouts'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <PageLayout>
    <SEO title="404: Not found" />
    <section className="section">
      <h1 className="section-heading1">404: Not Found</h1>
      <p>
        Woah, woah, woah! There is nothing here, maybe there once was, but unfortunately not anymore. I recommend you
        head back to the <Link to="/">home page</Link> and go from there.
      </p>
    </section>
  </PageLayout>
)

export default NotFoundPage
