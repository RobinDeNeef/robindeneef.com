"use client"
import ArticleCard from "./ArticleCard";
import Block from "./Block";
import BlockWithIcon from "./BlockWithIcon";
import { FiArrowRight } from 'react-icons/fi';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';

const BentoGrid = ({posts}) => {
  return (
    <div className="min-h-screen px-4 md:py-12 text-zinc-50">
      <div className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4 lg:max-w-screen-lg">
        <HeaderBlock />
        <SocialBlock />
        <BlockWithIcon
          title={"Newsletter"}
          icon={"📨"}
          tagLine={"Monthly musings in your mailbox"}
          callToAction="Subscribe"
          url="https://robindeneef.substack.com/"
        />
        {/* <BlockWithIcon
          title={"Projects"}
          icon={"🚀"}
          tagLine={"Check out my latest projects"}
          callToAction="View Projects"
        /> */}
        <BlockWithIcon
          title={"Fullstack Almanac"}
          icon={"📖"}
          tagLine={"A Tech Blog"}
          callToAction="Check it out!"
          url="https://fullstackalmanac.com"
        />
        <BlockWithIcon
          title={"SobrinoStudios"}
          icon={"💼"}
          tagLine={"Data and AI Consultancy"}
          callToAction="Let's work together!"
          url="https://sobrinostudios.com"
        />
        <Block className={"col-span-12"}>
          <h2 className="text-2xl font-bold ml-5">Articles</h2>
          <div className="mx-auto mt-2 mb-4 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
          <a
            href="/posts"
            className="flex items-center gap-1 text-emerald-400 hover:underline"
          >
            Read more <FiArrowRight />
          </a>
        </Block>
      </div>
    </div>
  );
};

const HeaderBlock = ({ className, children, ...rest }) => {
  return <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://api.dicebear.com/9.x/croodles/svg?seed=Robin-"
      alt="avatar"
      className="mb-4 size-16 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-thight">
      Hi! I'm Robin De Neef.
      <span className="text-zinc-400"> Data/AI Consultant</span>
    </h1>
    <a
      href="https://robindeneef.substack.com/"
      className="flex items-center gap-1 text-emerald-400 hover:underline"
    >
      Contact me <FiArrowRight />
    </a>
  </Block>
}


const SocialBlock = () => {
  return <>
    <Block
      whileHover={{ scale: 1.1, rotate: "2.5deg" }}
      className="col-span-3 md:col-span-6 bg-zinc-800 md:col-span-3">
      <a
        href="https://github.com/RobinDeNeef"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{ scale: 1.1, rotate: "2.5deg" }}
      className="col-span-3 md:col-span-6 bg-blue-500 md:col-span-3">
      <a
        href="https://x.com/RobinDeNeef"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiTwitter />
      </a>
    </Block>

    <Block
      whileHover={{ scale: 1.1, rotate: "2.5deg" }}
      className="col-span-3 md:col-span-6 bg-blue-800 md:col-span-3">
      <a
        href="https://www.linkedin.com/in/robindeneef/"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiLinkedin />
      </a>
    </Block>
    <Block
      whileHover={{ scale: 1.1, rotate: "2.5deg" }}
      className="col-span-3 md:col-span-6 bg-orange-200 md:col-span-3">
      <a
        href="https://robindeneef.substack.com/"
        className="grid h-full place-content-center text-3xl text-black drop-shadow-md text-center"
      >
        👋 
        {/* <span className="hidden md:block text-sm">Lets Talk!</span> */}
      </a>
    </Block>
  </>
}

export default BentoGrid;