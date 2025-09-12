import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function GlowingEffectDemo() {
  return (
    <section className="w-full pt-2 pb-8">
      <div className="flex flex-col items-center">
        <ul className="grid grid-cols-1 grid-rows-none gap-2 md:grid-cols-12 md:grid-rows-3 lg:gap-2 xl:max-h-[34rem] xl:grid-rows-2">
          {/* 1 */}
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Box className="h-4 w-4 text-foreground" />}
            title="Akses materi eksklusif seputar bisnis"
            description="Materi yang tidak dibagikan ke publik."
          />
          {/* 2 */}
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Sparkles className="h-4 w-4 text-foreground" />}
            title="Berbagi Pengetahuan"
            description="Anggota dapat bertukar informasi tentang strategi bisnis, tren pasar, atau teknologi terbaru."
          />
          {/* 3 */}
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Settings className="h-4 w-4 text-foreground" />}
            title="Kolaborasi Bisnis"
            description="Peluang untuk bekerja sama dengan anggota lain dalam proyek atau kemitraan."
          />
          {/* 4 */}
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Lock className="h-4 w-4 text-foreground" />}
            title="Jaringan Bisnis yang Luas"
            description="Pelanggan dapat terhubung dengan pengusaha lain dari berbagai industri, memperluas koneksi profesional."
          />
          {/* 5 */}
          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Search className="h-4 w-4 text-foreground" />}
            title="Template & tools bisnis siap pakai"
            description="Contoh: pitch deck, business plan, SOP."
          />
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-center gap-3 overflow-hidden rounded-xl p-4 md:p-5 dark:shadow-[0px_0px_20px_0px_#2D2D2D]">
          <div className="relative flex flex-col gap-2">
            <h3 className="-tracking-4 font-sans text-lg font-semibold text-foreground md:text-xl">
              {title}
            </h3>
            <h2 className="font-sans text-sm text-muted-foreground md:text-base">
              {description}
            </h2>
          </div>
        </div>
      </div>
    </li>
  );
};
