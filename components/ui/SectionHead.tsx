export function SectionHead({ title, id }: { title: string; id?: string }) {
  return (
    <h2 id={id} className="text-[32px] font-semibold leading-[1.1] tracking-[-1px] text-text md:text-[40px]">
      {title}
    </h2>
  );
}
