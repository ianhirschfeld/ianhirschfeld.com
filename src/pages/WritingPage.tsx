import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import remarkGfm from 'remark-gfm';

import PageLayout from '../components/layouts/PageLayout';
import { calculateReadingTime, formatDate, getAllPosts } from '../lib/posts';

function WritingPage() {
  const posts = getAllPosts();

  useEffect(() => {
    document.title = 'Writing | Ian Hirschfeld';
  }, []);

  return (
    <PageLayout>
      <section className="section">
        <h1 className="section-heading1">Writing</h1>
      </section>

      {posts.map((post) => {
        const readingTime = calculateReadingTime(post.content);
        return (
          <section key={post.slug} className="section">
            <Link to={`/writing/${post.slug}`} className="post-title">
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <div className="post-meta">
              {formatDate(post.frontmatter.date)} &middot; {readingTime} min read
            </div>
            <div className="post-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>
          </section>
        );
      })}
    </PageLayout>
  );
}

export default WritingPage;
