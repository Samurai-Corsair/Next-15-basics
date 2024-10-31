import homeImg from "public/home.jpg";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Hero
        imgData={homeImg}
        imgAlt="car-fabrics"
        title="Professional cloud hosting"
      />
    </div>
  );
}
