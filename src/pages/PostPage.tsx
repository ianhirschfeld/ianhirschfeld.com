import { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { Navigate, useParams } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import GistEmbed from '~/components/GistEmbed';
import PageLayout from '~/components/layouts/PageLayout';
import { calculateReadingTime, formatDate, getPostBySlug } from '~/lib/posts';

function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (post) {
      document.title = `${post.frontmatter.title} | Ian Hirschfeld`;
    }
  }, [post]);

  useEffect(() => {
    if (!post?.frontmatter.canonicalUrl) return;

    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = post.frontmatter.canonicalUrl;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [post]);

  useEffect(() => {
    if (!contentRef.current) return;
    if (!contentRef.current.querySelector('.twitter-tweet')) return;

    if ((window as any).twttr?.widgets) {
      (window as any).twttr.widgets.load(contentRef.current);
    } else {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/404" replace={false} />;
  }

  const readingTime = calculateReadingTime(post.content);

  return (
    <PageLayout>
      <section>
        <h1>{post.frontmatter.title}</h1>
        <div className="text-grey">
          {formatDate(post.frontmatter.date)} &middot; {readingTime} min read
        </div>
        {post.frontmatter.featuredImage && (
          <div className="banner">
            <img
              src={post.frontmatter.featuredImage}
              alt={post.frontmatter.title}
              className="w-full"
            />
          </div>
        )}
      </section>

      <section ref={contentRef}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            script: ({ src }) => {
              if (typeof src === 'string' && src.includes('gist.github.com')) {
                return <GistEmbed gistUrl={src} />;
              }
              return null;
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </section>
    </PageLayout>
  );
}

export default PostPage;
