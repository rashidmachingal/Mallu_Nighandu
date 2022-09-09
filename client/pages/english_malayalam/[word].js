import Result from "../../components/Result"
import axios from 'axios'
import { useRouter } from 'next/router'
import SearchKeywords from "../../components/SearchKeywords.json";
import { useEffect, useState } from "react";
import Head from 'next/head'

const WordPage = ({data}) => {
  const [isUpdated, setIsUpdated] = useState(false)
  const router = useRouter()
  const { word } = router.query

  useEffect(() => {
    const refreshData = () => {
      router.replace(router.asPath);
    }
    refreshData()
  }, [isUpdated])
  
  
  return (
    <>
    <Head>
      <title>{word} | Malayalam Meaning of {word} - Mallu Nighandu</title>
      <meta name="description" content={`What is ${word} meaning or definition in Malayalam?`} />
      <meta name="keywords" content={`${word} meaning in Malayalam, Malayalam meaning of ${word}, ${word} enna vakkinte artham, ${word} Malayalam meannig`} />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Result 
     word={word} 
     data={data} 
     searchKeywords={SearchKeywords} 
     setIsUpdated={setIsUpdated}
     isUpdated={isUpdated}/>
    </>
  )
}

export async function getServerSideProps({ params }) {
  // Fetch data from DB
  const res = await axios.get("http://localhost:5000/api/search/"+params.word)
  const data = await res.data

  if(data[0].status === "notfound"){
    return {
      redirect: {
        destination: `/en_ml/${data[0].search_word}`,
        permanent: false,
      },
    };
  }

  // Pass data to the page via props
  return { props: { data } }
}

export default WordPage