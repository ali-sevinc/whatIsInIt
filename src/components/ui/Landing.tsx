import shop from "/shopping.svg";
export default function Landing() {
  return (
    <div className="max-w-3xl mx-auto mt-24 flex flex-col items-center gap-12">
      <h2 className="text-2xl font-semibold text-amber-700">
        Find what is in the food before buy or consume.
      </h2>

      <img src={shop} className="w-72" />
    </div>
  );
}
