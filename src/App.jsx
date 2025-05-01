import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router";
import Marquee from "react-fast-marquee";
import Navbar from "./components/Navbar";
import LeftAside from "./components/HomeLayout/LeftAside";
import RightAside from "./components/HomeLayout/RightAside";

function App() {
  return (
    <>
      <header className="w-11/12 mx-auto">
        <Header></Header>
        <section>
          <div className="flex items-center  bg-[#F3F3F3] py-4 px-2 mt-5">
            <button className="btn  bg-[#D72050] text-white">Latest</button>
            <Marquee pauseOnHover={true}>
              <div className="flex gap-5 font-bold ">
                <h1>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sint, sed.
                </h1>
                <h1>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sint, sed.
                </h1>
                <h1>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sint, sed.
                </h1>
              </div>
            </Marquee>
          </div>
        </section>

        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3  grid grid-cols-12 gap-8">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
