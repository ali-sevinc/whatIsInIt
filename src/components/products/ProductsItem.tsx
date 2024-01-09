import { Link } from "react-router-dom";

type PropsType = {
  image: string;
  name: string;
  code: string;
  quantity: string;
};
export default function ProductsItem({
  image,
  name,
  code,
  quantity,
}: PropsType) {
  return (
    <li className="bg-white h-72 shadow-lg rounded-lg p-2 hover:ring-4 hover:ring-amber-700">
      <Link
        to={`/details/${code}`}
        className="flex flex-col items-center gap-8 h-full w-full"
      >
        <img src={image} alt={name} className="max-h-40 h-full " />
        <p className="px-1 text-center">
          <span>{name} </span>
          <span>- </span>
          <span>{quantity}</span>
        </p>
      </Link>
    </li>
  );
}
