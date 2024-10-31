import {Hero} from "@/components/Hero";
import scaleImage from "public/scale.jpg";

export default function ScalePage() {
  return (
    <div>
        <Hero
            imgData={scaleImage}
            imgAlt="factory"
            title="Scale your app to infinity."
        />
    </div>
  );
}
