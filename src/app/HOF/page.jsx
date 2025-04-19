"use client";
import { useState, useEffect } from "react"; // Combined imports
import { Heading1, Section } from "@/components/ui";
import Image from "next/image";
import { Typography, Heading2 } from "@/components/ui";
import { UpcomingEvents } from "@/components/sections/UpcomingEvents";
import "./BCHOFstyle.css";

const eventsData = [
  {
    id: 1,
    date: "Thu, June 19, 2025",
    title:
      "Road To The Classic Black College Football Hall Of Fame HBCU Youth Entrepreneur Expo",
    time: "12:00 PM - 6:00 PM",
    location: "Crenshaw Park",
    host: "Future Promise",
  },
  {
    id: 2,
    date: "August 12-14, 2025 (Tues-Thurs)",
    title:
      "Road To The Classic Black College Football Hall of Fame HBCU Cheer & Dance Competition",
    time: "9:00 AM - 3:00 PM (Aug 12-13), 9:00 AM - 12:00 PM (Aug 14)",
    location: 'Edward "Peel" Coleman',
    host: "Road To The Classic Inc.",
  },
  {
    id: 3,
    date: "August 15-17, 2025 (Fri-Sun)",
    title:
      "Road To The Classic Black College Football Hall of Fame HBCU Youth Football Tournament",
    time: "Friday Registration, Saturday 8:00 AM - 8:00 PM, Sunday 8:00 AM - 2:00 PM",
    location: "Hall of Fame Football Fields",
    host: "L.A.V.A. Athletics",
  },
  {
    id: 4,
    date: "Sat, August 16, 2025",
    title:
      "Road To The Classic Black College Football Hall Of Fame HBCU Hoop for Coop Youth Health Fair and Sports Clinic",
    time: "11:00 AM - 2:00 PM",
    location: "Hartford Middle School/ Hartford New Facility",
    host: "Guys & Gals Community Partnership Inc.",
  },
  {
    id: 5,
    date: "Fri, August 22, 2025",
    title:
      "Road To The Classic Black College Football Hall Of Fame HBCU Spelling Bee",
    time: "6:00 PM - 8:00 PM (TBA)",
    location: "Hall of Fame Room",
    host: "L.A.V.A. Athletics/Crouse CLC",
  },
  {
    id: 6,
    date: "Sat, August 23, 2025",
    title:
      "Road To The Classic Black College Football Hall Of Fame HBCU STEAM Fair and Live Inventors Museum",
    time: "10:00 AM - 3:00 PM",
    location: "Cultural Center (Great Court)",
    host: "United Family Community and STEAM Hartford Middle School",
  },
  {
    id: 7,
    date: "Sat, August 23, 2025",
    title:
      "Road To The Classic Black College Football Hall Of Fame HBCU Youth Entrepreneur Shark Tank",
    time: "10:00 AM - 3:00 PM",
    location: "Cultural Center (Fry Theatre)",
    host: "Future Promise",
  },
  {
    id: 8,
    date: "Sat, August 23, 2025",
    title:
      "Road To The Classic Black College Football Hall Of Fame HBCU Literacy On The Run",
    time: "12:00 PM - 4:00 PM (TBA)",
    location: "HDs Entertainment Center",
    host: "Brooks Rivers Fashion",
  },
  {
    id: 9,
    date: "Sun, August 24, 2025",
    title:
      "Road To The Classic Black College Football Hall Of Fame Faith Forward to Fulfillment! HBCU Gospel Concert",
    time: "2:00 PM - 5:00 PM (TBA)",
    location: "McKinley Symphony Center (TBA)",
    host: "Walking With a Purpose",
  },
  {
    id: 10,
    date: "Wed, August 27, 2025",
    title:
      "Road To The Classic Black College Football Hall Of Fame HBCU Trivia Game Night",
    time: "6:00 PM - 8:00 PM (TBA)",
    location: "LIVE streamed online",
    host: "Positive Youth Media Network",
  },
  {
    id: 11,
    date: "Thu, August 28, 2025",
    title:
      "Road To The Classic Black College Football Hall Of Fame HBCU Education Day Podcast Show",
    time: "6:00 PM - 8:00 PM (TBA)",
    location: "LIVE streamed online",
    host: "Positive Youth Media Network",
  },
  {
    id: 12,
    date: "Fri, August 29, 2025",
    title:
      "Road To The Classic Black College Football Hall Of Fame HBCU Road To Royalty: King & Queen Pageant",
    time: "6:00 PM - 9:00 PM (TBA)",
    location: "Hall of Fame Room",
    host: "Road To The Classic Inc.",
  },
  {
    id: 13,
    date: "Sat, August 30, 2025",
    title:
      "Road To The Classic Black College Football Hall Of Fame HBCU WE ALL IN Best of Both Worlds Cheer & Dance Competition & Community Parade",
    time: "8:00 AM - 3:00 PM",
    location:
      "Centennial Plaza (If Possible), Alternate: Parade Route down Alan Page Dr.",
    host: "Road To The Classic Inc.",
  },
];

export default function HallOfFamePage() {
  const images = [
    "/images/75044160007-black-college-football-hof-classic-55.webp",
    "/images/75044158007-black-college-football-hof-classic-65.webp",
    "/images/75044164007-black-college-football-hof-classic-57.webp",
    "/images/75044162007-black-college-football-hof-classic-61.webp",
    "/images/75044157007-black-college-football-hof-classic-63.webp",
    "/images/75044155007-black-college-football-hof-classic-59.webp",
    "/images/75044154007-black-college-football-hof-classic-62.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Set initial window dimensions
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //using useEffect to handle automatic immage switch every few seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // images changes every 3 seconds

    return () => clearInterval(intervalId); //clear up inyerval on unmount
  }, [images.length]);

  return (
    <div>
      <Section
        className="fullscreen-section"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="fullscreen-content">
          <Heading1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Black College Football Hall of Fame
          </Heading1>
        </div>
      </Section>

      <Section background="white" className="py-12">
        <Heading2
          color="primary"
          className="text-4xl font-bold text-center mb-8"
        >
          Black College Football Hall Of Fame
        </Heading2>
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-16 gap-6 items-center">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/hallOfFameLogo.jpg"
              alt="Hall of Fame logo"
              width={300}
              height={300}
              className="object-contain w-full"
            />
          </div>
          <div>
            <Typography
              variant="subtle"
              className="text-lg leading-relaxed text-center"
            >
              We cherish our collaborative partnership with the Black College
              Football Hall of Fame. This is our opportunity to use the "HBCU
              Classic" in Canton, Ohio as a launching pad for our future
              leaders. This event is a celebration for all of our youth
              participants to come together and highlight all of their
              achievements throughout the year in the areas of entrepreneurship,
              engineering, science, innovation, academic excellence, journalism,
              media, performing arts, and athletics. This partnership gives us
              the opportunity to fill the stadium with young future "Hall of
              Famers" from all over the state and abroad.
            </Typography>
          </div>
        </div>
      </Section>

      <UpcomingEvents
        customEvents={eventsData}
        background="[#1a237e]"
        titleColor="white"
        description={null}
        showViewAll={false}
      />
    </div>
  );
}
