import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="bg-slate-800 grid grid-rows-[auto_1fr_auto] h-dvh">
      <Header />
      <div className="overflow-y-scroll">
        <main className="max-w-3xl m-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
