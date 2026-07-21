'use client';

import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function BlogPage() {
  useEffect(() => {
    // Dynamically load the Soro embed script only on the client with dark theme
    const script = document.createElement('script');
    script.src = 'https://app.trysoro.com/api/embed/2b8d8021-7437-4625-91a3-42fe62a1143c?theme=dark';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Blog</h1>
            <p className="text-lg text-muted-foreground">Latest news and updates from Alliance Taxi Barrie</p>
          </div>
          
          {/* Soro Blog Embed */}
          <div className="rounded-lg shadow-lg p-6">
            <div id="soro-blog"></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
