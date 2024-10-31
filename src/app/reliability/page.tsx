import {Hero} from "@/components/Hero";
import reliabilityImage from "public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <div>
        <Hero
            imgData={reliabilityImage}
            imgAlt="welding"
            title="Super high reliability hosting"
        />
    </div>
  );
}
