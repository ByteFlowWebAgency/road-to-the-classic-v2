<<<<<<< HEAD
import Link from "next/link"
<<<<<<< HEAD
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
=======
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
=======
import { Facebook, Instagram } from "lucide-react"
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f

export function SocialBar() {
  return (
    <div className="bg-[#1a237e] text-white py-2 px-4 flex justify-between items-center">
      <div className="flex gap-4">
<<<<<<< HEAD
        <Link href="#" aria-label="Facebook">
          <Facebook className="h-5 w-5" />
        </Link>
        <Link href="https://www.instagram.com/roadtotheclassic25?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram">
          <Instagram className="h-5 w-5" />
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
  )
} 
=======
        <Link
          href="https://www.facebook.com/61573107310164/videos/494272420417120"
          aria-label="Facebook"
        >
          <FaFacebook className="h-5 w-5" />
        </Link>
        <Link
          href="https://www.instagram.com/roadtotheclassic25?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          aria-label="Instagram"
        >
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
>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
