import Meta from 'components/meta'
import Head from 'next/head'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Image from 'next/image'
import eyecatch from 'images/about.jpg'

export default function About() {
  return (
    <Container>
      <Meta
        pageTitle="About"
        pageDesc="About page"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      
      <Head>
        <title>アバウト</title>
      </Head>
      
      <Hero title="About" subtitle="About page" />

      {/* <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="{min-width: 1152px} 1152px, 100vw"
          priority
          placeholder='blur'
        />
      </figure> */}
      
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              Hi! I am Toma, a front-end web developer in Vancouver, Canada. I moved to Canada in 2018. After graduating from British Columbia Institute of Technology (BCIT), I started to work as a web developer at a design agency in Vancouver.
            </p>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>

      </TwoColumn>
    </Container>
  )
}