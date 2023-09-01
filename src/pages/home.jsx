import HomeContainer from "../components/home/home-container";
import GachaTable from "../components/home/table";

export default function Home({ theme, mode }) {
  console.log(theme);
  return <HomeContainer theme={theme} mode={mode} />;
}
