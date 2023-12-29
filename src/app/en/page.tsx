import { data } from "../../data";
import { Header2 } from "@/sections/Header";
import { AboutEng } from "@/components/About";
import { QuestionsEng } from "@/components/Questions";
import Carusel from "@/components/carusel";
import {  GalleryEng } from "@/components/gallery/Gallery";
import { GetNews } from "@/components/getNews";
import { Suspense } from "react";
import bg from "../../../public/page-bg.jpg";
import Image from "next/image";
import { Metadata } from "next";
import { FooterEng } from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Yangiyer regional Medical Association",
  description: "Yangiyer regional medical association",
  keywords: [
    "ttb",
    "sogliqni saqlash",
    "sirdaryo",
    "Yangiyer",
    "tibbiyot",
    "salomatlik",
    "bolnitsa sirdaryo",
    "bolnitsa",
    "klinika",
    "kasalliklar",
    "viloyat",
    "infeksion",
    "Yangiyer shaxar",
    "tibbiyot birlashmasi",
    "Yangiyer shaxar tibbiyot birlashmasi",
  ],
};

export default function EnPage() {
  return (
    <>
      <Header2 />
      <Image
        className="hidden md:flex"
        width={0}
        height={0}
        src={bg}
        alt="background_picture"
      />
      <div className="flex flex-col w-full bg-gradient-to-r from-red-400  to-blue-600 p-4 py-20 sm:px-20 sm:flex-row justify-between items-center">
        <p className=" text-white">
          <span className="text-4xl font-medium">Want to contact us?</span>
          <br />
          <span className="text-lg">Contact now!</span>
        </p>
        <div className="font-medium  pt-4  dark:text-white">
          <div className=" text-white grid gap-4"></div>
          <div className="text-white grid gap-4">
            <h4 className="font-medium  pt-4 leading-none"> Reception </h4>
            <p className=" text-white text-sm text-muted-foreground">
              {data.nomer}
            </p>
          </div>
        </div>
      </div>

      <main className="flex min-h-screen max-w-auto flex-col items-center justify-between sm:p-24">
        <Carusel />
        <AboutEng />
        <GalleryEng />
        {/* <DirektorUz/> */}
        <Suspense>
          <h2 className="text-3xl py-8">News</h2>
          <GetNews />
        </Suspense>

        <QuestionsEng />

        {/* <Gallery3 /> */}

        {/* <h2 className=" pt-8 text-3xl">Meyoriy hujjatlar</h2>
        <section id="hujjatlar" className="flex flex-row justify-center gap-4 py-8">
          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1MOrcmzP1SAvMn2UugMoCwEQ9ri5ePABn/view?usp=sharing' title="Tashkilot Protokollari">
            <Image src={Protokol} alt={"Protokol"} width={100} height={100} />
          </Link>
          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1w8E1ldyYR2DIbVjiOqUQFPH3Vu_fmmYj/view?usp=drive_link' title="Tashkilot qarori">
            <Image src={Qarori} alt={"qaror"} width={100} height={100} />
          </Link>
          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/18HkgtgLjzm_hS1ovyLFgPZaeciI7YreM/view?usp=drive_link' title="Tashkilotda bor hizmatlar narxlari">
            <Image src={Narxlar} alt={"narxlar"} width={120} height={120} />
          </Link>

          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/19dPYcRh9OFXDuMQl3ZnAe9m28k6Ay3xz/view?usp=drive_link' title="Tashkilot Nizomlari">
            <Image src={Nizomi} alt={"nizomi"} width={120} height={120} />
          </Link>
          <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1kRB9rWfQ6X8ZzLOmISSBRjfrclRTwkT7/view?usp=drive_link' title="Tashkilot Klinik buyruq">
            <Image src={Klinik} alt={"Klinik"} width={120} height={120} />
          </Link>
        </section> */}
      </main>
      <FooterEng />
    </>
  );
}
