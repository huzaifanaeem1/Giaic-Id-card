import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-slate-200 p-12 rounded-lg max-w-4xl w-full flex items-center justify-center border-4 border-sky-300">
          {/* Background image  */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[350px]  max-h-[400px]">
              <Image
                src="/images/kamran-tessori.jpg"
                alt="background image"
                width={400}
                height={300}
                objectFit="cover"
                className="opacity-20" />
            </div>
          </div>



          {/* left section */}
          <div className="w-2/3 pr-4 pt-16 relative z-10">
            {/* logo */}
            <img
              src="/images/goverment.png"
              alt="Logo"
              className="absolute top-[-24px] left-0 w-18 h-20 z-10"
            />

            <p className="mb-2">
              <span className="text-sky-500"><strong>Name: </strong></span>
              <span className="text-black font-bold">Huzaifa Naeem</span>
            </p>
            <p className="mb-2">
              <span className="text-sky-500"><strong>Roll No: </strong></span>
              <span className="text-black font-bold">00331828</span>
            </p>
            <p className="mb-2">
              <span className="text-sky-500"><strong>Distance learning: </strong></span>
              <span className="text-black font-bold">No</span>
            </p>
            <p className="mb-2">
              <span className="text-sky-500"><strong>City: </strong></span>
              <span className="text-black font-bold">Karachi</span>
            </p>
            <p className="mb-2">
              <span className="text-sky-500"><strong>Center: </strong></span>
              <span className="text-black font-bold">Governor House Karachi</span>
            </p>
            <p className="mb-2">
              <span className="text-sky-500"><strong>Campus: </strong></span>
              <span className="text-black font-bold">Main</span>
            </p>
            <p className="mb-2">
              <span className="text-sky-500"><strong>Days/Time: </strong></span>
              <span className="text-black font-bold">Saturday-09:00 AM - 12:00 PM</span>
            </p>
            <p className="mb-2">
              <span className="text-sky-500"><strong>Batch: </strong></span>
              <span className="text-black font-bold">1</span>
            </p>


            {/* Button Section */}
            <div className="flex-col felx mt-4">
              <button className="w-full p-1 rounded-lg border border-gray-300 relative bg-blue-900 text-white items-center justify-center flex">
                <span className="absolute inset-0 bg-slate-500"
                  style={{ width: '50%' }}>
                </span>
                <span className="relative z-10 font-bold"> Q1 & WMD</span>
              </button>
            </div>
          </div>
          {/* right section */}
          <div className="w-1/3 text-center relative z-10">
            <Image
              src="/images/me.jpeg"
              alt="profile-image"
              width={800}
              height={800}
              className="rounded-lg mb-6 w-full border border-sky-500"/>
            <p className="text-sky-500 font-bold border-t-2 border-t-slate-400 pt-2 mt-10 text-2xl">Authorized Signature</p>
          </div>






        </div>
      </div>
    </div>
  )
};
