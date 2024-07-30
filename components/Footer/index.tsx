import FooterCopyRights from './FooterCopyRights';
import FooterMenu from './FooterMenu';

export default function Footer() {
  return (
    <div className="mx-2 mb-24 flex flex-col gap-3 xl:mx-24">
      <FooterMenu />
      <FooterCopyRights />
    </div>
  );
}
