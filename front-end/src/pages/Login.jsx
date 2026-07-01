import React from 'react'
import {Link} from 'react-router-dom'
export function Login() {
  return (
      <section className='flex items-center'>
          <div className='mx-auto flex max-2-7xl flex-col items-center gap-4 w-full max-w-96 '>
        <h1 className='text-3xl'>Faça seu Login</h1>
        <form action="" className='flex flex-col gap-2 w-full'>
          <input type="email" placeholder='Digite seu E-mail' className=' lg:flex border border-gray-300 pr-4 pl-6 py-2 px-4 rounded-full shadow-md gap-2 w-full' />
          <input type="password" placeholder='Digite sua Senha' className=' lg:flex border border-gray-300 pr-4 pl-6 py-2 px-4 rounded-full shadow-md gap-2 w-full' />
          <button className='cursor-pointer w-full rounded-full border border-gray-300 px-4 py-2 bg-primary-400 font-bold'>Login</button>
        </form>
        <p>Ainda não tem conta? <Link to='/register' className='underline font-semibold'>Registre-se aqui!<Link></Link></Link>=</p>
        </div>
        </section>
  )
}

