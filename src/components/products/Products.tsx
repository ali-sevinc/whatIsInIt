import { useParams } from "react-router-dom";
import ProductsItem from "./ProductsItem";

type PropsType = {
  products: {
    code: string;
    image_front_small_url: string;
    product_name: string;
    quantity: string;
  }[];
};

export default function Products({ products }: PropsType) {
  const params = useParams();

  return (
    <div className="max-w-4xl mx-auto pt-12">
      <h2 className="text-center text-2xl text-amber-700">
        Searched <b className="uppercase">"{params?.query}"</b> results
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto gap-8 px-4 py-8 items-center">
        {products.map((product) => (
          <ProductsItem
            key={product.code}
            code={product.code}
            image={product.image_front_small_url}
            name={product.product_name}
            quantity={product.quantity}
          />
        ))}
      </ul>
    </div>
  );
}
