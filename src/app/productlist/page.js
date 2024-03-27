import ProductButton from "./ProductButton";

async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

export default async function Products() {
    let allProducts = await productList();
    // console.log(allProducts)
  return (
    <div>
      <h1>Product List</h1>
      {allProducts.map((product) => (
        <div key={product.id}>
          <p>Name: {product.title}</p>
          <p>Price: {product.price}</p>
          {/* <button onClick={alert("Hello World")}>Click Me</button>  throw client component error */}

          {/* creact client component and import in server component */}
          <ProductButton price={product.price}/> 
          <br />
        </div>
      ))}
    </div>
  );
}
