"use client";
import { useState, useEffect } from 'react';
import { Heading1, Section } from '@/components/ui';
import Image from 'next/image'; 
import {
    Typography, 
    Heading2,  
} from '@/components/ui';
import { UpcomingEvents } from '@/components/sections/UpcomingEvents';
import { events, EVENT_TYPES } from '@/data/events';
import './BCHOFstyle.css';

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

    // Get Hall of Fame events
    const hofEvents = events.filter(event => event.type === EVENT_TYPES.HALL_OF_FAME);

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

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
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
                <Heading2 color="primary" className="text-4xl font-bold text-center mb-8">
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
                        <Typography variant="subtle" className="text-lg leading-relaxed text-center">
                            We cherish our collaborative partnership with the Black College Football Hall of Fame. This is our 
                            opportunity to use the "HBCU Classic" in Canton, Ohio as a launching pad for our future leaders. This 
                            event is a celebration for all of our youth participants to come together and highlight all of their 
                            achievements throughout the year in the areas of entrepreneurship, engineering, science, innovation, 
                            academic excellence, journalism, media, performing arts, and athletics. This partnership gives us the 
                            opportunity to fill the stadium with young future "Hall of Famers" from all over the state and abroad.
                        </Typography>
                    </div>
                </div>
            </Section>

            <UpcomingEvents 
                customEvents={hofEvents}
                background="[#1a237e]"
                titleColor="white"
                description={null}
                showViewAll={false}
                limit={6}
            />
        </div>
    );
}