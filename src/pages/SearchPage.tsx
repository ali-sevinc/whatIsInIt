import {
  LoaderFunctionArgs,
  useLoaderData,
  useNavigation,
  useParams,
} from "react-router-dom";
import Products from "../components/products/Products";
import Fallback from "../components/ui/Fallback";
import Loader from "../components/ui/Loader";
const baseUrl = "https://world.openfoodfacts.org/api/v2/search?brands_tags=";
const fields =
  "&page=1&fields=code,product_name,image_front_small_url,quantity";

type ProductsType = {
  code: string;
  image_front_small_url: string;
  product_name: string;
  quantity: string;
}[];

export default function SearchPage() {
  const { products } = useLoaderData() as { products: ProductsType };
  const { query } = useParams();

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  if (isLoading) return <Loader />;

  if (!products.length)
    return (
      <Fallback
        title="Products not found"
        message={`"${query}" could not found. Please make sure enter a correct product name.`}
      />
    );
  // console.log(products);

  return <Products products={products} />;
}

export async function loader({ params }: LoaderFunctionArgs) {
  const { query } = params;

  if (!query || query?.length < 3) return { products: [] };
  const res = await fetch(baseUrl + query + fields);
  const data = await res.json();
  const products: ProductsType = data.products;
  // console.log(products);

  return { products };
}
