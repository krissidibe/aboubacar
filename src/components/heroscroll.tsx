"use client";

import { GlobeIcon } from "@radix-ui/react-icons";
import { IconBrandAppstore, IconBrandGooglePlay } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { ContainerScroll } from "./container-scoll-animation";
import { Button } from "./ui/button";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col relative overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className=" text-xl md:text-4xl font-semibold mb-10 text-black dark:text-white">
              My First Saas Is <br />
              <span className="text-3xl md:text-[4rem]  font-bold mt-1 leading-none">
                Payme Finance
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/hero.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <div className="flex-row w-auto absolute bottom-28       md:bottom-4  lg:bottom-10   flex-wrap justify-center   gap-4 self-center flex">
        <Link
          href={"https://paymefinance.com"}
          target="_blank"
          className="min-w-[150px]"
        >
          <Button type="button" variant={"default"} className=" gap-2  w-full ">
            <GlobeIcon /> Web
          </Button>
        </Link>
        <Link
          href={
            "https://apps.apple.com/us/app/payme-facturation-et-finance/id6737771817"
          }
          target="_blank"
          className="min-w-[150px]"
        >
          <Button type="button" variant={"default"} className=" gap-2  w-full ">
            <IconBrandAppstore /> AppStore
          </Button>
        </Link>
        <Button
          type="button"
          variant={"default"}
          className=" opacity-30 gap-2  "
        >
          <IconBrandGooglePlay /> PlayStore Soon
        </Button>
      </div>
    </div>
  );
}
