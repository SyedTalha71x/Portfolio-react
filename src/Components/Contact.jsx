/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub, FaDev } from 'react-icons/fa';

export const Contact = () => {
  return (
    <footer className="bg-gray-900 py-6 px-10 font-sans tracking-wide" id='social'>
      <div className="flex items-center justify-between max-sm:flex-col gap-5">
        <p className="text-md font-semibold text-gray-400 flex items-center">
          Follow Me <span className="text-2xl ml-2">😊</span>
        </p>

        <ul className="flex flex-wrap justify-center gap-x-8 gap-4">
          <li>
            <a href="javascript:void(0)" className="text-xl hover:text-gray-400 text-white p-2">
              <FaFacebookF/>
            </a>
          </li>

          <li>
            <a href="javascript:void(0)" className="text-xl hover:text-gray-400 text-white p-2">
            <FaGithub/>
            </a>
          </li>

          <li>
            <a href="javascript:void(0)" className="text-xl hover:text-gray-400 text-white p-2">
             <FaLinkedinIn/>
            </a>
          </li>

          <li>
            <a href="javascript:void(0)" className="text-xl hover:text-gray-400 text-white p-2">
            <FaDev/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
