import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Лучший DayZ-сервер, на котором я играл. Моды топовые, лагов нет, админы всегда на связи. Сижу уже полгода.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Анна К.",
    role: "Выживший, 600+ часов",
  },
  {
    text: "Наконец-то нашёл сервер без читеров. Античит работает, банят быстро. Атмосфера как в первый раз.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Максим В.",
    role: "Рейдер, 1200+ часов",
  },
  {
    text: "PvP-зоны, ивенты каждую неделю, кастомное оружие — скучать некогда. Привёл сюда всю тиму.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Елена Р.",
    role: "Лидер клана, 900+ часов",
  },
  {
    text: "Привилегия VIP окупилась с первой же сессии. Кит со старта и приоритетный слот — просто мастхэв.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Дмитрий П.",
    role: "VIP-игрок, 400+ часов",
  },
  {
    text: "Сервер онлайн круглосуточно, вылетов не было ни разу за три месяца. Это редкость в DayZ-комьюнити.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Алина М.",
    role: "Мирный игрок, 300+ часов",
  },
  {
    text: "Кастомные локации и транспорт — на других серверах такого просто нет. Здесь DayZ совсем другой.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Алексей В.",
    role: "Исследователь, 750+ часов",
  },
  {
    text: "Быстро разобрался с правилами, сообщество дружелюбное. Новичкам тут комфортно — помогут и научат.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Лиза Т.",
    role: "Новичок, 80+ часов",
  },
  {
    text: "Ивенты каждые выходные, всегда что-то происходит. За победу дают реальные призы — мотивирует.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Михаил Ч.",
    role: "Ивент-победитель, 500+ часов",
  },
  {
    text: "Взял Premium и не пожалел. Свой скин, выделенный слот, доступ к закрытым ивентам — стоит каждой копейки.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Рахиль К.",
    role: "Premium-игрок, 1000+ часов",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const logos = ["Chernarusplus", "Namalsk", "Livonia", "DayZMod", "SurvivorHub", "ZombieZone"]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <div className="border border-zinc-800 py-1.5 px-4 rounded-full text-sm text-zinc-400">Отзывы</div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-6 text-center tracking-tight">
            Что говорят выжившие
          </h2>
          <p className="text-center mt-4 text-zinc-500 text-lg text-balance">
            Реальные отзывы игроков нашего сервера.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-800/50">
          <p className="text-center text-sm text-zinc-500 mb-8">Популярные карты на нашем сервере</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="text-xl font-semibold text-zinc-700 whitespace-nowrap flex-shrink-0"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}