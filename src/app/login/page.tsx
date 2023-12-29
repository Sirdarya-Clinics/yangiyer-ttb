import { Metadata } from "next";
import LoginUI from "./loginUI";
import { Header2 } from "../../sections/Header";

export const metadata: Metadata = {
  title: "Login sahifasi",
  description: "Login sahifasi",
  // other metadata
};

export default function LoginPage() {
  return (
    <>
      <Header2 />
      <LoginUI />
    </>
  );
}
