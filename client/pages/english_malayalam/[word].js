import Result from "../../components/Result"
import axios from 'axios'
import { useRouter } from 'next/router'


const WordPage = ({data}) => {
  const router = useRouter()
  const { word } = router.query
  return (
    <Result word={word} data={data} />
  )
}

export async function getServerSideProps({ params }) {
  // Fetch data from DB
  const res = await axios.get("http://localhost:5000/api/search/"+params.word)
  const data = await res.data

  // Pass data to the page via props
  return { props: { data } }
}

export default WordPage