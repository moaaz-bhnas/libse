import CategoriesGrid from "../containers/categoriesGrid/CategoriesGrid";
import Layout from "../containers/layout/Layout";
import { connectToDatabase } from "../db";

export const getServerSideProps = async (ctx) => {
  const { db } = await connectToDatabase();

  return {
    props: {},
  };
};

export default function Home({}) {
  return (
    <Layout>
      <CategoriesGrid />
    </Layout>
  );
}
