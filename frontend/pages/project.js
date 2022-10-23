import Layout from "../components/layout";
import Step from "../components/about/step";
import Head from "next/head";
import ProjectView from "../components/project/project-view";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Brightician" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <ProjectView />
        </div>
      </section>
    </Layout>
  );
}
