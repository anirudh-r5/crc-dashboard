import Navbar from "@/components/navbar";
import Splash from "@/components/splash";

function fetchCount() {
  const num = 2;
  const str = "nd";
  return { num, str };
}

export default function Home() {
  const visitor = fetchCount();
  return (
    <div className="grid grid-rows-10 min-h-full">
      <div className="row-span-1">
        <Navbar />
      </div>
      <div className="row-span-5">
        <Splash count={visitor.num} pos={visitor.str} />
      </div>
    </div>
  );
}
