import Container from "@/app/_components/container";
import { Menu } from "./_components/menu";
import { Background } from "./_components/background";
import CoverImage from "./_components/cover-image";
import { getLandingData } from "@/lib/api";

export default function Index() {
  const landingData = getLandingData();
  
  return (
    <main>
      <Container>
        <CoverImage title="Logo" src={landingData.logoUrl}/>
        <Menu />
        <Background />
      </Container>
    </main>
  );
}
