// navbarComponents.tsx
'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import { MdArrowBackIos } from 'react-icons/md';

export default function NavbarComponents() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full bg-[#35363b] text-white">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold">
                    <Image
                        src={"/Logo/Logo.png"}
                        alt="Logo"
                        width={100}
                        height={100}
                        className="w-28"
                    />
                </Link>

                {/* Menu desktop */}
                <div className="hidden md:flex space-x-8 font-montserrat lg:text-base text-sm">
                    <Link href="/" className="hover:text-blue-300">Services</Link>
                    <Link href="/" className="hover:text-blue-300">Produits</Link>
                    <Link href="/" className="hover:text-blue-300">Nos partenaires</Link>
                    <Link href="/about" className="hover:text-blue-300">Qui sommes-nous ?</Link>
                    <Link href="/" className="hover:text-blue-300">Nous contacter</Link>
                </div>

                {/* Bouton menu mobile */}
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? <RiCloseLine /> : <RiMenu4Line />}
                </button>
            </div>

            {/* Menu mobile - visible uniquement si isOpen est true */}
            {isOpen && (
                <div className="fixed inset-0 bg-[#35363b] flex flex-col items-left space-y-8 py-4 px-4">
                    <span className='border-b-2 border-white-500 pb-2 text-lg' onClick={toggleMenu}><MdArrowBackIos /></span>
                    <Link href="/" className="hover:text-blue-300" onClick={toggleMenu}>Services</Link>
                    <Link href="/" className="hover:text-blue-300" onClick={toggleMenu}>Produits</Link>
                    <Link href="/" className="hover:text-blue-300" onClick={toggleMenu}>Nos partenaires</Link>
                    <Link href="/about" className="hover:text-blue-300" onClick={toggleMenu}>Qui sommes-nous ?</Link>
                    <Link href="/" className="hover:text-blue-300" onClick={toggleMenu}>Nous contacter</Link>
                </div>
            )}
        </nav>
    );
}
