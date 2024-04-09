import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav className="bg-amber-500">
      <div className="  container ml-auto mr-auto pl-16px pr-16px">
        
        <ul className='items-center pb-10  flex gap-12 text-white pt-10'>
            <li>
            <img className='w-32' src="\img\logo.png" alt="" />
            </li>
            <li className=''>
                <a className='text-xl font-bold' href="Главная">Главная</a>
            </li>
            <li>
                <a className='text-xl font-bold' href="О нас">О нас</a>
            </li>
            <li>
                <a className='text-xl font-bold' href="Меню">Меню</a>
            </li>
            <li>
                <a className='text-xl font-bold' href="Контакты">Контакты</a>
            </li>
        </ul>
        </div>
      </nav>   
    </header>
  )
}

export default Navbar
