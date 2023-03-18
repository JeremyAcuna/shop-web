import Product from "<..>/components/product";
import { getLatestItems } from "<..>/services/itemService";
import { Inter } from "next/font/google";
import Layout from "../components/layout";
import style from "../styles/Home.module.css";
import styleProduct from "../styles/product.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ items }) {
  return (
    <Layout title="Welcome">
      <div className={style.banner}>
        <div className={style.bannerBackground}>
          <div className={style.bannerInfo}>
            <h2>Shop the Summer 2023 collection</h2>
            <p>Get the latest trends and styles</p>
          </div>
        </div>
      </div>

      <h3 className={style.latestProducts}>Latest Products:</h3>
      <div className={styleProduct.items}>
        {items && items.map((item) => <Product item={item} showAs="default" key={item.id} />)}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getLatestItems();

  return {
    props: {
      items: res,
    },
  };
}
