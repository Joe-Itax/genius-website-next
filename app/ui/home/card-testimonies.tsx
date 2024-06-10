import { CardStack } from "@/app/ui/card-stack";
import { cn } from "@/utils/cn";
export function CardStackTestimonies() {
  return (
    <div className="flex items-center justify-center w-full py-20">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-blue-500 text-gray-100 rounded-sm px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Joe Itax",
    designation: "CEO of Itax Corporation",
    content: (
      <p>
        Genius <Highlight>a joué un rôle déterminant</Highlight> dans la
        transformation de notre présence en ligne. 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "John Smith",
    designation: "CEO of Chic Boutique",
    content: (
      <p>
        <Highlight>Travailler avec Genius</Highlight> a été un{" "}
        <Highlight>jeu d&apos;enfant</Highlight>.
      </p>
    ),
  },
  {
    id: 2,
    name: "Carmel",
    designation: "CEO of Cabukaka",
    content: (
      <p>
        <Highlight>Genius</Highlight> est une{" "}
        <Highlight>agence de développement</Highlight>
      </p>
    ),
  },
];
