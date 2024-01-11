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
export default function NutitionTable({
  nutriments,
}: {
  nutriments: NutrimentsType;
}) {
  return (
    <table className="text-center mx-auto">
      <thead className="font-semibold">
        <tr>
          <td>Nutrition</td>
          <td>100g/100ml</td>
          <td>Per serving</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Energy</td>
          <td>
            {nutriments.energy}kj({nutriments["energy-kcal_100g"]}kcal)
          </td>
          <td>
            {nutriments.energy_serving}kj({nutriments["energy-kcal_serving"]}
            kcal)
          </td>
        </tr>
        <tr>
          <td>Fat</td>
          <td>{nutriments.fat_100g}g</td>
          <td>{nutriments.fat_serving}g</td>
        </tr>
        <tr>
          <td>Sugar</td>
          <td>{nutriments.sugars_100g}g</td>
          <td>{nutriments.sugars_serving}g</td>
        </tr>
        <tr>
          <td>Carbohydrates</td>
          <td>{nutriments.carbohydrates_100g}g</td>
          <td>{nutriments.carbohydrates_serving}g</td>
        </tr>
      </tbody>
    </table>
  );
}
