"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function BentoGridThird() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {/*    {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))} */}

      <div className="flex-1">
        <h3 className="font-semibold  text-xl mb-2">Payme Finance Info</h3>
        <h3 className="font-semibold text-sm  opacity-90">
          Key features of the app:
        </h3>

        <div className="flex-1 flex flex-col gap-4  justify-start h-full  py-4">
          <p className="text-xs opacity-70 ">• Invoice generation using AI</p>
          <p className="text-xs opacity-70 ">• Invoice conversion</p>
          <p className="text-xs opacity-70 ">• Invoice customization</p>
          <p className="text-xs opacity-70 ">
            • Planning management and much more
          </p>
        </div>
      </div>
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <div className="flex scale-75 md:scale-100 ">
          <Image
            src={
              "https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg"
            }
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full max-h-10 max-w-10 border border-white p-1"
          />
          <Image
            src={
              "https://brandslogos.com/wp-content/uploads/images/large/react-logo-1.png"
            }
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full max-h-8 max-w-8 border border-white p-1"
          />
        </div>

        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Frontend
        </p>
        <p className="border hidden md:flex border-teal-500 bg-red-100 dark:bg-red-900/20 text-teal-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Nextjs - React
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <div className="flex scale-75 md:scale-100 ">
          <Image
            src={
              "https://static-00.iconduck.com/assets.00/expo-icon-512x462-3a87htea.png"
            }
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-9 w-9 bg-white border-2 border-white"
          />
          <Image
            src={
              "https://brandslogos.com/wp-content/uploads/images/large/react-logo-1.png"
            }
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-10 w-10 border border-white p-1"
          />
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Mobile
        </p>
        <p className="border border-green-500 hidden md:flex bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Expo - React Native
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <div className="flex scale-75 md:scale-100 ">
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png"
            }
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-10 w-10 border border-white p-1"
          />
          <Image
            src={
              "https://cdn.iconscout.com/icon/free/png-256/free-stripe-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-6-pack-logos-icons-3030362.png?f=webp&w=256"
            }
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-10 w-10 border border-white p-1"
          />
          <Image
            src={
              "https://img.icons8.com/win10/600/FFFFFF/amazon-web-services.png"
            }
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-10 w-10 border border-white p-1 scale-75 md:scale-100 "
          />
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          And More
        </p>
        <p className="border border-orange-500 hidden md:flex bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          PostgreSql - Stripe - AwsS3
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Payme Finance",
    description: (
      <span className="text-sm">
        Application for financial management and real-time tracking
        <br />
        <Link
          target="_blank"
          href="https://paymefiance.com"
          className="text-white/50 text-xs"
        >
          Show Application
        </Link>
      </span>
    ),
    header: (
      <div className=" w-full h-full  bg-black overflow-hidden">
        <Image
          className=" md:h-[180%] w-full md:w-[180%] object-contain             "
          alt="react"
          src="/hero.png"
          width={400}
          height={400}
        />
      </div>
    ),
    className: "md:col-span-2",
  },
  {
    title: "Mobile Store",
    description: (
      <div>
        <div className="flex gap-2 ">
          <Link
            target="_blank"
            href="https://apps.apple.com/us/app/payme-facturation-et-finance/id6737771817"
            className=" p-1 px-2 border-white/30 border rounded-md  text-white/50 text-xs"
          >
            Ios App
          </Link>
          <div
            /*    target="_blank"
            href="" */
            className=" p-1  px-2 border-white/30 border  rounded-md  text-white/50 text-xs opacity-30"
          >
            Android App soon
          </div>
        </div>
      </div>
    ),

    header: <SkeletonTwo />,
    className: "md:col-span-1",
  },
  {
    title: "Dochome.ma",
    description: (
      <span className="text-sm">
        Web application for tracking COVID-19
        <br />
        <div className="text-white/40 text-xs">Projet in maintenance...</div>
      </span>
    ),
    header: (
      <div className=" w-full h-full  bg-black overflow-hidden">
        <Image
          className=" md:h-[90%] md:mt-7 w-full md:w-[100%]  object-cover "
          alt="react"
          src="/images/dochome.jpeg"
          width={800}
          height={800}
        />
      </div>
    ),
    className: "md:col-span-1",
    /*   icon: <IconSignature className="h-4 w-4 text-neutral-500" />, */
  },
  {
    title: "Afrilangue ",
    description: (
      <div className="text-sm">
        <p>
          {" "}
          A language learning app for African languages with more than 13
          languages
        </p>

        <div>
          <div className="flex gap-2 pt-2  ">
            <Link
              target="_blank"
              href="https://apps.apple.com/fr/app/afrilangues-officiel/id1511912820"
              className=" p-1 px-2 border-white/30 border rounded-md  text-white/50 text-xs"
            >
              Ios App
            </Link>
            <Link
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.afrilangues.app&hl=fr"
              className=" p-1  px-2 border-white/30 border  rounded-md  text-white/50 text-xs"
            >
              Android App
            </Link>
          </div>
        </div>
      </div>
    ),
    header: (
      <div className=" w-full h-full  bg-black overflow-hidden">
        <Image
          className=" md:h-[190%] w-full  object-contain             "
          alt="react"
          src="/images/afrilangues.png"
          width={400}
          height={400}
        />
      </div>
    ),
    className: "md:col-span-2",
  },
  {
    title: (
      <div className=" justify-center items-center flex">
        <p>Framework use for a projets</p>
      </div>
    ),

    header: <SkeletonFour />,
    className: "md:col-span-3",
  },
];
