import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="mt-28 bg-white border-t border-slate-100 pt-8 mt-auto">
      <div className="grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        <div>
          <img src={assets.logo} alt="Logo" className="mb-5 w-32 cursor-pointer hover:opacity-80 transition-opacity" />
          <p className="w-full md:w-2/3 text-slate-500 leading-relaxed">
            Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the
          </p>
        </div>

        <div>
          <p className="text-lg font-bold mb-5 tracking-wider text-slate-800">COMPANY</p>
          <ul className="flex flex-col gap-2 text-slate-500">
            <li className="hover:text-black cursor-pointer hover:translate-x-1 transition-all duration-300">Home</li>
            <li className="hover:text-black cursor-pointer hover:translate-x-1 transition-all duration-300">About us</li>
            <li className="hover:text-black cursor-pointer hover:translate-x-1 transition-all duration-300">Delivery</li>
            <li className="hover:text-black cursor-pointer hover:translate-x-1 transition-all duration-300">Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-lg font-bold mb-5 tracking-wider text-slate-800">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-slate-500">
            <li className="hover:text-black cursor-pointer hover:translate-x-1 transition-all duration-300">+1-212-456-7890</li>
            <li className="hover:text-black cursor-pointer hover:translate-x-1 transition-all duration-300">contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="border-slate-100" />
        <p className="py-6 text-sm text-center text-slate-400 font-medium tracking-wide">
          Copyright 2026 @ foreveryou.com - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
