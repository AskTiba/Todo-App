import AddTask from "./AddTask";
import "./App.css";

function App() {
  return (
    <>
      <article className="flex justify-center items-center">
        <div className="flex-col w-2/5">
          <div className="flex justify-between">
            <h1 className="mb-5">TODO</h1>
            <p>Holla</p>
          </div>
          <AddTask />
          <div className="flex justify-evenly gap-1 my-5 border border-sky-500 py-2 rounded-[4px]">
            <p>All</p>
            <p>Active</p>
            <p>Completed</p>
          </div>
          <div className="flex justify-evenly gap-1 my-5 border border-sky-500 py-2 rounded-[4px]">
            <p>Drag and drop to reorder list</p>
          </div>
        </div>
      </article>
    </>
  );
}

export default App;
