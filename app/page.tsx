"use client";

import { useEffect, useState } from "react";
import { NexoHero } from "@/components/sections/NexoHero";
import { ActivityCounter } from "@/components/sections/ActivityCounter";
import { RoleSelector } from "@/components/sections/RoleSelector";
import { ProfileVitrina } from "@/components/sections/ProfileVitrina";
import { DuendeMaldito } from "@/components/sections/DuendeMaldito";
import { FloatingCTA } from "@/components/sections/FloatingCTA";
import { Footer } from "@/components/layout/footer";
import { getClientShowcaseProfiles } from "@/lib/api";

export default function Home() {
  const [profiles, setProfiles] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await getClientShowcaseProfiles();
      setProfiles(data);
    };
    load();
  }, []);

  return (
    <div className="flex flex-col gap-0 -mx-4 sm:-mx-6 lg:-mx-8">
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
