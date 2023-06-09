import Layout from "<..>/components/layout";
import Product from "<..>/components/product";
import { getItems } from "<..>/services/itemService.js";
import styleItems from "../../styles/product.module.css";

export default function Index({ items }) {
  return (
    <Layout>
      <h1>Store</h1>
      <div className={styleItems.items}>
        {items && items.map((item) => <Product item={item} showAs="default" key={item.id} />)}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getItems();

  return {
    props: {
      items: res,
    },
  };
}
