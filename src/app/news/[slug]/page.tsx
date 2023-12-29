import ErrorPage from "@/app/not-found";
import { findAll } from "@/lib/firebase";
import Footer from "@/sections/Footer";
import { Header2 } from "@/sections/Header";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
export default async function Page({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  const data = await getData();
  const obj = { ...data }.props;
  const filtered: any[] = obj.filter((item) => item.id == params.slug);
  //console.log(obj.filter((item) => item.id == params.slug))
  if (params.slug.length < 36) {
    // This will activate the closest `error.js` Error Boundary
    return <ErrorPage />;
  }
  console.log(filtered);
  return (
    <>
      <Header2 />

      <div className="flex flex-col justify-center content-center text-center p-2">
        <Link className="p-2 hover:text-blue-400" href="/">
          <h2>&#8592;Ortga qaytish</h2>
        </Link>

        <div>Id: {params.slug}</div>
        <br />
        <Image
          className="object-contain h-auto w-auto sm:p-16"
          src={filtered[0].imageUrl}
          width={450}
          height={450}
          alt={"yangiliklar_rasmlari"}
        />
        <p className="text-blue-400 p-2">{filtered[0].date}</p>
        {/* <p>{filtered[0].id}</p> */}
        <p className="p-2">{filtered[0].name}</p>
        <p className="p-2">{filtered[0].message}</p>
      </div>

      <Footer />
    </>
  );
}

// interface Blog {
//     date: string,
//     id: string,
//     imageUrl: string,
//     massage: string,
//     name: string,
//     uuid: string
// }

async function getData() {
  const ress = await findAll();
  return { props: [...ress] };
}
