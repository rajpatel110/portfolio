import { PortfolioHero } from "@/components/portfolio-hero";
import { existsSync } from "node:fs";
import path from "node:path";
export default function Home() {
  const hasPortrait = existsSync(path.join(process.cwd(), "public", "images", "portrait.webp"));
  return <PortfolioHero hasPortrait={hasPortrait} />;
}
