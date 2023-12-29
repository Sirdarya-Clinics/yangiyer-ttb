import Image from "next/image";
import Gerb from "../../public/logo.svg";
export default function Logo() {
    return(
        <>
            <Image src={Gerb} alt={""} width={60} height={60} />
        </>
    )
}