export default function About() {
  return (
    <div className="text-center pt-24 text-amber-700">
      <div>
        <h2 className="text-2xl">This website is about safety food.</h2>
        <p>
          You can find which ingredients and allergens contains in a food here.
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-lg">Sources</h3>
        <p>
          All products provided from{" "}
          <a href="https://world.openfoodfacts.org/" target="_blank">
            <b>Open Food Facs</b>
          </a>{" "}
          website
        </p>
      </div>
    </div>
  );
}
