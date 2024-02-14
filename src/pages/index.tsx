import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from '../components/home/index.js';
import Projects from '../components/projects/index.js';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
}
