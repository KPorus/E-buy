import Image from "next/image";

import Rating from "../rating";
export const ProductCard = ({product}:any) => {
  // console.log(product);
  return (
    <div id="ts--product-card" >
      {/* {products} */}
      {/* {products.map((product, index) => ( */}
        <div className="flex items-center flex-col">
          <div className="w-[480px] h-[480px] overflow-hidden">
            <Image src={product.image} alt={product.title} width={480} height={480}/>
          </div>
          <div className="grid grid-cols-1 justify-around w-9/12 gap-2">
            <div className="flex justify-between">
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
            <Rating value={product.rating} />
          </div>
        </div>
      {/* ))} */}
    </div>
  );
};

export default ProductCard;
