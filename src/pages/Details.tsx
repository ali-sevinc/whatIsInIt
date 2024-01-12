import {
  LoaderFunctionArgs,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import ProductDetail, {
  NutrimentsType,
} from "../components/products/ProductDetail";
import Loader from "../components/ui/Loader";

type IngredientsType = {
  id: string;
  percent_estimate: string;
  vegan: string;
  vegetarian: string;
};
type NutrientLevel = {
  fat: string;
  salt: string;
  "saturated-fat": string;
  sugars: string;
};
type ProductType = {
  allergens: string;
  ingredients: IngredientsType[];
  image_front_url: string;
  product_name: string;
  nutrient_levels: NutrientLevel;
  quantity: string;
  link: string;
  nutriments: NutrimentsType;
}[];
export default function Details() {
  const { product } = useLoaderData() as { product: ProductType };
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;

  return <ProductDetail product={product[0]} />;
}

export async function loader({ params }: LoaderFunctionArgs) {
  const { code } = params;

  const res = await fetch(
    "https://world.openfoodfacts.org/api/v2/search?code=" + code
  );
  const data = await res.json();

  const product: ProductType = data.products;
  return { product };
}
