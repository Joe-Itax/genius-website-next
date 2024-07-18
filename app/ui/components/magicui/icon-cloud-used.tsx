import IconCloud from "@/app/ui/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "express",
  "nextdotjs",
  "nodedotjs",
  "prisma",
  "postgresql",
  "vercel",
  "jest",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "wordpress",
  "elementor",
  "woocommerce",
];

export function IconCloudUsed() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-0 md:px-10 py-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
