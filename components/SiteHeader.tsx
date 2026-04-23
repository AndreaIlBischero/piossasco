import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/storia", label: "Storia" },
  { href: "/curiosita", label: "Curiosita" },
  { href: "/eventi", label: "Eventi" },
  { href: "/pizzerie", label: "Pizzerie" },
  { href: "/planner", label: "Planner" },
  { href: "/admin", label: "Admin" }
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-orange-100 bg-crema/95 backdrop-blur">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-borgo">
          C&apos;era una volta a Piossasco
        </Link>

        <nav className="-mx-1 flex gap-1 overflow-x-auto pb-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-orange-200 bg-white px-3 py-1.5 text-sm text-borgo"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
