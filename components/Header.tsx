const navigation = [
  { label: "About", href: "#about" },
  { label: "Lessons", href: "#lessons" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-walnut/10 bg-cream/88 backdrop-blur-md">
      <div className="section-shell flex min-h-20 flex-wrap items-center justify-between gap-x-4 gap-y-3 py-3 lg:flex-nowrap">
        <a
          href="#"
          className="font-heading text-xl font-semibold text-walnut sm:text-2xl"
          aria-label="Byrd Piano Studio home"
        >
          Byrd Piano Studio
        </a>
        <a className="button-primary min-h-10 px-4 text-xs sm:min-h-12 sm:px-6 sm:text-sm lg:order-3" href="#contact">
          Book a Trial Lesson
        </a>
        <nav
          className="order-3 flex w-full items-center gap-5 overflow-x-auto border-t border-walnut/10 pt-3 lg:order-2 lg:w-auto lg:gap-7 lg:overflow-visible lg:border-t-0 lg:pt-0"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a
              className="whitespace-nowrap text-sm font-semibold text-walnut/70 transition hover:text-sage"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
