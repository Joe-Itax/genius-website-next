"use client";

export default function ButtonStartProject({
  className,
}: {
  className?: string;
}) {
  return (
    <span
      className={`${className}`}
      onClick={() => {
        document
          .getElementById("start-project")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Commencer un projet
    </span>
  );
}
