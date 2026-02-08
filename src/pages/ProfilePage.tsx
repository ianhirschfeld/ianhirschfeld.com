import { useEffect } from 'react';

import screenshot00 from '~/assets/projects/profile/Profile_00.png';
import screenshot01 from '~/assets/projects/profile/Profile_01.png';
import screenshot02 from '~/assets/projects/profile/Profile_02.png';
import screenshot03 from '~/assets/projects/profile/Profile_03.png';
import screenshot04 from '~/assets/projects/profile/Profile_04.png';
import screenshot05 from '~/assets/projects/profile/Profile_05.png';
import screenshot06 from '~/assets/projects/profile/Profile_06.png';
import screenshot07 from '~/assets/projects/profile/Profile_07.png';
import screenshot08 from '~/assets/projects/profile/Profile_08.png';
import screenshot09 from '~/assets/projects/profile/Profile_09.png';
import bannerImage from '~/assets/projects/profile/ProfileBanner.jpg';
import PageLayout from '~/components/layouts/PageLayout';

function ProfilePage() {
  useEffect(() => {
    document.title = 'Profile | Ian Hirschfeld';
  }, []);

  return (
    <PageLayout isFullWidth>
      <section className="mx-auto max-w-2xl">
        <h1>Profile</h1>
        <div className="text-grey">Digital Look Book packaged in an iOS app.</div>
        <div className="banner">
          <img src={bannerImage} alt="Profile Banner" className="w-full" />
        </div>
      </section>

      <section className="mx-auto max-w-2xl">
        <h2>Overview</h2>
        <p>
          While working at The Soap Collective, we wanted to find a unique way to introduce the
          agency to potential clients. We had two objectives:
        </p>
        <ol>
          <li>Showcase members of our team</li>
          <li>Show off our skills as interactive designers</li>
        </ol>
        <p>
          After a brainstorming session, we settled on a digital look book that would feature our
          team's background, skills, and personal interests. The book would be packaged in a native
          app giving us full control over the UI and interactions. We developed custom swipe and
          transition mechanics to create a unique flow of information through the app.
        </p>

        <h2>About the Digital Look Book</h2>
        <p>
          Once we had our concept locked in, we began experimenting with different types of
          interactions. Since we were putting our Look Book into a native app, we played around with
          what kind of swipe interactions we could come up with. After some prototyping we designed
          a UX flow that always presented information no matter what direction you swiped in.
        </p>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          <img
            src={screenshot04}
            alt="Profile Screenshot: Left Zone"
            className="rounded-2.5xl mx-auto w-72 sm:w-full"
          />
          <img
            src={screenshot00}
            alt="Profile Screenshot: Middle Zone"
            className="rounded-2.5xl mx-auto w-72 sm:w-full"
          />
          <img
            src={screenshot05}
            alt="Profile Screenshot: Right Zone"
            className="rounded-2.5xl mx-auto w-72 sm:w-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-2xl">
        <p>
          We broke the app into three zones: left, middle, right. The middle zone is the primary
          space and where the app launches into. From there, you can swipe left to reveal info about
          The Soap Collective. Swiping right reveals a table of contents allowing you to quickly
          jump to any section within the middle zone. The middle is the primary flow of information.
          Starting from the launch screen, swiping down will progressively take your through various
          projects that the agency has worked on. Swiping up from the launch screen, will take your
          through the background and skills of our team.
        </p>
        <p>
          In addition to the swipe mechanics, we wanted to allow users to be able to tap to get to
          any section of the app. We added icons that always show you how you can get to the next
          piece of information either by tapping the icon or swiping in the direction indicated.
        </p>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          <img
            src={screenshot01}
            alt="Profile Screenshot: Portrait"
            className="rounded-2.5xl mx-auto w-72 sm:w-full"
          />
          <img
            src={screenshot02}
            alt="Profile Screenshot: Background"
            className="rounded-2.5xl mx-auto w-72 sm:w-full"
          />
          <img
            src={screenshot03}
            alt="Profile Screenshot: Project"
            className="rounded-2.5xl mx-auto w-72 sm:w-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-2xl">
        <h2>Hidden Interaction</h2>
        <p>
          For one final piece to the look book, we added an Easter egg. If you flip your phone
          upside down, the app transitions to its B-side. In this mode, all project information
          becomes "behind-the-scenes" and all team member bios get a little more personal.
        </p>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <img
            src={screenshot06}
            alt="Profile Screenshot: B-side"
            className="rounded-2.5xl mx-auto w-72 sm:w-full"
          />
          <img
            src={screenshot07}
            alt="Profile Screenshot: B-side Portrait"
            className="rounded-2.5xl mx-auto w-72 sm:w-full"
          />
          <img
            src={screenshot08}
            alt="Profile Screenshot: B-side Background"
            className="rounded-2.5xl mx-auto w-72 sm:w-full"
          />
          <img
            src={screenshot09}
            alt="Profile Screenshot: B-side Project"
            className="rounded-2.5xl mx-auto w-72 sm:w-full"
          />
        </div>
      </section>
    </PageLayout>
  );
}

export default ProfilePage;
