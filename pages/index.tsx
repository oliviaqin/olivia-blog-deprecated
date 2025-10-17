import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Olivia Website</title>
        <meta name="description" content="Olivia Qin's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-16 container w-2/3 sm:w-1/2 mx-auto h-48 lg:h-96">
        <div className="flex-col justify-center mt-16 lg:mt-16">
          <p className="typewriter-1 text-sm lg:text-xl playfair-display">
            Welcome to my library.
          </p>
          <p className="typewriter-2 text-sm lg:text-xl playfair-display">
            My name is Olivia and I work as a <strong> swe </strong> in nyc.
          </p>
        </div>
      </main>
    </>
  );
}

