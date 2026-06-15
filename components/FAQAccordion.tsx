type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <details
          className="group rounded-2xl border border-beige bg-ivory p-6 shadow-card"
          key={item.question}
          open={index === 0}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-heading text-xl text-walnut">
            {item.question}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage/12 text-base text-sage transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 leading-7 text-walnut/72">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
