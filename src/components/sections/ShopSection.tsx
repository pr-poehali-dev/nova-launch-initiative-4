import { motion } from "framer-motion"
import { ArrowRight, ShoppingBag, Shield, Zap, Star } from "lucide-react"

const shopCategories = [
  {
    icon: Shield,
    title: "Привилегии",
    description: "VIP и Premium-статусы с уникальными бонусами, скинами и приоритетным доступом на серверы.",
  },
  {
    icon: Zap,
    title: "Наборы выживания",
    description: "Стартовые киты с оружием, снаряжением и ресурсами — начни игру с преимуществом.",
  },
  {
    icon: Star,
    title: "Уникальные предметы",
    description: "Эксклюзивные скины, кастомное оружие и декор для базы, которых нет у других игроков.",
  },
]

export function ShopSection() {
  return (
    <section id="shop" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Магазин</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            Магазин ProjectFeral
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance">
            Привилегии, наборы и уникальные предметы для твоего выживания. Всё честно — без влияния на баланс.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {shopCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-5 rounded-2xl border border-zinc-800/50 bg-zinc-900/50 flex gap-4"
            >
              <div className="w-10 h-10 shrink-0 rounded-xl bg-zinc-800 flex items-center justify-center">
                <cat.icon className="w-5 h-5 text-zinc-400" />
              </div>
              <div>
                <p className="font-heading font-semibold text-zinc-100 mb-1">{cat.title}</p>
                <p className="text-sm text-zinc-500 leading-relaxed">{cat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/80 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Glow */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-zinc-700/10 blur-3xl pointer-events-none" />

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0">
              <ShoppingBag className="w-7 h-7 text-zinc-300" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-zinc-100 mb-1">
                Открыть магазин ProjectFeral
              </h3>
              <p className="text-zinc-500 text-sm">
                Безопасная оплата · Мгновенная выдача · Поддержка 24/7
              </p>
            </div>
          </div>

          <a
            href="https://projectferal.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 text-zinc-900 font-medium text-sm hover:bg-zinc-200 transition-colors shrink-0"
          >
            Перейти в магазин
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
