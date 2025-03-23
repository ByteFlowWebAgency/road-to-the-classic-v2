import Link from "next/link"
import { Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-white py-10 border-t">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold text-lg mb-4 border-b pb-2">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/who-we-are" className="text-gray-600 hover:text-[#1a237e]">Who We Are</Link></li>
              <li><Link href="/get-involved" className="text-gray-600 hover:text-[#1a237e]">Get Involved</Link></li>
              <li><Link href="/partnerships" className="text-gray-600 hover:text-[#1a237e]">Partnerships</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 border-b pb-2">Programs</h3>
            <ul className="space-y-2">
              <li><Link href="/youth-events" className="text-gray-600 hover:text-[#1a237e]">Youth Events</Link></li>
              <li><Link href="/college-football" className="text-gray-600 hover:text-[#1a237e]">Black College Football</Link></li>
              <li><Link href="/hall-of-fame" className="text-gray-600 hover:text-[#1a237e]">Hall of Fame Events</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 border-b pb-2">Learn More</h3>
            <p className="text-gray-600 mb-4">Discover how you can support our mission today.</p>
            <Button className="bg-[#1a237e] hover:bg-[#0d1757] w-full mb-4">Donate</Button>
            <h4 className="font-medium mb-2">Follow Us on Our Socials</h4>
            <div className="flex gap-4">
              <Link href="#" aria-label="Instagram" className="text-[#1a237e]">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-[#1a237e]">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-[#1a237e]">
                <Twitter className="h-6 w-6" />
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