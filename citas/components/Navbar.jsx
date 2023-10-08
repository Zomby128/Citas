import Link from 'next/link'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

const Navbar = () => {
  return (
    <nav className='bg-red-400 p-10 w-[20%]'>
        <ul className='text-white space-y-4 mt-4'>
            <li className='space-x-3 flex items-center'>
              <HomeIcon />
                <Link href={'/'}>Inicio</Link></li>
              
            <li>
              <Link href={'/citas'}>Agendar cita</Link>
            </li>
            <li>
              <InfoIcon /><Link href={'/acercade'}>Acerca de</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar