import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Navigate, useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';

import PageLayout from '../components/layouts/PageLayout';
import { calculateReadingTime, formatDate, getPostBySlug } from '../lib/posts';

function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    if (post) {
      document.title = `${post.frontmatter.title} | Ian Hirschfeld`;
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const readingTime = calculateReadingTime(post.content);

  return (
    <PageLayout>
      <section className="section">
        <h1 className="section-heading1 post-title">{post.frontmatter.title}</h1>
        <div className="post-meta">
          {formatDate(post.frontmatter.date)} &middot; {readingTime} min read
        </div>
        <div className="post-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </section>
    </PageLayout>
  );
}

export default PostPage;
