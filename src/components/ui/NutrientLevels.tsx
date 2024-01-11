import NutrientItem from "./NutrientItem";

type PropsType = {
  fat: string;
  salt: string;
  saturatedFat: string;
  sugars: string;
};
export default function NutrientLevels({
  fat,
  salt,
  saturatedFat,
  sugars,
}: PropsType) {
  return (
    <ol className="flex gap-1 text-center text-amber-50">
      <NutrientItem title="Fat" level={fat} />
      <NutrientItem title="Salt" level={salt} />
      <NutrientItem title="Saturated Fat" level={saturatedFat} />
      <NutrientItem title="Sugars" level={sugars} />
    </ol>
  );
}
