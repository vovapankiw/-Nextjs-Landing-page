import FacebookIcon from '@/icons/FacebookIcon';
import Logo from '../Logo';
import TwitterIcon from '@/icons/TwitterIcon';
import InstagramIcon from '@/icons/InstagramIcon';
import YoutubeIcon from '@/icons/YoutubeIcon';

export default function FooterMenu() {
  return (
    <div className="flex w-full flex-row flex-wrap justify-around gap-2 rounded-xl bg-[#EAE6E0] p-20">
      <div>
        <Logo />
      </div>
      <div className="max-w-44">
        <h3 className="mb-5 text-lg font-bold">Explore us</h3>
        <ul>
          <li>
            <a href="/" className="flex items-center gap-1">
              <FacebookIcon />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center gap-1">
              <TwitterIcon />
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center gap-1">
              <InstagramIcon />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center gap-1">
              <YoutubeIcon />
              <span>Youtube</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="max-w-44">
        <h3 className="mb-5 text-lg font-bold">Browse</h3>
        <p>Private people’s proposals always first.</p>
      </div>
      <div className="max-w-44">
        <h3 className="mb-5 text-lg font-bold">Contact Us</h3>
        <p className="mb-5">
          We are online Mon-Fri from 10 am to 6 pm. Feel free to ask a question.
        </p>
        <button className="max-w-40 rounded bg-primary px-6 py-3 text-sm text-white font-bold opacity-75 hover:opacity-100">
          Contact Us
        </button>
      </div>
      <div className="max-w-44">
        <h3 className="mb-5 text-lg font-bold">Realtor association</h3>
        <p>RealHome is an official representative of Realtor University.</p>
      </div>
    </div>
  );
}
