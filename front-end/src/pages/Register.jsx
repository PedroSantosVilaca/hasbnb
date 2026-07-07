import React from 'react'
import {Link, Navigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'


Register = ({setUser}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState("")
  const [redirect, setRedirect] = useState(false)


  const handleSubmit = async (e) =>{
      e.preventDefault()
      console.log(email, password)
      
     /*if(email && password){
        try{
      const {data: userDoc} =  await axios.post('/users/login' {
        email,
        password
      })
        setUser(userDoc)
        setRedirect(true)

    }
        catch(error){
          alert("Deu erro ao logar!")};
        } else{
        alert("Você precisa preencher o email e senha!")*/
      }
      if (redirect) <Navigate to='/' / >
      
    }

  return (
      <section className='flex items-center'>
          <div className='mx-auto flex max-2-7xl flex-col items-center gap-4 w-full max-w-96 '>
        <h1 className='text-3xl'>Faça seu Cadastro</h1>
        <form action="" className='flex flex-col gap-2 w-full' onSubmit={handleSubmit}>
          <input type="text" placeholder='Digite seu nome' value={name} onChange={(e)=>setName(e.target.value)} className=' lg:flex border border-gray-300 pr-4 pl-6 py-2 px-4 rounded-full shadow-md gap-2 w-full' />
          <input type="email" placeholder='Digite seu E-mail' value={email} onChange={(e)=>setEmail(e.target.value)} className=' lg:flex border border-gray-300 pr-4 pl-6 py-2 px-4 rounded-full shadow-md gap-2 w-full' />
          <input type="password" placeholder='Digite sua Senha' value={password} onChange={(e)=> setPassword(e.target.value)} className=' lg:flex border border-gray-300 pr-4 pl-6 py-2 px-4 rounded-full shadow-md gap-2 w-full' />
          <button className='cursor-pointer w-full rounded-full border border-gray-300 px-4 py-2 bg-primary-400 font-bold'>Registrar</button>
        </form>
        <p>Já tem conta? <Link to='/login' className='underline font-semibold'>Logue aqui!<Link></Link></Link>=</p>
        </div>
        </section>
  )


export default Register