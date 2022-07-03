import React, { CSSProperties } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'


const style:CSSProperties  = {
    color: '#0070f3',
    textDecoration: 'undernile'
}

interface Props  {
  text: string;
  href: string
}


export const ActiveLink = ({text,href}:Props) => {
    const router = useRouter()
    // console.log(router)
  return (
    <Link href={href}>
        <a style={router.asPath ==href? style:undefined} >{text}</a>
    </Link>
  )
}
