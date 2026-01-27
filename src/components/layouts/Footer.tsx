import SocialLink from '~/components/SocialLink';
import { SOCIAL_LINKS } from '~/constants';

function Footer() {
  return (
    <footer className="mx-auto max-w-2xl px-5 py-2.5 text-center text-xs">
      <div className="mb-3 flex justify-center gap-5">
        {Object.values(SOCIAL_LINKS).map((link) => (
          <SocialLink key={link.id} link={link} className="size-6!" />
        ))}
      </div>
      <div>&copy; {new Date().getFullYear()}, Ian Hirschfeld</div>
    </footer>
  );
}

export default Footer;
