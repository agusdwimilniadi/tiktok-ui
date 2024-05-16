import { IoMdHome } from 'react-icons/io';
import Button from './_components/Button';
import { IoCompassOutline, IoMusicalNotes } from 'react-icons/io5';
import { BiMessageAltMinus } from 'react-icons/bi';
import { LuSearch, LuUser2 } from 'react-icons/lu';
import PPZee from './assets/pp-zee.jpeg';
import { PiShareFatFill } from 'react-icons/pi';
import { FaHeart } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';

export default function App() {
  const [isOpenCaption, setIsOpenCaption] = useState(false);
  return (
    <main className="max-w-sm border h-screen border-white mx-auto relative mb-96">
      {/* TOP */}
      <header className="flex   w-full flex-row justify-between absolute p-3 items-centers">
        <div>
          <RxHamburgerMenu size={20} />
        </div>
        <div className="flex flex-row gap-5 font-semibold">
          <button className="text-gray-200">Following</button>
          <div className="flex items-center flex-col">
            <button>For You</button>
            <div className="h-[2px] bg-white w-[70%]"></div>
          </div>
        </div>
        <div>
          <LuSearch size={20} />
        </div>
      </header>
      <div className="absolute bottom-2 w-full grid grid-cols-5 bg-black ">
        <Button isActive>
          <IoMdHome size={25} />
          Home
        </Button>
        <Button>
          <IoCompassOutline size={25} />
          Discover
        </Button>
        <Button>
          <div className="w-12 h-7 grid grid-cols-2 relative">
            <div className="bg-[#28E4DF] rounded-lg"></div>
            <div className="bg-[#EF2C53] rounded-lg"></div>
            <div className="bg-white text-xl absolute left-1/2 translate-y--1/2 -translate-x-1/2  font-semibold rounded-lg text-black w-10 flex items-center justify-center h-7">
              +
            </div>
          </div>
        </Button>
        <Button>
          <BiMessageAltMinus size={25} />
          Inbox
        </Button>
        <Button>
          <LuUser2 size={25} />
          Profile
        </Button>
      </div>
      {/* SAMPING */}
      <div className="w-full h-[92%] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAn-mzgQ1AQSLmxqFJACLgIMuzrAGpOoTBONs87Rd66g&s')] bg-cover bg-center mb-10 flex">
        <div className="w-[85%] mt-10  flex flex-col justify-end">
          <div className=" p-2 flex flex-col gap-2">
            <h3 className="font-semibold">satriawansyah</h3>
            <p
              onClick={() => setIsOpenCaption(!isOpenCaption)}
              className={`text-xs cursor-pointer ${
                isOpenCaption ? 'line-clamp-none' : 'line-clamp-2'
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              perspiciatis quis eius iste possimus? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatibus quod ad quam?
            </p>
            <div className="flex flex-row gap-2 text-xs items-center">
              <IoMusicalNotes size={15} />
              DJ RIMEX ASLI SATRIAWAN
            </div>
          </div>
        </div>
        <div className="grow flex flex-col justify-end gap-5 py-5 items-center">
          <div className="flex items-center flex-col justify-center text-xs bg-white rounded-full p-[2px]">
            <img
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRscb_O4KC0oAULqz2b2Yy9mG9p_vExQmCZQnNzue9yFA&s'
              }
              alt="foto-zee"
              className="rounded-full object-cover h-10 w-10"
            />
          </div>
          <div className="flex items-center flex-col justify-center text-xs">
            <FaHeart size={30} />
            10
          </div>
          <div className="flex items-center flex-col justify-center text-xs">
            <AiFillMessage size={30} />
            10
          </div>
          <div className="flex items-center flex-col justify-center text-xs">
            <PiShareFatFill size={35} />
            10
          </div>
          <div className="bg-black p-[6px] rounded-full w-12 h-12 animate-spin-custom">
            <img
              src={PPZee}
              alt="foto-zee"
              className="rounded-full h-full w-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
