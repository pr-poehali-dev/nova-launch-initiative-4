const navLinks = [
  { href: "#servers", label: "Серверы" },
  { href: "#features", label: "О проекте" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#shop", label: "Магазин" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-12 px-6 rounded-full bg-zinc-900/70 border border-zinc-800/50 backdrop-blur-md">
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://cdn.poehali.dev/projects/d6353ee6-8e07-43af-9849-8e913c0fe453/bucket/223847d5-0829-4892-998f-12d4322169d1.png"
            alt="ProjectFeral"
            className="h-8 w-8 object-contain"
          />
          <span className="font-display text-lg font-semibold text-zinc-100">ProjectFeral</span>
        </a>
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-sm rounded-full transition-colors text-zinc-400 hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="ml-2 px-4 py-1.5 text-sm rounded-full bg-zinc-100 text-zinc-900 font-medium hover:bg-zinc-200 transition-colors"
          >
            Играть
          </a>
        </div>
      </nav>
    </header>
  )
}