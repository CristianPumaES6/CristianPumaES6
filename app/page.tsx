import { NexoHero } from "@/components/sections/NexoHero";
import { ActivityCounter } from "@/components/sections/ActivityCounter";
import { RoleSelector } from "@/components/sections/RoleSelector";
import { ProfileVitrina } from "@/components/sections/ProfileVitrina";
import { DuendeMaldito } from "@/components/sections/DuendeMaldito";
import { FloatingCTA } from "@/components/sections/FloatingCTA";
import { Footer } from "@/components/layout/footer";
import { getShowcaseProfiles } from "@/lib/actions";

export default async function Home() {
  const profiles = await getShowcaseProfiles();

  return (
    <div className="flex flex-col gap-0 -mx-4 sm:-mx-6 lg:-mx-8">
      {/* Remove padding-x constraints for full-width sections if needed, 
          but RootLayout already has px-4. We use negative margins to compensate if needed 
          or adjust RootLayout. For now, we'll keep it within container but styled for impact. */}
      <NexoHero />
      <ActivityCounter />
      <RoleSelector />
      <ProfileVitrina profiles={profiles} />
      <DuendeMaldito />
      <FloatingCTA />
      <Footer />
    </div>
  );
}
