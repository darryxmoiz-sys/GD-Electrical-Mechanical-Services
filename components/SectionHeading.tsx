type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: Props) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      <p className={`eyebrow mb-3 ${isLight ? "text-brass-500" : "text-brass-300"}`}>
        {eyebrow}
      </p>
      <h2
        className={`font-display text-3xl leading-tight sm:text-4xl ${
          isLight ? "text-abyss-500" : "text-paper-50"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${isLight ? "text-abyss-400" : "text-paper-200/80"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
