import IconCloud from "@/app/ui/components/magicui/icon-cloud";

const slugs = [
  "html5",
  "css3",
  "javascript",
  "typescript",
  "react",
  "vite",
  "nextdotjs",
  "express",
  "nodedotjs",
  "prisma",
  "postgresql",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "vercel",
  "figma",
  "wordpress",
  "elementor",
  "woocommerce",
];

export default function IconCloudUsed() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-0 md:px-10 py-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
