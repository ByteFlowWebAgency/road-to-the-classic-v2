import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function SocialBar() {
  return (
    <div className="bg-[#1a237e] text-white py-2 px-4 flex justify-between items-center">
      <div className="flex gap-4">
        <Link href="#" aria-label="Facebook">
          <Facebook className="h-5 w-5" />
        </Link>
        <Link href="#" aria-label="Instagram">
          <Instagram className="h-5 w-5" />
        </Link>
        <Link href="#" aria-label="LinkedIn">
          <Linkedin className="h-5 w-5" />
        </Link>
        <Link href="#" aria-label="Twitter">
          <Twitter className="h-5 w-5" />
        </Link>
      </div>
      <Link href="/donate" className="bg-white text-[#1a237e] px-4 py-1 rounded text-sm font-medium">
        GIVE NOW
      </Link>
    </div>
  )
} 