import { useNavigate } from "react-router-dom";
import Cart from "../ui/Cart";
import NutrientLevels from "../ui/NutrientLevels";
import NutitionTable from "./NutitionTable";

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
type NutrimentsType = {
  energy: number;
  "energy-kcal": number;
  "energy-kcal_100g": number;
  "energy-kcal_serving": string;
  energy_serving: string | number;
  fat: string | number;
  fat_100g: string | number;
  fat_serving: string | number;
  sugars_100g: string | number;
  sugars_serving: string | number;
  carbohydrates: string | number;
  carbohydrates_100g: string | number;
  carbohydrates_serving: string | number;
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
};
type PropsType = { product: ProductType };

export default function ProductDetail({ product }: PropsType) {
  const navigate = useNavigate();

  // console.log(product);
  const allergents = product.allergens.split(",").map((al) => {
    const index = al.indexOf(":");
    return al.substring(index + 1);
  });
  const link = product.link.startsWith("https://")
    ? product.link
    : "https://" + product.link;

  return (
    <div className="relative mx-auto mt-24 mb-12 flex flex-col items-center  gap-8   text-amber-700">
      <button
        onClick={() => navigate(-1)}
        className="absolute left-12 -top-16 text-lg hover:scale-105"
      >
        &larr;Back
      </button>
      <Cart>
        <div className="flex flex-col md:flex-row gap-8 ">
          <img
            src={product.image_front_url}
            className="w-32 mx-auto sm:w-48 md:w-64 mb-4"
          />
          <div>
            <h2 className="px-1 text-center text-2xl pb-2">
              <span>{product.product_name} </span>
              <span>- </span>
              <span>{product.quantity}</span>
            </h2>
            <p className="text-red-500">
              <span>Allergens: </span>
              {allergents.map((al, idx) => (
                <span key={al}>
                  {al}
                  {idx < allergents.length - 1 ? "," : ""}{" "}
                </span>
              ))}
            </p>
            <p>
              <span>Link: </span>
              <a href={link} target="_blank">
                {product.link}
              </a>
            </p>
            <div className="w-full flex items-center justify-center my-4">
              <NutrientLevels
                fat={product.nutrient_levels.fat}
                salt={product.nutrient_levels.salt}
                saturatedFat={product.nutrient_levels["saturated-fat"]}
                sugars={product.nutrient_levels.sugars}
              />
            </div>
            <NutitionTable nutriments={product.nutriments} />
          </div>
        </div>
      </Cart>
      <Cart>
        <div className="py-8 sm:py-0">
          <h3 className="text-xl font-semibold uppercase text-center pb-8">
            ingredients
          </h3>
          <ul className=" divide-amber-700 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {product.ingredients.map((item) => {
              const index = item.id.indexOf(":");
              const name = item.id.substring(index + 1);
              return (
                <li
                  key={item.id}
                  className="border rounded p-2 border-amber-700 text-sm"
                >
                  <p className="uppercase font-semibold pb-1">{name}</p>
                  <p>
                    <span>Estimated Percent: </span>
                    <span>%{Number(item.percent_estimate).toFixed(2)}</span>
                  </p>
                  <p>
                    <span>Vegan: </span>
                    <span
                      className={
                        item.vegan === "yes" ? "text-green-500" : "text-red-500"
                      }
                    >
                      {item.vegan || "unknown"}
                    </span>
                  </p>
                  <p>
                    <span>Vegeterian: </span>
                    <span
                      className={
                        item.vegetarian === "yes"
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {item.vegetarian || "unknown"}
                    </span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </Cart>
    </div>
  );
}
