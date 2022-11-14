import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Download from "../components/Download";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Head>
        <title>wisercode</title>
      </Head>
      <Header></Header>
      <HeroSection></HeroSection>
      <About></About>
      <Download></Download>
      <Footer></Footer>
    </main>
  );
}
