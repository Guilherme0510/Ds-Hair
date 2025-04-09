import Hero from "./components/Hero";
import Location from "./components/Location";
import PrevServicos from "./components/prevServicos";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <PrevServicos />
      <Testimonials />
      <Location />
    </main>
  );
}
