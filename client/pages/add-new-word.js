import AddNewWord from "../components/AddNewWord/AddNewWord";
import Head from "next/head";

const AddNewWordPage = () => {
  return (
    <>
      <Head>
        <title>Add New Word - Mallu Nighandu</title>
        <meta name="description" content="Mallu Nighandu allows users to edit and update the meaning of words and add new words, here is you can add new word." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AddNewWord />
    </>
  );
};

export default AddNewWordPage;