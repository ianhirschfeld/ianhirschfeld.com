import { SOCIAL_LINKS } from '../../constants';
import SocialLink from '../SocialLink';

function Footer() {
  return (
    <footer className="mx-auto max-w-[680px] px-5 py-2.5 text-center text-[1.2rem]">
      <ul className="m-0 mb-5 list-none p-0">
        {Object.values(SOCIAL_LINKS).map((link) => (
          <li key={link.id} className="mr-5 inline-block align-top last:mr-0">
            <SocialLink link={link} className="size-6" />
          </li>
        ))}
      </ul>
      <div>&copy; {new Date().getFullYear()}, Ian Hirschfeld</div>
    </footer>
  );
}

export default Footer;
