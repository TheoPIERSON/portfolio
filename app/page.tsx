import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="grid md:flex">
        <Spacing size="md" />
        <Hero />
        <Spacing size="md" />
        <Status />
      </div>
    </main>
  );
}
