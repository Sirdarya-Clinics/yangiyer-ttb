import Image from "next/image";
import { Suspense } from "react";
import Direktor from "../../../public/direktor.jpg";

// const data = {
//   ru_name: "Қуватова Гулнора Улуғовна ",
//   uz_sh: "Bosh shifokor ",
//   uz_q: "Qabul vaqti 8:00-18:00",
//   uz_name: "Quvatova Gulnora Ulugovna ",
//   ru_sh: "Главный врач ",
//   ru_q: "Qabul vaqti 8:00-18:00",
//   eng_name: "Kuvatova Gulnora Ulugovna ",
//   eng_sh: "Chief physician",
//   eng_q: "Reception hours are 8:00-18:00",
// }
export function GalleryUz() {
  return (
    <>
      <div
        id="About"
        className="px-3 md:lg:xl:px-40 sm:p-0  border-t border-b py-20 bg-opacity-10"
      >
        <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 sm:grid-cols-2 group ">
          <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Mamnun bemorlar
            </p>
            {/* <p className=" hidden sm:flex mt-2 text-sm text-slate-500">Team BrainEdge education is a bunch of highly focused, energetic
                            set of people.</p> */}
          </div>

          <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Malakali mutaxassislar
            </p>
            {/* <p className="  hidden sm:flex mt-2 text-sm text-slate-500">Know where you stand and what next to do to succeed .</p> */}
          </div>

          <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Chet el fuqorolariga hizmat
            </p>
            {/* <p className=" hidden sm:flex mt-2 text-sm text-slate-500">Professional Advice for higher education abroad and select the
                            top institutions worldwide.</p> */}
          </div>

          <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Ish tajribasi
            </p>
            {/* <p className=" hidden sm:flex mt-2 text-sm text-slate-500">Yet another year ! Yet another jewel in our crown!</p> */}
          </div>

          <div className="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Mas&apos;ulliyatli yondashuv
            </p>
            {/* <p className=" hidden sm:flex mt-2 text-sm text-slate-500">Get Topic-Wise Tests, Section- Wise and mock tests for your
                            preparation.</p> */}
          </div>

          <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Xavfsizlik
            </p>
            <p className="  hidden sm:flex mt-2 text-sm text-slate-500"></p>
          </div>
        </div>
      </div>
    </>
  );
}

export function GalleryEng() {
  return (
    <>
      <div
        id="About"
        className="px-3 md:lg:xl:px-40 sm:p-0  border-t border-b py-20 bg-opacity-10"
      >
        <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 sm:grid-cols-2 group ">
          <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Satisfied patients
            </p>
            {/* <p className=" hidden sm:flex mt-2 text-sm text-slate-500">Team BrainEdge education is a bunch of highly focused, energetic
                            set of people.</p> */}
          </div>

          <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Qualified specialists
            </p>
            {/* <p className="  hidden sm:flex mt-2 text-sm text-slate-500">Know where you stand and what next to do to succeed .</p> */}
          </div>

          <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Service for foreign citizens
            </p>
            {/* <p className=" hidden sm:flex mt-2 text-sm text-slate-500">Professional Advice for higher education abroad and select the
                            top institutions worldwide.</p> */}
          </div>

          <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Experience
            </p>
            {/* <p className=" hidden sm:flex mt-2 text-sm text-slate-500">Yet another year ! Yet another jewel in our crown!</p> */}
          </div>

          <div className="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Responsible approach
            </p>
            {/* <p className=" hidden sm:flex mt-2 text-sm text-slate-500">Get Topic-Wise Tests, Section- Wise and mock tests for your
                            preparation.</p> */}
          </div>

          <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">Safety</p>
            <p className="  hidden sm:flex mt-2 text-sm text-slate-500"></p>
          </div>
        </div>
      </div>
    </>
  );
}

