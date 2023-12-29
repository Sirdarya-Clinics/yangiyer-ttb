"use client";
import { data } from "@/data";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className=" dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="flex justify-center py-8">
            <ul className="flex justify-end  items-end mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#about" className="mr-4 hover:underline md:mr-6 ">
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a href="#rahbariyat" className="mr-4 hover:underline md:mr-6">
                  Rahbariyat
                </a>
              </li>

              <li>
                <a href="#kontaktlar" className="hover:underline">
                  Kontaktlar
                </a>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
            &copy; {new Date().getFullYear()} Barcha huquqlar himoyalangan.
          </span>
        </div>
      </footer>
    </>
  );
}

export function FooterUzb() {
  return (
    <>
      <div id="footer" className="flex items-center justify-center py-8">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              src="https://maps.google.com/maps?q=40.2248884,69.1303996&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              style={{ width: 790, height: 500 }}
            ></iframe>
            <style>
              {`
      .mapouter{position:relative;height:400px;min-width:375px;background:#fff;}
      `}
            </style>

            <style>{`.gmap_canvas{overflow:hidden;height:400px;min-width:375px}.gmap_canvas iframe{position:relative;z-index:2}`}</style>
          </div>
        </div>
      </div>

      <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800 pt-8">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-center flex-col ">
            <ul className="flex justify-end  items-end mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#about" className="mr-4 hover:underline md:mr-6 ">
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a href="#rahbariyat" className="mr-4 hover:underline md:mr-6">
                  Rahbariyat
                </a>
              </li>
              <li>
                <a href="#hujjatlar" className="mr-4 hover:underline md:mr-6 ">
                  Hizmatlar narxlari
                </a>
              </li>
            </ul>
            <div className="flex flex-col ">
              <p className="text-gray-500">{data.uz_address}</p>
              ____________________
              <p className="text-gray-500">
                Qabulxona : {data.nomer}
                <br />
                E-pochta: {data.email}
                <br />
              </p>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="flex items-center justify-center">
            <span className="text-sm text-gray-500 text-center dark:text-gray-400">
              &copy; {new Date().getFullYear()} Barcha huquqlar himoyalangan.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export function FooterRu() {
  return (
    <>
      <div id="footer" className="flex items-center justify-center py-8">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              src="https://maps.google.com/maps?q=40.2248884,69.1303996&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              style={{ width: 790, height: 500 }}
            ></iframe>
            <style>
              {`
      .mapouter{position:relative;height:400px;min-width:375px;background:#fff;}
      `}
            </style>

            <style>{`.gmap_canvas{overflow:hidden;height:400px;min-width:375px}.gmap_canvas iframe{position:relative;z-index:2}`}</style>
          </div>
        </div>
      </div>

      <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800 pt-8">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-center flex-col ">
            <ul className="flex justify-end  items-end mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#about" className="mr-4 hover:underline md:mr-6 ">
                  О нас
                </a>
              </li>
              <li>
                <a href="#rahbariyat" className="mr-4 hover:underline md:mr-6">
                  Руководство
                </a>
              </li>
              <li>
                <a href="#hujjatlar" className="mr-4 hover:underline md:mr-6 ">
                  Цены на услуги
                </a>
              </li>
            </ul>
            <div className="flex flex-col ">
              <p className="text-gray-500">{data.ru_address}</p>
              ____________________
              <p className="text-gray-500">
                Прием : {data.nomer}
                <br />
                Электронная почта: {data.email}
                <br />
              </p>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="flex items-center justify-center">
            <span className="text-sm text-gray-500 text-center dark:text-gray-400">
              &copy; {new Date().getFullYear()} Все права защищены.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export function FooterEng() {
  return (
    <>
      <div id="footer" className="flex items-center justify-center py-8">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              src="https://maps.google.com/maps?q=40.2248884,69.1303996&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              style={{ width: 790, height: 500 }}
            ></iframe>
            <style>
              {`
      .mapouter{position:relative;height:400px;min-width:375px;background:#fff;}
      `}
            </style>

            <style>{`.gmap_canvas{overflow:hidden;height:400px;min-width:375px}.gmap_canvas iframe{position:relative;z-index:2}`}</style>
          </div>
        </div>
      </div>

      <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800 pt-8">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-center flex-col ">
            <ul className="flex justify-end  items-end mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#about" className="mr-4 hover:underline md:mr-6 ">
                  About Us
                </a>
              </li>
              <li>
                <a href="#rahbariyat" className="mr-4 hover:underline md:mr-6">
                  Doctors
                </a>
              </li>
              <li>
                <a href="#hujjatlar" className="mr-4 hover:underline md:mr-6 ">
                  Prices of services
                </a>
              </li>
            </ul>
            <div className="flex flex-col ">
              <p className="text-gray-500">{data.eng_address}</p>
              ____________________
              <p className="text-gray-500">
                Reception : {data.nomer}
                <br />
                E-mail: {data.email}
                <br />
              </p>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="flex items-center justify-center">
            <span className="text-sm text-gray-500 text-center dark:text-gray-400">
              &copy; {new Date().getFullYear()} All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
