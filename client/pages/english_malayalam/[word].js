import Result from "../../components/Result"
import axios from 'axios'
import { useRouter } from 'next/router'
import SearchKeywords from "../../components/SearchKeywords.json";
import { useEffect, useState } from "react";


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
    <Result 
     word={word} 
     data={data} 
     searchKeywords={SearchKeywords} 
     setIsUpdated={setIsUpdated}
     isUpdated={isUpdated} 
    />
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