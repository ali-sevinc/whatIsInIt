export default function NutrientItem({
  title,
  level,
}: {
  title: string;
  level: string;
}) {
  let bgColor = "bg-green-500";
  if (level === "moderate") bgColor = "bg-amber-500";
  if (level === "high") bgColor = "bg-red-500";

  return (
    <li className={`${bgColor} px-2 py-1 rounded text-sm`}>
      <p className="border-b">{title}</p>
      <p>{level}</p>
    </li>
  );
}
