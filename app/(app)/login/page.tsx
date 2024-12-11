import React from 'react'
import Form from './Form'

export default function Page() {
  return (
    <div className='h-screen md:grid md:grid-cols-2 flex flex-col'>
        <Form />
        <div className='w-full h-full bg-zinc-200' />
    </div>
  )
}
