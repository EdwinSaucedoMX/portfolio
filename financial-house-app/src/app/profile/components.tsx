"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar"
import { usePathname, useRouter } from "next/navigation"
import Link from 'next/link'


export function ProfileAvatar(props: any): React.JSX.Element {

  const initials = props.name
    .split(" ")
    .map((word: string) => word.charAt(0))
    .join("")

  const number = props.number
  const pathname = usePathname()
  const imageUrl = `https://minotar.net/avatar/${props.avatar}/${number}.png`

  return (

    <Link href={`${pathname}/${crypto.randomUUID()}`} className='flex flex-col  aspect-square place-items-center  hover:scale-105 transition-all cursor-pointer gap-5'  >
      <Avatar className='w-full h-full '>
        <AvatarImage src={imageUrl} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      {number}
      <h4 className='text-secondary-foreground text-center text-lg font-bold'>{props.name.split(" ").at(0)}</h4>
    </Link>
  )
}

