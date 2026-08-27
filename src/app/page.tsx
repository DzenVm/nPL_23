import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { GameOverview } from "@/components/GameOverview";
import { Mechanics } from "@/components/Mechanics";
import { SimulatorSection } from "@/components/SimulatorSection";
import { WorldLore } from "@/components/WorldLore";
import { Devlog } from "@/components/Devlog";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { getWorkshopMoment } from "@/lib/season";

export const dynamic = "force-dynamic";

export default function Home() {
  const moment = getWorkshopMoment();

  return (
    <>
      <Header />
      <main>
        <Hero season={moment.season} ingredient={moment.ingredient} weekNumber={moment.weekNumber} />
        <GameOverview />
        <Mechanics />
        <SimulatorSection />
        <WorldLore />
        <Devlog />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
