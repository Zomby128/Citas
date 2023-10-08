import Formulario from '@/components/Formulario';
import React from 'react'

const CitasPage = () => {
  return (
    <main className='bg-red-800 w-full text-white'>
      <h1 className='text-center font-semibold text-2xl'>Agendar Cita</h1>
      <section className='m-10'>
      <Formulario />
      </section>
    </main>
    );
}

export default CitasPage;