'use client';

import { toast } from "react-toastify";
import RoomSection from "./_homepart/RoomSection";
import DateSection from "@/components/date-section";

export default function Home() {

  const showToast = () => {
    toast.success('Selamat Datang')
  }

  return (
    <>
      <DateSection/>
      {/* <button onClick={showToast} className="bg-primary text-white px-4 py-2">show toas</button> */}
      
      <RoomSection/>
      <section className="py-8 bg-[#F4F7FE]">
        <div className="container mx-auto">
          <div  className="p-12 bg-primary rounded-lg flex justify-between items-center flex-wrap gap-4">
            <div className="">
              <p className="text-white font-semibold text-2xl mb-3">
                Sekarang bisa lebih tenang karena <br/> kamu
                bisa booking secara online
              </p>
              <p className="text-white">Selain anti ribet dan gak takut kehabisan kamu juga bisa dapet penawaran spesial</p>
            </div>
            <div>
              <button className="bg-yellow-400 text-burem-500 font-semibold px-6 py-3 rounded-lg hover:bg-kuneng/80">Cek Ketersediaan</button>          
            </div>
          </div>
        </div>
      </section>

      {/* <InfoSection/> */}

      {/* <div className="bg-[#F4F7FE]">
        <section className="container mx-auto pb-12">
          <div className="cursor-pointer">
            <img src="/assets/img/playstore.png" className="w-full" />
          </div>
        </section>
      </div> */}
    </>
  );
}
