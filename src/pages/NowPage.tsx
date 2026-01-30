import { useEffect } from 'react';

import roleBannerImage from '~/assets/RoleBanner.jpg';
import PageLayout from '~/components/layouts/PageLayout';

function NowPage() {
  useEffect(() => {
    document.title = 'Now | Ian Hirschfeld';
  }, []);

  return (
    <PageLayout>
      <section>
        <h1>What I'm Doing Right Now</h1>
        <div className="text-grey">Last Updated: December 31st, 2020</div>
        <div className="banner">
          <img src={roleBannerImage} alt="Role Banner" className="w-full" />
        </div>
      </section>

      <section>
        <h2>Role, Inc. and the Future of Online Play</h2>
        <p>
          Towards the beginning of 2020, L. Dwight and I co-found{' '}
          <a href="https://www.playrole.com" target="_blank" rel="noopener noreferrer">
            Role, Inc.
          </a>{' '}
          with the vision of building of the future of Online Play. With the increasing popularity
          of video based tools & services, we saw the need for a platform to help people connect and
          play seamlessly online. With this goal in mind, we looked for a starting point where we
          could offer the most immediate value. We found that a shared passion of ours was ripe for
          a new kind of platform, the industry of tabletop roleplaying games!
        </p>
        <p>
          Throughout 2020 we began building and testing our ideas. In June, we launched and
          completed a successful{' '}
          <a
            href="https://www.kickstarter.com/projects/role/role-a-new-kind-of-platform-for-the-rpg-community"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kickstarter campaign
          </a>{' '}
          which helped validate our initial product thoughts. In October, the Role platform went
          into Private Early Access, and by the end of November, Public Early Access. In just a few
          short months our player base grew and shared adventures online to the tune of over 300,000
          play minutes. We are continuing to refine the platform and have a fully public launch
          slated for Spring 2021.
        </p>
        <p>
          We truly believe TTRPGs are a gateway to a much larger audience, and a new kind of human
          connection online. It turns out we aren't the only ones with this belief! In September,
          a16z's Jonathan Lai and Andrew Chen published the article{' '}
          <a
            href="https://a16z.com/the-digital-future-of-tabletop-games/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>The Digital Future of Tabletop Games</em>
          </a>
          . This has emboldened us further on our mission to shape the future of Online Play with
          Role. 2021 is going to be a big year for us, come check out what we are creating at{' '}
          <a href="https://www.playrole.com" target="_blank" rel="noopener noreferrer">
            https://www.playrole.com
          </a>{' '}
          and join us on this adventure!
        </p>
      </section>
    </PageLayout>
  );
}

export default NowPage;
