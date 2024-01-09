type PropsType = { title: string; message: string };
export default function Fallback({ title, message }: PropsType) {
  return (
    <div className="text-center my-24 text-amber-700">
      <h2 className="text-2xl font-semibold pb-4">{title}</h2>
      <p className="text-lg">{message}</p>
    </div>
  );
}
