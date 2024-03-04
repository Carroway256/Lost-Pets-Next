import Image from 'next/image';
import { Roboto } from 'next/font/google';
import BasicButton from '@/components/basicButton/basicButton';
import autoAnimate from '@formkit/auto-animate';
import { useState, useRef, useEffect } from 'react';
import Logo from '../public/lostPetsLogo.png';
const inter = Roboto({ subsets: ['latin'], weight: '500' });
export default function Home() {
  const [show, setShow] = useState(false);
  const [isHidden, setisHidden] = useState(false);

  return (
    <>
      <main
        className={`welcomeLayout flex min-h-screen flex-col items-center justify-between overflow-x-hidden pb-12  ${inter.className}`}
      >
        <Image src={Logo} width={300} height={300} alt="Picture of the author" />
        <div className="w-100 flex items-center  gap-16">
          <BasicButton name="Sign In" />
          <BasicButton name="Take me to posts" />
        </div>
        <div
          className={`${show ? 'triangle-animation' : ''} ${isHidden ? 'hidden' : ''} triangle absolute left-0 top-[40%] flex flex-col justify-center shadow-2xl`}
        >
          <p
            className={` pl-4 text-white`}
            onClick={() => {
              setShow(true);
              setInterval(() => {
                setisHidden(true);
              }, 3000);
            }}
          >
            Learn more !
          </p>
        </div>
      </main>{' '}
      <div
        className={`${show ? 'about_container' : ''}  absolute left-[-100vw] top-0  h-[100vh] w-[100vw] bg-red-500`}
      >
        Lorum ipsum...
      </div>
    </>
  );
}
