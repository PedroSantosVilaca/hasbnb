import React from 'react'

export function Item() {
  return (
    <div>
      <a href="/"className='flex flex-col gap-2'>
      <img src="" alt="Imagem da Acomodação"
      className='aspect-square object-cover rounded-2xl' />
     </a>
     <div>
      <h3 className='text-xl font-semibold'>Cabo Frio, RJ</h3>
      <p>Descrição</p>
      <p className='truncate text-gray-600'><span className='font-semibold'>R$550</span>por noite</p>
      </div>
    </div>
  )
}

