export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  const alignment =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left";

  return (
    <div className={["flex flex-col gap-6", alignment, className].filter(Boolean).join(" ")}>
      {eyebrow ? <span className="section-kicker">{eyebrow}</span> : null}
      <div className="space-y-5">
        <h2 className="section-title text-balance">{title}</h2>
        {description ? <p className="section-copy">{description}</p> : null}
      </div>
    </div>
  );
}
