import React from 'react'
import Link from 'next/link'

const SideNav = () => {
  return (
    <div className=' text-white -rotate-90 text-opacity-60 sideNav text-sm  flex gap-5'>
        <Link href={''}>
            TWITTER
        </Link>
        <Link href={''}>
            INSTAGRAM
        </Link>
        <Link href={''}>
           DISCORD
        </Link>
    </div>
  )
}

export default SideNav