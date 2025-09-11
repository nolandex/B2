import { Zap, Target, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

export const FEATURES = [
  {
    title: "Bingung Mulai Bisnis?",
    description: "Belajar langsung dari pebisnis nyata. Semua kelas 100% praktik, bukan teori.",
    icon: Zap,
    image: heroImage,
  },
  {
    title: "Networking Sulit?",
    description: "Susah cari teman bisnis serius? Komunitas ini mempertemukan kamu dengan yang mau berkembang.",
    icon: Target,
    image: "/placeholder.svg",
  },
  {
    title: "Investasi Otak",
    description: "Uang bisa habis, ilmu bertahan selamanya. Upgrade pengetahuan lewat kelas kami.",
    icon: BarChart3,
    image: "/placeholder.svg",
  },
];
