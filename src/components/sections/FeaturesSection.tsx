import { motion } from "framer-motion"
import { Cloud, Home, Car, Backpack, Swords, AlertTriangle } from "lucide-react"

const features = [
  {
    icon: Cloud,
    title: "Атмосфера и мир",
    description:
      "Знойный август сменяется холодными ливнями. По-настоящему тёмные, пугающие ночи заставляют ценить каждый источник света. Воду можно добывать прямо из дождя, автобег избавляет от рутины, а интерактивная карта и компас надёжно помогут в навигации.",
  },
  {
    icon: Home,
    title: "Базы и строительство",
    description:
      "Мощная система строительства с магнитным монтажом: трёхэтажные частоколы, ворота с колючей проволокой, охраняемая территория. Строй-рюкзак и переноска заполненных бочек делают процесс эффективным. На стены можно вешать костюмные полотна с эксклюзивными изображениями от команды Project Feral.",
  },
  {
    icon: Car,
    title: "Транспорт",
    description:
      "Сортировка лута в багажнике прямо из машины при открытом багажнике. Глушение двигателя на ходу для тактических манёвров, функция переворота в сложных ситуациях. Дополнительный багажник на крыше для перевозки ящиков и бочек.",
  },
  {
    icon: Backpack,
    title: "Экипировка",
    description:
      "Большой рюкзак увеличивает вместимость, тактический ремень позволяет убирать оружие из поля зрения. Множество прицелов, включая установку натовской оптики на советское оружие через переходную планку, модовые глушители и тактические чехлы.",
  },
  {
    icon: Swords,
    title: "Динамические события",
    description:
      "Ивенты конвойного типа появляются в случайных местах карты в разных обличиях. Хеликраши с увеличенным лутом создают жаркие точки столкновений. Оповещения приходят как в игре, так и в Discord-сообществе сервера.",
  },
  {
    icon: AlertTriangle,
    title: "Правила обязательны",
    description:
      "Внимание! Прочитайте правила сервера перед игрой. Незнание правил не освобождает от ответственности. Честная игра и уважение к игрокам — основа Project Feral.",
    warning: true,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">О проекте</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            Тщательно сбалансированный мир
          </h2>
        </motion.div>

        {/* Main description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-zinc-400 text-center max-w-2xl mx-auto mb-14 leading-relaxed text-balance"
        >
          Project Feral — это игровой мир для глубокого погружения и сосредоточённого геймплея. Здесь убрано всё, что отвлекает от сути, и добавлено всё, что делает выживание по-настоящему интересным.
        </motion.p>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group p-6 rounded-2xl border transition-all duration-300 ${
                feature.warning
                  ? "border-zinc-700/50 bg-zinc-900/80 hover:border-zinc-600/50"
                  : "border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                  feature.warning ? "bg-zinc-800" : "bg-zinc-800"
                }`}
              >
                <feature.icon
                  className={`w-5 h-5 transition-colors ${
                    feature.warning
                      ? "text-zinc-400 group-hover:text-zinc-200"
                      : "text-zinc-400 group-hover:text-zinc-200"
                  }`}
                />
              </div>
              <h3 className="font-heading font-semibold text-zinc-100 mb-2">{feature.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
