import Head from "next/head";
import Layout from "../components/layout";
import MemberView from "../components/member/member-view";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Brightician</title>
        <meta name="description" content="Brightician" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <section className="text-gray-600 body-font">
            <MemberView />
          </section>
        </div>
      </section>
    </Layout>
  );
}
