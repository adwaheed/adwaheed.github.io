'use client';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react';
import { SKILLS_SUMMARY } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);
    const imageRef = React.useRef<HTMLDivElement>(null);

    // Mouse movement animation
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!imageRef.current) return;
            
            // Calculate mouse position relative to viewport center
            const xPos = (e.clientX / window.innerWidth - 0.5) * 20; // -10 to 10 range
            const yPos = (e.clientY / window.innerHeight - 0.5) * 20; // -10 to 10 range
            
            gsap.to(imageRef.current, {
                x: xPos,
                y: yPos,
                duration: 1.5,
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    I believe in building scalable solutions that balance user experience with business objectives, delivering systems that are both powerful and intuitive.
                </h2>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Adil.
                        </p>
                        <div className="mt-6 slide-up-and-fade rounded" ref={imageRef}>
                            <Image 
                                src="/profile.jpg" 
                                alt="Adil Waheed" 
                                width={300} 
                                height={300}
                                className="transition-all"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                {SKILLS_SUMMARY.title}
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                {SKILLS_SUMMARY.description}
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                With 4+ years of experience in MERN stack development, I excel at transforming Figma designs into responsive, intuitive user interfaces, developing secure APIs, and delivering scalable web applications that enhance user experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
