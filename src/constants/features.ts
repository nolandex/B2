import { Zap, Target, BarChart3, Users, Lightbulb, Rocket } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

export const FEATURES = [
  {
    title: "AI-Powered Automation",
    description: "Transform your marketing with intelligent automation that creates campaigns faster and generates better content.",
    icon: Zap,
    image: heroImage,
  },
  {
    title: "Smart Analytics",
    description: "Get detailed insights into your campaigns with AI-driven analytics and actionable recommendations.",
    icon: BarChart3,
    image: "/placeholder.svg",
  },
  {
    title: "Targeted Campaigns",
    description: "Reach the right audience at the right time with precision targeting powered by machine learning.",
    icon: Target,
    image: "/placeholder.svg",
  },
  {
    title: "Team Collaboration",
    description: "Work seamlessly with your team using built-in collaboration tools and shared workspaces.",
    icon: Users,
    image: "/placeholder.svg",
  },
  {
    title: "Creative Insights",
    description: "Generate creative ideas and content suggestions powered by advanced AI algorithms.",
    icon: Lightbulb,
    image: "/placeholder.svg",
  },
  {
    title: "Quick Launch",
    description: "Deploy your campaigns faster with automated setup and optimization recommendations.",
    icon: Rocket,
    image: "/placeholder.svg",
  },
];