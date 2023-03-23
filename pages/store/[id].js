import Layout from "<..>/components/layout";
import Product from "<..>/components/product";
import { convertToPath, getItemData } from "<..>/lib/utils";

export default function ProductPage({ productInfo }) {
  return (
    <Layout>
      <Product item={productInfo.data} showAs="Page" />
    </Layout>
  );
}
//checkpoint
export async function getStaticPaths() {
  //call an external API
  const request = await fetch("http://localhost:3000/api/items");
  const items = await request.json();
  // Get the paths we want to pre-render based on posts
  const ids = items.map((item) => ({
    params: { id: convertToPath(item.title) },
  }));
  const paths = ids;
  // We'll pre-render only these paths at build time.
  return {
    paths: ids,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const id = params.id;
  const product = await getItemData(id);
  return {
    props: {
      productInfo: product,
    },
  };
}
