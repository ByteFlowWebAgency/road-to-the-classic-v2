import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-white py-10 border-t">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold text-lg mb-4 border-b pb-2">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-[#1a237e]">Who We Are</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-[#1a237e]">Get Involved</Link></li>
              <li><Link href="/partners" className="text-gray-600 hover:text-[#1a237e]">Partners and Sponsors</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 border-b pb-2">Events</h3>
            <ul className="space-y-2">
              <li><Link href="/rttc-events" className="text-gray-600 hover:text-[#1a237e]">Road To The Classic Events</Link></li>
              <li><Link href="/bcfhof-events" className="text-gray-600 hover:text-[#1a237e]">Black College Football Hall of Fame Events</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 border-b pb-2">Learn More</h3>
            <p className="text-gray-600 mb-4">Discover how you can support our mission today.</p>
            <Link 
              href="https://www.zeffy.com/donation-form/donate-to-make-a-difference-13874"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#1a237e] hover:bg-[#0d1757] w-full mb-4">Give Now</Button>
            </Link>
            <h4 className="font-medium mb-2">Follow Us on Our Socials</h4>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/roadtotheclassic25?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram" className="text-[#1a237e]" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-6 w-6" />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61573107310164" aria-label="Facebook" className="text-[#1a237e]" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="h-6 w-6" />
              </Link>
              
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t text-center text-sm text-gray-500">
          © 2025 Road To The Classic Inc. All rights reserved. | Website Design • Developed by BYTEFLOW
        </div>
      </div>
    </footer>
  )
} 