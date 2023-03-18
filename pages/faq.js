import Layout from "<..>/components/layout";
import style from "<..>/styles/faq.module.css";
export default function FAQ() {
  return (
    <Layout>
      <div className={style.faq}>
        <h2>FAQ</h2>
        <div>
          <h3>What is this?</h3>
          <p>This is a demo site for a webshop.</p>
          <h3>How do I use it?</h3>
          <p>1. Click on the &quot;Shop&quot; link in the menu to see the products.</p>
          <p>2. Click on a product to see more details.</p>
          <p>3. Click on the &quot;Add to cart&quot; button to add the product to your cart.</p>
          <p>4. Click on the &quot;Cart&quot; link in the menu to see your cart.</p>
        </div>
      </div>
    </Layout>
  );
}
