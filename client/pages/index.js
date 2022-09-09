import Head from 'next/head'
import Content from '../components/Content'
import MainSearch from '../components/Mainsearch'
import SearchKeywords from "../components/SearchKeywords.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mallu Nighandu | English-Malayalam Online Dictionary</title>
        <meta name="description" content="Mallu Nighandu is an English-Malayalam online dictionary website that mainly provides the Malayalam meaning of English words." />
        <meta name="keywords" content="english malayalam dictionary, english to malayalam dictionary, mallu nighandu, enlgish word meaning in malayalam, english to malayalam meaning translation" />
        <link rel="image_src" href="/mallu-nighandu-logo.png" />
        <meta property="og:image" content="/mallu-nighandu-logo.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <MainSearch data={SearchKeywords} />
      <Content/>
    </div>
  )
}
