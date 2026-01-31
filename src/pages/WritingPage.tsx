import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageLayout from '~/components/layouts/PageLayout';
import { formatDate, getAllPosts } from '~/lib/posts';

function WritingPage() {
  const posts = getAllPosts();

  useEffect(() => {
    document.title = 'Writing | Ian Hirschfeld';
  }, []);

  return (
    <PageLayout className="max-w-5xl">
      <section>
        <h1>Writing</h1>
      </section>

      <section>
        {posts.map((post) => {
          return (
            <Link
              key={post.slug}
              to={`/posts/${post.slug}`}
              className="group text-off-black relative my-2 flex items-center justify-between gap-5 no-underline!"
            >
              <span className="flex items-center gap-4">
                {post.frontmatter.featuredImage ? (
                  <img
                    src={post.frontmatter.featuredImage}
                    alt={post.frontmatter.title}
                    className="size-8 rounded-lg object-cover"
                  />
                ) : (
                  <span className="size-8 opacity-0" />
                )}
                <span className="font-rift decoration-brand-red/0 group-hover:decoration-brand-red text-xl leading-5 font-semibold underline decoration-1 underline-offset-2 transition-colors">
                  {post.frontmatter.title}
                </span>
              </span>
              <span className="text-grey text-right text-sm">
                {formatDate(post.frontmatter.date)}
              </span>
            </Link>
          );
        })}
      </section>
    </PageLayout>
  );
}

export default WritingPage;
