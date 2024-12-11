import Link from 'next/link'
import React from 'react'

export default function Logo({ admin }: { admin?: boolean }) {
  return (
    <Link href="/" className='flex items-center gap-1.5 font-black text-3xl'>
        <span className='text-primary w-fit gap-2 border-2 border-red-400 p-1'>SWRLDº</span>
      {admin ? (
        <span>ADMIN</span>
      ): null}
    </Link>
  )
}


