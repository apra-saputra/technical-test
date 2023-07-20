import logo from "../assets/logo.png";
import useHandleNavigation from "../hooks/useHandleNavigation";
import { MENU } from "../utils/constant";

const HomePage: React.FC = () => {
  const { handleNavigationWithObject } = useHandleNavigation();

  return (
    <section className="w-full">
      <div className="flex flex-col justify-center items-center gap-24 min-h-screen">
        <h1 className="text-5xl font-bold uppercase text-center">welcome to your giphy</h1>
        <img
          src={logo}
          width={400}
          height={300}
          alt="Logo"
          className="drop-shadow rounded-lg"
        />
        <ul className="flex flex-col items-center gap-12">
          {MENU.map((item, index) => {
            return (
              <li
                key={index}
                className="border-b-[1px] pb-[1px] border-blue-600 text-blue-600 transition-colors duration-300 ease-linear active:text-slate-100 active:border-slate-100 hover:text-slate-300 hover:border-slate-300 cursor-pointer"
                onClick={() => handleNavigationWithObject(item.path, item)}
              >
                <h2 className="uppercase">{item.title} </h2>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default HomePage;
