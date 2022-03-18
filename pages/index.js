import Head from "next/head";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner/banner";
import NavBar from "../components/nav/navbar";
import Card from "../components/card/card";
import SectionCard from "../components/card/section-cards";
import { getVideos, getPopularVideos } from "../lib/videos";
import { startFetchMyQuery } from "../lib/db/hasura";

export async function getServerSideProps(context) {
  const disneyVideos = await getVideos("disney trailer");
  const productivityVideos = await getVideos("productivity");
  const travelVideos = await getVideos("travel");
  const popularVideos = await getPopularVideos("disney trailer");
  return {
    props: { disneyVideos, travelVideos, productivityVideos, popularVideos }, // will be passed to the page component as props
  };
}

export default function Home({
  disneyVideos,
  travelVideos,
  productivityVideos,
  popularVideos,
}) {
  // console.log(disneyVideos);
  startFetchMyQuery();
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <NavBar username="test@gmail.com" />
        <Banner
          videoId="4zH5iYM4wJo"
          title="Clifford the Big Red Dog"
          subTitle="big red dog"
          imgUrl="/static/clifford.webp"
        />
        <div className={styles.sectionWrapper}>
          <SectionCard title="Disney" videos={disneyVideos} size="large" />
          <SectionCard title="Travel" videos={travelVideos} size="small" />
          <SectionCard
            title="Productivity"
            videos={productivityVideos}
            size="medium"
          />
          <SectionCard title="Popular" videos={popularVideos} size="small" />
        </div>
      </div>
    </div>
  );
}
