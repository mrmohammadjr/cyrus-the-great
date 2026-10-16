import Kingdom from "./components/Kingdom";
import Banner from "./components/Banner";
import Docs from "./components/Docs";
import Respect from "./components/Respect";
import Celebration from "./components/Celebration";
import Legacy from "./components/Legacy";
import Outro from "./components/Outro";

export default function Home() {
  return (
    <div className="w-full">
      <Banner />
      <Kingdom />
      <Docs />
      <Legacy />
      <Celebration />
      <Respect />
      <Outro />
    </div>
  );
}
