import HeaderBar from "./components/header_bar";
import SearchBar from "./components/search_bar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen  justify-items-start bg-zinc-50 font-sans ">
      <HeaderBar />
      <div className="justify-center flex row m-8">
        <SearchBar />
      </div>
    </div>
  );
}
