import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../app/features/counter/counterSlice";

const Counter = () => {
  //Read the data from store
  const count = useSelector((state) => state.counter.value);

  //changing data
  const dispatch = useDispatch();
  return (
    <div className="w-[100vw]">
      <div className="h-80 ml-auto mr-auto flex justify-center">
        <div className="w-56 h-56 bg-blue-500 flex justify-center items-center rounded-md m-5 shadow-md">
          <div>
            <h1 className="text-3xl font-semibold text-amber-50 p-2 flex items-center justify-center">
              {count}
            </h1>
            <div className="flex items-center justify-center gap-5">
              <button
                className="flex items-center justify-center text-xl font-semibold
                text-amber-50 p-1 h-8 w-8 border-2 border-amber-50 hover:cursor-pointer
                 hover:bg-blue-300 hover:text-gray-500 hover:border-gray-500 hover:duration-200"
                onClick={() => dispatch(increment())}
              >
                +
              </button>
              <button
                className="flex items-center justify-center text-xl font-semibold
                text-amber-50 p-1 h-8 w-8 border-2 border-amber-50 hover:cursor-pointer
                 hover:bg-blue-300 hover:text-gray-500 hover:border-gray-500 hover:duration-200"
                onClick={() => dispatch(decrement())}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
