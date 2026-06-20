export default function SectionTitle({ title }) {
  return (
    <div className="mb-10">
      <h2 className="text-4xl font-bold text-emerald-400">
        {title}
      </h2>

      <div className="w-20 h-1 bg-emerald-400 mt-3 rounded-full"></div>
    </div>
  );
}