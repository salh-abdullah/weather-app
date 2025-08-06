import { IoSearch } from "react-icons/io5";

type Props = {
  className?: string;
  value: string;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export default function SearchBox(props: Props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className="flex relative items-center justify-center h-10 "
    >
      <input
        value={props.value}
        onChange={props.onChange}
        type="text"
        placeholder="Search Location..."
        className="py-2 px-4 w-[230px] border border-gray-400 rounded-l-md          focus:outline-none focus:border-blue-500 h-full"
      />
      <button
        className="px-4 py-[9px] bg-blue-500 text-white 
        rounded-r-md focus:outline-none hover:bg-blue-600 h-full"
      >
        {" "}
        <IoSearch />{" "}
      </button>
    </form>
  );
}
