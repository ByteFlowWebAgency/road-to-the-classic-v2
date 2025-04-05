"use client";
import { Heading1, Section } from '@/components/ui';
import Image from 'next/image'; 
import { 
    Button, 
    Typography, 
    Heading2,  
    Card, 
    CardHeader, 
    CardTitle, 
    CardDescription, 
    CardContent,  
  } from '@/components/ui';
import { useState } from 'react';
import { useEffect } from 'react';
import './BCHOFstyle.css';


export default function HallOfFamePage(){
    const images = [
        "/images/75044160007-black-college-football-hof-classic-55.webp",
        "/images/75044158007-black-college-football-hof-classic-65.webp",
        "/images/75044164007-black-college-football-hof-classic-57.webp",
        "/images/75044162007-black-college-football-hof-classic-61.webp",
        "/images/75044157007-black-college-football-hof-classic-63.webp",
        "/images/75044155007-black-college-football-hof-classic-59.webp",
        "/images/75044154007-black-college-football-hof-classic-62.webp",
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [windowDimensions, setWindowDimensions] = useState({
        width: 0,
        height: 0,
    })

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
    useEffect(()=>{
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // images changes every 3 seconds

        return () => clearInterval(intervalId); //clear up inyerval on unmount
    }, [images.length]);

    return (
        <div>
            <Section className="fullscreen-section"
                    style={{ backgroundImage: `url(${images[currentIndex]})`}}
                    >

                        <div className="fullscreen-content">
                        <Heading1 className="absolute z-10 text-white text-5xl font-bold heading-animation">
                    Black College Football Hall of Fame</Heading1>
                        </div>
            </Section>

            <Section background="white" className="py-12 px-6">
            <Heading2 color="primary" className="text-3xl font-bold text-center mb-6">
                        Black College Football Hall Of Fame</Heading2>
                <div className="flex justify-between items-center">
                    <div className="w-32">
                        <Image
                        src="/images/hallOfFameLogo.jpg"
                        alt="Hall of Fame logo"
                        width={200}
                        height={200}
                        />
                    </div>
                    <div className="mt-6 text-black flex justify-end">
                        <div className="max-w-2xl text-right">
                            <Typography variant="subtle">
                            We cherish our collaborative partnership with the Black College Football Hall of Fame. This is our 
                            opportunity to use the “HBCU Classic” in Canton, Ohio as a launching pad for our future leaders. This 
                            event is a celebration for all of our youth participants to come together and highlight all of their 
                            achievements throughout the year in the areas of entrepreneurship, engineering, science, innovation, 
                            academic excellence, journalism, media, performing arts, and athletics. This partnership gives us the 
                            opportunity to fill the stadium with young future “Hall of Famers” from all over the state and abroad.
                            </Typography>
                        </div>
                    </div>
                </div>
            </Section>

            {/*upcoming events section */}
            <Section background="primary" className="py-12">
                <Heading2 color="primary-foreground" className="text-center mb-8">Upcomig Events</Heading2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap -8 px-4 md:px-16">
                    {/**Event cards */}
                <Card className="bg-primary shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold text-primary-foreground">Youth Entrepreneur Expo</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            <Typography variant="subtle" className="text-primary-foreground">June 19, 2025 | 12PM to 6PM</Typography>
                            <Typography variant="subtle" className="mt-2 text-primary-foreground">Location: Crenshaw Park</Typography>
                            <Typography variant="subtle" className="mt-2 text-primary-foreground">Hosted By: Road To The Classic</Typography>
                        </CardDescription>
                    </CardContent>
                </Card>
                {/**cards 2*/}
                <Card className="bg-primary shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold text-primary-foreground">Road To The Classic: Black College Football Hall of Fame HBCU - WE ALL IN Cheer &Dance Camp</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            <Typography variant="subtle" className="text-primary-foreground">August 12, 2025 | 9AM to 3PM</Typography>
                            <Typography variant="subtle" className="mt-2 mt-2 text-primary-foreground">Location: Edward "Peel" Coleman</Typography>
                            <Typography variant="subtle" className="mt-2 text-primary-foreground">Hosted By: Road To The Classic</Typography>
                        </CardDescription>
                    </CardContent>
                </Card>
                {/**cards 3*/}
                <Card className="bg-primary shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold text-primary-foreground">Road To The Classic: Black College Football Hall of Fame HBCU - WE ALL IN Cheer &Dance Camp (Day 2)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            <Typography variant="subtle" className="text-primary-foreground">August 13, 2025 | 9AM to 3PM</Typography>
                            <Typography variant="subtle" className="mt-2 mt-2 text-primary-foreground">Location: Edward "Peel" Coleman</Typography>
                            <Typography variant="subtle" className="mt-2 text-primary-foreground">Hosted By: Road To The Classic</Typography>
                        </CardDescription>
                    </CardContent>
                </Card>
                {/**cards 4*/}
                <Card className="bg-primary shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold text-primary-foreground">Road To The Classic: Black College Football Hall of Fame HBCU - WE ALL IN Cheer &Dance Camp (Day 3)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            <Typography variant="subtle" className="text-primary-foreground">August 14, 2025 | 9AM to 12PM</Typography>
                            <Typography variant="subtle" className="mt-2 mt-2 text-primary-foreground">Location: Edward "Peel" Coleman</Typography>
                            <Typography variant="subtle" className="mt-2 text-primary-foreground">Hosted By: Road To The Classic</Typography>
                        </CardDescription>
                    </CardContent>
                </Card>
                {/**cards 5*/}
                <Card className="bg-primary shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold text-primary-foreground">Youth Football Tournament</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            <Typography variant="subtle" className="text-primary-foreground">August 15, 2025 | 8AM to 8PM</Typography>
                            <Typography variant="subtle" className="mt-2 mt-2 text-primary-foreground">Hall of Fame Football Fields</Typography>
                            <Typography variant="subtle" className="mt-2 text-primary-foreground">Hosted By: Road To The Classic</Typography>
                        </CardDescription>
                    </CardContent>
                </Card>
                {/**cards 6*/}
                <Card className="bg-primary shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold text-primary-foreground">Hoop for Coop: Youth Health Fair & Sports Clinic</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            <Typography variant="subtle" className="text-primary-foreground">August 16, 2025 | 11AM to 2PM</Typography>
                            <Typography variant="subtle" className="mt-2 mt-2 text-primary-foreground">Hartford Middle School</Typography>
                            <Typography variant="subtle" className="mt-2 text-primary-foreground">Hosted By: Road To The Classic</Typography>
                        </CardDescription>
                    </CardContent>
                </Card>
                </div>
            </Section>
        </div>
    );
}