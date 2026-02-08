import { useEffect, useRef, useState } from 'react';

interface GistEmbedProps {
  gistUrl: string;
}

function GistEmbed({ gistUrl }: GistEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(100);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument;
    if (!doc) return;

    // Write a minimal HTML page that loads the gist script.
    // Because this is a fresh document context, document.write works fine.
    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <base target="_blank">
          <style>
            * { margin: 0; padding: 0; }
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
            .gist .gist-file { margin-bottom: 0 !important; border: none !important; }
          </style>
        </head>
        <body>
          <script src="${gistUrl}"></script>
        </body>
      </html>
    `);
    doc.close();

    // Resize the iframe once the gist content loads
    const resizeObserver = new ResizeObserver(() => {
      if (doc.body) {
        setHeight(doc.body.scrollHeight);
      }
    });

    const handleLoad = () => {
      if (doc.body) {
        setHeight(doc.body.scrollHeight);
        resizeObserver.observe(doc.body);
      }
    };

    iframe.addEventListener('load', handleLoad);

    return () => {
      iframe.removeEventListener('load', handleLoad);
      resizeObserver.disconnect();
    };
  }, [gistUrl]);

  // Derive the human-readable gist URL from the .js embed URL
  const gistLink = gistUrl.replace(/\.js$/, '');

  return (
    <div className="text-right">
      <iframe
        ref={iframeRef}
        style={{
          height: `${height}px`,
        }}
        className="border-brand-tan box-content w-full overflow-hidden rounded-md border"
        title="GitHub Gist"
      />
      <a href={gistLink} target="_blank" rel="noopener noreferrer" className="text-grey text-xs">
        {gistLink}
      </a>
    </div>
  );
}

export default GistEmbed;
