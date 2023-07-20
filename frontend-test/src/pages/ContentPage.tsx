import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../stores/slices/gifs/action";
import useDebounce from "../hooks/useDebounce";
import { MENU, FAKEDATA } from "../utils/constant";
import FloatingLabelInput from "../components/elements/FloatingLabelInput";
import { ContentState } from "../stores/slices/gifs";
import { FallingLines } from "react-loader-spinner";
import useToast from "../hooks/useToast";
import GifImage from "../components/GifImage";

const ContentPage: React.FC = () => {
  const { menuid } = useParams();
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector(
    (state) => state
  ) as ContentState;
  const [searchInput, setSearchInput] = useState<string>("");

  const deboucedInput = useDebounce(searchInput, 1000);

  useEffect(() => {
    handleFetchApiSearch();

    if (error) {
      useToast({ message: error, type: "error" });
    }
    return () => {};
  }, [dispatch, deboucedInput, menuid]);

  const handleFetchApiSearch = () => {
    if (menuid === "search") {
      dispatch(fetchData(deboucedInput) as any);
    } else {
      dispatch(fetchData(menuid) as any);
    }
  };

  return (
    <section className="w-full mt-32 md:px-32 px-12">
      <div className="flex flex-col items-center gap-24 h-fit">
        <h1 className="text-5xl font-bold uppercase text-center">
          {menuid === "search" ? MENU[1].title : MENU[0].title}
        </h1>
        {menuid === "search" && (
          <FloatingLabelInput
            label="Search"
            type="text"
            input={searchInput}
            setInput={setSearchInput}
            className="max-w-screen-lg md:w-full w-4/5"
          />
        )}
        <article className="max-w-screen-lg md:w-full w-4/5">
          <ul className="flex flex-wrap gap-y-10 justify-center items-center relative">
            {loading
              ? FAKEDATA.map((_, index) => (
                  <li
                    key={index}
                    className="lg:w-1/3 md:w-1/2 w-full flex justify-center"
                  >
                    <FallingLines color="#FF6666" width="100" visible={true} />
                  </li>
                ))
              : error
              ? FAKEDATA.map((_, index) => <GifImage key={index} />)
              : data.map((item, index) => {
                  return (
                    <GifImage
                      key={index}
                      src={item.images.original.webp}
                      title={item.title}
                    />
                  );
                })}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default ContentPage;
