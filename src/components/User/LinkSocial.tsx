import Link from 'next/link';
import React from 'react'

export const LinkSocial = ({name,logo,link}:{link:string,logo:any,name:string}) => {
  return (
    <Link href={link} target="_blank" className=" bg-zinc-800  hover:bg-zinc-700 px-3  p-2 rounded-md  flex  items-center gap-2 cursor-pointer">
            {logo}
            <p className="text-sm">{name}</p>
        </Link>
  )
}