export function GalleryRu() {
  return (
    <>
      <div
        id="About"
        className="px-3 md:lg:xl:px-40 sm:p-0  border-t border-b py-20 bg-opacity-10"
      >
        <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 sm:grid-cols-2 group ">
          <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Довольные пациенты
            </p>
            {/* <p className=" hidden sm:flex mt-2 text-sm text-slate-500">Team BrainEdge education is a bunch of highly focused, energetic
                            set of people.</p> */}
          </div>

          <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Квалифицированные специалисты
            </p>
            {/* <p className="  hidden sm:flex mt-2 text-sm text-slate-500">Know where you stand and what next to do to succeed .</p> */}
          </div>

          <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Обслуживание иностранных граждан
            </p>
            {/* <p className=" hidden sm:flex mt-2 text-sm text-slate-500">Professional Advice for higher education abroad and select the
                            top institutions worldwide.</p> */}
          </div>

          <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Опыт работы
            </p>
            {/* <p className=" hidden sm:flex mt-2 text-sm text-slate-500">Yet another year ! Yet another jewel in our crown!</p> */}
          </div>

          <div className="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Ответственный подход
            </p>
            {/* <p className=" hidden sm:flex mt-2 text-sm text-slate-500">Get Topic-Wise Tests, Section- Wise and mock tests for your
                            preparation.</p> */}
          </div>

          <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Безопасность
            </p>
            <p className="  hidden sm:flex mt-2 text-sm text-slate-500"></p>
          </div>
        </div>
      </div>
    </>
  );
}

// export function DirektorRu() {
//   return (
//     <>
//       <Suspense>
//         <section className="flex flex-col justify-center content-center text-center">
//           <h2 id="rahbariyat" className="text-3xl py-8">
//             Rahbariyat
//           </h2>
//           {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 max-w-[720px]"> */}
//           <div className="px-2 pt-4">
//             <div className="flex flex-col justify-center content-center text-center">
//               <Image
//                 className="hover:opacity-75 ml-6"
//                 src={Direktor}
//                 alt={""}
//                 width={200}
//                 height={200}
//               />
//               <h3 className=" font-semibold">{data.ru_name}</h3>
//               <p className="text-gray-500">{data.ru_sh}</p>
//               {/* <p className="text-gray-500">{data.ru_q}</p> */}
//             </div>
//           </div>
//         </section>
//       </Suspense>
//     </>
//   );
// }

// export function DirektorEng() {
//   return (
//     <>
//       <Suspense>
//         <section className="flex flex-col justify-center content-center text-center">
//           <h2 id="rahbariyat" className="text-3xl py-8">
//             Rahbariyat
//           </h2>
//           {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 max-w-[720px]"> */}
//           <div className="px-2 pt-4">
//             <div className="flex flex-col justify-center content-center text-center">
//               <Image
//                 className="hover:opacity-75 ml-6"
//                 src={Direktor}
//                 alt={""}
//                 width={200}
//                 height={200}
//               />
//               <h3 className=" font-semibold">{data.eng_name}</h3>
//               <p className="text-gray-500">{data.eng_sh}</p>
//               {/* <p className="text-gray-500">{data.eng_q}</p> */}
//             </div>
//           </div>
//         </section>
//       </Suspense>
//     </>
//   );
// }

// export function DirektorUz() {
//   return (
//     <>
//       <Suspense>
//         <section className="flex flex-col justify-center content-center text-center">
//           <h2 id="rahbariyat" className="text-3xl py-8">
//             Rahbariyat
//           </h2>
//           {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 max-w-[720px]"> */}
//           <div className="px-2 pt-4">
//             <div className="flex flex-col justify-center content-center text-center">
//               <Image
//                 className="hover:opacity-75 ml-6"
//                 src={Direktor}
//                 alt={""}
//                 width={200}
//                 height={200}
//               />
//               <h3 className=" font-semibold">{data.uz_name}</h3>
//               <p className="text-gray-500">{data.uz_sh}</p>
//               {/* <p className="text-gray-500">{data.eng_q}</p> */}
//             </div>
//           </div>
//         </section>
//       </Suspense>
//     </>
//   );
// }