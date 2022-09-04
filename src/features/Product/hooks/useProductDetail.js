import productApi from "api/productApi";
import { useEffect } from "react";
import { useState } from "react";

export default function useProductDetail(productID) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const result = await productApi.get(productID);
        setProduct(result);
      } catch (error) {
        console.log("Fail to fetch product", error);
      }
      setLoading(false);
    })();
  }, [productID]);

  return { product, loading };
}
