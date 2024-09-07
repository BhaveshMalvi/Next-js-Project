"use client"
import Link from "next/link"
import { HoverEffect } from "../components/ui/card-hover-effect";

function UpcomingWebinars() {

    const featuredWebinars = [
        {
            title: 'Understanding Music Theory',
            description:
                'Dive deep into the fundamentals of music theory and enhance your musical skills.',
            slug: 'understanding-music-theory',
            isFeatured: true,
        },
        {
            title: 'The Art of Songwriting',
            description:
                'Learn the craft of songwriting from experienced musicians and songwriters.',
            slug: 'the-art-of-songwriting',
            isFeatured: true,
        },
        {
            title: 'Mastering Your Instrument',
            description:
                'Advanced techniques to master your musical instrument of choice.',
            slug: 'mastering-your-instrument',
            isFeatured: true,
        },
        {
            title: 'Music Production Essentials',
            description:
                'Get started with music production with this comprehensive overview.',
            slug: 'music-production-essentials',
            isFeatured: true,
        },
        {
            title: 'Exploring Music Genres',
            description: 'Discover the diverse world of music genres and their unique characteristics.',
            slug: 'exploring-music-genres',
            isFeatured: true,
        },
        {
            title: 'Music History Through the Ages',
            description: 'Take a journey through the history of music, from ancient times to modern day.',
            slug: 'music-history-through-the-ages',
            isFeatured: true,
        },
        {
            title: 'Ear Training Techniques',
            description: 'Sharpen your listening skills and improve your ability to recognize musical elements by ear.',
            slug: 'ear-training-techniques',
            isFeatured: true,
        },
        {
            title: 'Improvisation for Musicians',
            description: 'Learn the art of improvisation and how to apply it to various musical contexts.',
            slug: 'improvisation-for-musicians',
            isFeatured: true,
        },
        {
            title: 'Conducting Basics',
            description: 'An introduction to the fundamental techniques of conducting musical ensembles.',
            slug: 'conducting-basics',
            isFeatured: true,
        }
    ];




    return (
        <div className=" p-12 bg-gray-900 ">
            <div className=" max-w-7xl mx-auto px-auto sm:px-6 ">
                <div className=" text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide">FEATURED WEBINARS</h2>
                    <p className=" mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhanced your Musical Journey</p>
                </div>
                <div className=" mt-10">
                <HoverEffect items={featuredWebinars.map(webinar => ({
                    title:webinar.title,
                    description:webinar.description,
                    link: "/"
                }))} />
                </div>
                <div className=" mt-10 text-center">
                    <Link href={"/"} className=" px-4 py-2 rounded-[5px] border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">View All courses</Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars