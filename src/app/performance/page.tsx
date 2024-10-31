import {Hero} from "@/components/Hero";
import perfImage from "public/performance.jpg";

export default function PerformancePage() {
  return (
    <div>
        <Hero
            imgData={perfImage}
            imgAlt="welding"
            title="We serve high preformance applications"
        />
    </div>
  );
}
