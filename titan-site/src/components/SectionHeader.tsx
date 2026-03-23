interface SectionHeaderProps {
  label?: string;
  title: string;
  centered?: boolean;
  navy?: boolean;
}

export default function SectionHeader({
  label,
  title,
  centered = false,
  navy = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {label && (
        <span
          className={`block font-heading font-black text-[11px] tracking-[0.3em] uppercase mb-4 ${
            navy ? "text-white/40" : "text-steel/60"
          }`}
        >
          {label}
        </span>
      )}
      <h2 className="font-heading font-black text-[clamp(2rem,4vw,3rem)] uppercase tracking-tight">
        {title}
      </h2>
      <div
        className={`w-[60px] h-1 mt-4 ${navy ? "bg-white" : "bg-navy"} ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
