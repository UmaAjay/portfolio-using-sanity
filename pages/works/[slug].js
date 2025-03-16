import React from "react";
import Head from "next/head";
import { client, urlFor } from "../../client";

/* Layout */
import { ProjectDetailPageLayout } from "../../Layouts";

const ProjectDetail = ({ project, slug }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta name="title" content={project?.title} />
        <meta name="description" content={project?.description} />
        <meta
          name="keywords"
          content="Uma Ajay Kumar Reddy P S, Uma Ajay, full-stack development, blockchain, AI, MERN, MEAN, MENN, Solidity, web development, software engineering, cloud computing, fintech, automation"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Uma Ajay Kumar Reddy P S" />
        <meta property="og:locale" content="en-US" />

        {/* Primary Meta Tags */}
        <title>{project?.title} | Project Showcase</title>
        <meta name="title" content={project?.title} />
        <meta name="description" content={project?.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://umaajay.netlify.app/projects/${slug}`}
        />
        <meta property="og:title" content={project?.title} />
        <meta property="og:description" content={project?.description} />
        <meta property="og:image" content={urlFor(project?.imgUrl)} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://umaajay.netlify.app/projects/${slug}`}
        />
        <meta property="twitter:title" content={project?.title} />
        <meta property="twitter:description" content={project?.description} />
        <meta property="twitter:image" content={urlFor(project?.imgUrl)} />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>{project?.title} | Project Showcase</title>
      </Head>
      <main>
        <ProjectDetailPageLayout data={project} slug={slug} />
      </main>
    </>
  );
};

export default ProjectDetail;

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const project = await client.fetch(
    `
      *[_type == "project" && slug.current == $slug][0]
    `,
    { slug }
  );

  return {
    props: {
      project,
      slug,
    },
    revalidate: 10,
  };
}