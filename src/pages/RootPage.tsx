import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

export default function RootPage() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
