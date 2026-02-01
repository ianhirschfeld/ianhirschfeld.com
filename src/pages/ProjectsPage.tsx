import { useEffect } from 'react';

import atlasImage from '~/assets/projects/Atlas.jpg';
import balancesImage from '~/assets/projects/Balances.jpg';
import beyondTokyoImage from '~/assets/projects/BeyondTokyo.jpg';
import cedImage from '~/assets/projects/CED.jpg';
import goodFridaysImage from '~/assets/projects/GoodFridays.jpg';
import hackDesignImage from '~/assets/projects/HackDesign.png';
import neverBoutUsImage from '~/assets/projects/NeverBoutUs.jpg';
import profileImage from '~/assets/projects/Profile.jpg';
import retinaMacAppsImage from '~/assets/projects/RetinaMacApps.jpg';
import roleClassicImage from '~/assets/projects/RoleClassic.jpg';
import PageLayout from '~/components/layouts/PageLayout';
import ProjectList, { type Project } from '~/components/ProjectList';

const projects: Project[] = [
  {
    title: 'Role Classic',
    description:
      'Role-playing party game built for your phone. Designed around the question: "What if D&D was as easy to play as Apples to Apples?" With no social media and $0 in marketing, Role Classic gained over 100,000 players.',
    image: roleClassicImage,
    url: 'https://apps.apple.com/us/app/role-classic/id933599454',
  },
  {
    title: 'Hack Design',
    description:
      'Introductory product design course. With lessons written by industry professionals, Hack Design has more than 350,000 students.',
    image: hackDesignImage,
    url: 'https://hackdesign.org',
  },
  {
    title: 'Beyond Tokyo',
    description:
      "Roomscale VR travel experience built for the HTC Vive. Explore fantasy versions of famous locations in Japan while taking a journey through an interactive story about Hachiko, Japan's most loyal dog.",
    image: beyondTokyoImage,
    url: 'https://www.beyondtokyovr.com',
  },
  {
    title: 'Never Bout Us',
    description:
      "Ground breaking 360 music video created for VR viewing. Released in 2016, it went on to gain over 800,000 views. It's release was accompanied by a physical press kit including a custom cardboard VR viewer and memorabilia from the artist.",
    image: neverBoutUsImage,
    url: 'https://www.youtube.com/watch?v=_dw-Q6seOOk',
  },
  {
    title: 'Atlas',
    description:
      'VR sci-fi adventure for the Oculus Rift & Touch. Explore the world on your hover bike and solve environmental puzzles to unlock the mysteries hiding within the world.',
    image: atlasImage,
    url: 'https://vimeo.com/205636652',
  },
  {
    title: 'Balances',
    description:
      'Bitcoin financial app. Send & receive payments and track the balances of all your cryptocurrencies.',
    image: balancesImage,
    url: 'https://web.archive.org/web/20170709185626/https://balances.io/',
  },
  {
    title: 'Profile',
    description: 'Digital Look Book packaged in an iOS app.',
    image: profileImage,
    path: '/projects/profile',
  },
  {
    title: 'CED Innovators',
    description: 'Interactive data visualization. Created with D3.js.',
    image: cedImage,
    url: 'https://cednc.org/innovatorsreport/',
  },
  {
    title: 'GOOD Fridays',
    description:
      'iOS music player. An exploration in mobile audio player design with the music of Kanye West.',
    image: goodFridaysImage,
    url: 'https://apps.apple.com/us/app/good-fridays-kanye-west-edition/id1078562945',
  },
  {
    title: 'Retina Mac Apps',
    description:
      'The #1 resource for discovering retina supported apps after the 2012 launch of the first Retina Macbook Pro.',
    image: retinaMacAppsImage,
    url: 'https://web.archive.org/web/20121206183502/http://retinamacapps.com/',
  },
];

function ProjectsPage() {
  useEffect(() => {
    document.title = 'Projects | Ian Hirschfeld';
  }, []);

  return (
    <PageLayout isFullWidth>
      <section className="mx-auto max-w-2xl px-5">
        <h1>Work &amp; Projects</h1>
        <div className="text-grey">A sampling of some of my public work and personal projects</div>
      </section>

      <section>
        <ProjectList items={projects} />
      </section>
    </PageLayout>
  );
}

export default ProjectsPage;
