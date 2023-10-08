import React from 'react';
import { PT_Serif } from 'next/font/google';

const serif = PT_Serif({ subsets: ['latin'], weight: '400' });

export const HomePage = () => {
  return (
    <main className={`${serif.className} w-full`}>
      <h1 className='text-center w-full text-2xl'>Citas Medicas</h1>
    </main>
  )
}
export default HomePage;