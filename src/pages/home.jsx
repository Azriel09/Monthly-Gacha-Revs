import HomeContainer from "../components/home/home-container";

export default function Home({ theme, mode }) {
  console.log(theme);
  return <HomeContainer theme={theme} mode={mode} />;
}
