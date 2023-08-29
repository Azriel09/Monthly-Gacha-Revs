import HomeContainer from "../components/home/home-container";
import GachaTable from "../components/home/table";

export default function Home({ theme }) {
  console.log(theme);
  return (
    <>
      <HomeContainer>
        <GachaTable theme={theme} />
      </HomeContainer>
    </>
  );
}
