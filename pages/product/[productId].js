import { useRouter } from "next/router";

function ProductDetails() {
    const router = useRouter();
    const productid = router.query.productId;


  return <h1>Product Details page {productid}</h1>;
}

export default ProductDetails;
