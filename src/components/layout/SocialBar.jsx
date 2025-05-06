import Link from "next/link"
import { FaFacebook, FaInstagram } from "react-icons/fa"


export function SocialBar() {
  return (
    <div className="bg-[#1a237e] text-white py-2 px-4 flex justify-between items-center">
      <div className="flex gap-4">
        <Link href="https://www.facebook.com/profile.php?id=61573107310164" aria-label="Facebook">
          <FaFacebook className="h-5 w-5" />
        </Link>
        <Link href="https://www.instagram.com/roadtotheclassic25?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="h-5 w-5" />
        </Link>
      </div>
      <Link
        href="https://www.zeffy.com/donation-form/donate-to-make-a-difference-13874"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-[#1a237e] px-4 py-1 rounded text-sm font-medium"
      >
        GIVE NOW
      </Link>
    </div>
  );
}
