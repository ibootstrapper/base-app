import type { NextPage } from "next";
import Head from "next/head";
import Main from "../components/areas/Main";
import Navbar from "../components/areas/Navbar";
import LayoutGrid from "../components/LayoutGrid";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Base App</title>
        <meta name="description" content="Base App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-gray-600 font-body">
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-1 md:flex md:justify-end">
            <Navbar></Navbar>
          </div>
          <main className="px-16 py-6 md:col-span-2 bg-gray-100">
            <Main />
          </main>
        </div>
      </div>
      <LayoutGrid></LayoutGrid>
    </div>
  );
};

export default Home;
