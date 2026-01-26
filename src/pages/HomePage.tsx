import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import MainLayout from '~/components/layouts/MainLayout';

function HomePage() {
  useEffect(() => {
    document.title = 'Ian Hirschfeld - Co-Founder of Role, Inc.';
  }, []);

  return (
    <MainLayout>
      <section className="section">
        <h2 className="section-heading1">What I'm Doing Right Now</h2>
        <p>
          In 2020, Logan Dwight and I co-find Role, Inc. where I operate as our Lead Developer.{' '}
          <Link to="/now">Learn more about what we are building</Link>.
        </p>
      </section>

      <section className="section">
        <h2 className="section-heading1">About Me Professionally</h2>
        <p>
          I'm a Fullstack Software Engineer with a degree in Computer Science and Digital Art. I
          have over a decade of experience building applications of all shapes and sizes. I've
          created social networks, multimedia applications, and virtual reality experiences. I've
          worked at startups, large companies, and have been a consultant for some of the biggest
          brands in the world. Learn more <Link to="/about">about me and my career</Link> or take a
          deeper dive into my past <Link to="/projects">work and projects</Link>.
        </p>
      </section>

      <section className="section">
        <h2 className="section-heading1">Something A Little More Personal</h2>
        <p>
          My favorite book is <em>The Neverending Story</em> and my favorite movie,{' '}
          <em>The Matrix</em>. My most frequently played games are <em>Apex Legends</em> and{' '}
          <em>Rocket League</em>. I'm a believer in the future of VR and currently enjoy the
          Metaverse with my Oculus Quest. I love watching movies and I write about them on{' '}
          <a href="https://www.cinepocalypse.com" target="_blank" rel="noopener noreferrer">
            Cinepocalypse
          </a>
          . When I disconnect, I like to exercise through Muay Thai and head to the beach for some
          surfing.
        </p>
      </section>
    </MainLayout>
  );
}

export default HomePage;
