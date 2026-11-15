export function SectionHead({ index, title, id }: { index: string; title: string; id?: string }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-mono text-sm text-accent">{index}</p>
      <h2 id={id} className="text-[32px] font-semibold leading-[1.1] tracking-[-1px] text-text md:text-[40px]">
        {title}
      </h2>
    </div>
  );
}
