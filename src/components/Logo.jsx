// The mark is one continuous line (a "b" looping into an "n"), drawn in
// currentColor so it is maroon on light backgrounds and cream in the footer.
// public/logo.svg holds the same path for icons and the share image.
const MARK_PATH =
  'M502 497L502 565C502 590 485 604 463 604C440 604 424 590 424 570L424 460C424 403 462 367 518 367C566 367 597 392 597 422C597 446 581 466 557 475C588 487 605 510 605 535C605 600 540 646 458 646C395 646 350 620 345 585C337 530 340 420 365 335C390 270 450 242 515 242C600 242 655 300 690 380C720 450 737 520 746 578C750 605 768 627 792 627C820 627 845 590 858 545C878 470 872 380 840 320C815 270 780 233 743 220';

export default function Logo() {
  return (
    <span className="logo">
      <svg className="logo-mark" viewBox="326 205 560 456" width="44" height="36" aria-hidden="true">
        <path d={MARK_PATH} fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="logo-text">
        JBN<b>MEDIA</b>
      </span>
    </span>
  );
}
