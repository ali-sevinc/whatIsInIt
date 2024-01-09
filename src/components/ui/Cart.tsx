import { ReactNode } from "react";

export default function Cart({ children }: { children: ReactNode }) {
  return (
    <div className="max-4xl bg-white rounded-lg p-6 shadow-lg">{children}</div>
  );
}
