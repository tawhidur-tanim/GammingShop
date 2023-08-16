import React, { useEffect, useRef, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const [ProductList, setProductList] = useState<string[]>([]);

  const disconnect = () => console.log("Disconnecting");

  useEffect(() => {
    console.log("Fetching products using category - " + category);
    setProductList(["Clothing", "Kitchen"]);

    if (nameRef.current) {
      nameRef.current.value = category;
    }

    return () => disconnect();
  }, [category]);

  return (
    <div>
      <input type="text" ref={nameRef} id="name" className="form-control" />
    </div>
  );
};

export default ProductList;
