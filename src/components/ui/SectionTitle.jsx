export default function SectionTitle({ eyebrow, title }) {
  return (
    <div>
      {eyebrow && (
        <p className="text-[#a32638] text-xs font-semibold uppercase tracking-widest mb-1">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold text-[#2c1a0e]">{title}</h2>
    </div>
  )
}
