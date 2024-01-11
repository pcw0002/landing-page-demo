"use client";

import Image from 'next/image'
import NavBar from '@/components/NavBar'
import InfoCard from '@/components/InfoCard'

import { cardData } from '@/data/cardData'

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen min-w-screen flex-col items-center gap-16 px-24">
      <NavBar />
      <div className='flex flex-col gap-6 m-4 md:flex-row justify-start align-top'>
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-md"
          src="/placeholder.jpg"
          alt="Placeholder image"
          width={450}
          height={300}
          priority
        />
        <div className='flex flex-col p-2 h-max'>
          <h1 className='text-xl font-bold'>Lorem Title</h1>
          <p className='md:m-2 md:mb-0 mb-2 m-0 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatum.</p>
          <p className='md:m-2 md:mb-0 mb-2 m-0 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatum.</p>
          <p className='md:m-2 md:mb-0 mb-2 m-0 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatum.</p>
        </div>
      </div>

      <div className="pb-32 grid text-center gap-3 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        {cardData.map((card) => (
          <InfoCard
            key={card.title}
            title={card.title}
            description={card.description}
            content={card.content}
            footer={card.footer}
          />
        ))}
        {/* Commenting this out below in case you want to opt to NOT use the shadcn card and want something more css and vanilla html */}
        {/* <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
      </div>
    </main>
    </>
  )
}
