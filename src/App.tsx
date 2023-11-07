import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useGetCommentsQuery } from "./services/CommmentApi";

function App() {
  const [count, setCount] = useState(0);
  const { data, isError, isLoading, isSuccess, isFetching } =
    useGetCommentsQuery();
  console.log(data, isError, isLoading, isSuccess, isFetching);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {isLoading && <h2>...isLoading</h2>}
        {isFetching && <h2>...isFetching</h2>}
        {isError && <h2>Something went wrong</h2>}
        {isSuccess && (
          <div>
            {
              <h1>
                {data?.map((item) => {
                  item?.email;
                })}
              </h1>
            }
          </div>
        )}

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
