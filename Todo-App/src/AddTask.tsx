const AddTask = () => {
  return (
    <div className="flex gap-4 px-5 py-2 border border-sky-500 w-full rounded-[4px]">
      <input type="checkbox" className="rounded-full" />
      <input placeholder="Create a new todo..." className="outline-none caret-[gold]" type="text" />
    </div>
  );
};

export default AddTask;
