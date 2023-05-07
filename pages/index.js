import Meta from "components/meta";
import { getAllPosts } from "lib/api";
import Container from "components/container";
import Hero from "@/components/hero";
import Posts from "components/posts";
import Pagination from "components/pagination";
import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "lib/constants";

export default function Home({ posts }) {
  return (
    <Container>
      <Meta pageTitle="Toma's Blog" />
      <Hero title="Blog" subtitle="Toma's Blog" />

      <Posts posts={posts} />
      {/* <Pagination nextUrl="/blog" nextText="Read more" /> */}
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  return {
    props: {
      posts: posts,
    },
  };
}
