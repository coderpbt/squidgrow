'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../public/images/logo.png';
import envolpe from '../../public/images/envolpe.svg';
import Image from 'next/image';
import { Menu, X, Search } from "lucide-react"; // ✅ icons

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const handleToggle = () => setOpen(!isOpen);

  return (
    <header className='py-6 relative'>
      <div className='custom-container flex justify-between items-center'>
        <Link href='/'>
          <Image src={logo} alt='logo' width={250} />
        </Link>

        <nav className='hidden md:block'>
          <ul className='flex gap-8 items-center'>
            <li className='mr-8'><Link href='/' className='text-lg font-semibold font-atyp-text hover:opacity-90'>Utilities</Link></li>
            <li className='mr-8'><Link href='/about' className='text-lg font-semibold font-atyp-text'>About</Link></li>
            <li className='mr-8'><Link href='/press' className='text-lg font-semibold font-atyp-text'>Press</Link></li>
            <li className='mr-8'>
              <form className='relative'>
                <Search size={20} className='absolute bottom-1.5 left-0' />
                <input className='border-b-2 border-b-white outline-none' type="text" />
                
              </form>
            </li>
            <li>
              <Link href='/join' className=''>
                <div className='flex items-center gap-2 py-5 px-6 font-semibold text-[14px] font-atyp-text bg-primary rounded-[50px]'>
                  <Image src={envolpe} alt='envolpe'  />
                   <div> Join the community</div>                  
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className='md:hidden z-50'
          onClick={handleToggle}
          aria-label='Toggle menu'
        >
          {isOpen ? <X size={32} className='text-white' /> : <Menu size={32} className='text-white' />}
        </button>


        <div
          className={`fixed top-0 right-0 h-full w-64 bg-black text-white p-6 transform transition-transform duration-300 z-40 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className='flex flex-col gap-6 mt-20'>
            <li><Link href='/' onClick={handleToggle}>Utilities</Link></li>
            <li><Link href='/about' onClick={handleToggle}>About</Link></li>
            <li><Link href='/press' onClick={handleToggle}>Press</Link></li>
            <li><Link href='/join' onClick={handleToggle}>Join the community</Link></li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div
          className='fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden'
          onClick={handleToggle}
        />
      )}
    </header>
  );
};

export default Header;
