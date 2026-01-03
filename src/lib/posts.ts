export interface PostFrontmatter {
  title: string;
  date: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

// Import all markdown files using Vite's import.meta.glob
const postModules = import.meta.glob('/src/content/posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

// Import all post images so we can map them
const postImages = import.meta.glob('/src/assets/posts/*', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

// Create a map of image filenames to their imported URLs
const imageMap: Record<string, string> = {};
for (const [path, url] of Object.entries(postImages)) {
  const filename = path.split('/').pop()!;
  imageMap[filename] = url;
}

// Simple frontmatter parser (browser-compatible alternative to gray-matter)
function parseFrontmatter(raw: string): { data: PostFrontmatter; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = raw.match(frontmatterRegex);

  if (!match) {
    return { data: { title: '', date: '' }, content: raw };
  }

  const frontmatterBlock = match[1];
  const content = match[2];

  // Parse simple YAML (just key: value pairs)
  const data: Record<string, string> = {};
  frontmatterBlock.split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      data[key] = value;
    }
  });

  return {
    data: {
      title: data.title || '',
      date: data.date || '',
    },
    content,
  };
}

// Transform image paths in markdown content
function transformImagePaths(content: string): string {
  // Replace ../images/posts/filename with the actual imported URL
  return content.replace(/!\[([^\]]*)\]\(\.\.\/images\/posts\/([^)]+)\)/g, (_, alt, filename) => {
    const imageUrl = imageMap[filename];
    if (imageUrl) {
      return `![${alt}](${imageUrl})`;
    }
    // If image not found, return original
    return `![${alt}](${filename})`;
  });
}

export function getAllPosts(): Post[] {
  const posts = Object.entries(postModules).map(([path, rawContent]) => {
    // Extract slug from filename (e.g., "2021-01-10-new-year-new-site")
    const filename = path.split('/').pop()?.replace('.md', '') || '';
    const slug = filename;

    const { data, content } = parseFrontmatter(rawContent as string);

    return {
      slug,
      frontmatter: data,
      content: transformImagePaths(content),
    };
  });

  // Sort by date descending (newest first)
  return posts.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
