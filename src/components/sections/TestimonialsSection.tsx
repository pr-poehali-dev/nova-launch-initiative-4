import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Топовые ивенты, реально топ! Большое спасибо администрации за своевременную и интересную организацию нашего досуга на время вайпа основного сервера ❤️❤️❤️",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face",
    name: "Артём К.",
    role: "Игрок, 700+ часов",
  },
  {
    text: "Наконец сервер без читеров. Моды — огонь, атмосфера ночи реально пугает, первый раз за годы DayZ снова страшно играть одному.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face",
    name: "Никита Р.",
    role: "Рейдер, 950+ часов",
  },
  {
    text: "Всем админам мирного неба, надо головой 🫂🤍 За классные ивенты, терпение, отзывчивость — спасибо ребят 🫂",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Денис М.",
    role: "Постоянный игрок, 600+ часов",
  },
  {
    text: "+rep @Basanoff — вернул вещи из-за бага игры ❤️. За мои скромные 500 часов DayZ научил меня одному: никому верить нельзя. Но здесь доказали обратное.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    name: "Игорь С.",
    role: "Выживший, 500+ часов",
  },
  {
    text: "У нас самые лучшие и заботливые админы 🌸 Особая благодарность @BaSanoFF за идею и за то что тестил с нами — было весело 🌸",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Катя В.",
    role: "Игрок, 320+ часов",
  },
  {
    text: "Кастомный транспорт, магнитное строительство, ночи без фонаря — это просто другой уровень. Привёл всю тиму, никто не пожалел.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Владислав Т.",
    role: "Лидер клана, 1100+ часов",
  },
  {
    text: "Админы, огромное спасибо за ваш энтузиазм и позитив! ТАКОГО приключения у нас не было никогда. Конвои, хеликраши — каждый выход как первый раз.",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face",
    name: "Роман Б.",
    role: "Рейдер, 830+ часов",
  },
  {
    text: "Давайте хотя бы помогать друг другу на берегу. Именно здесь я нашёл надёжных товарищей, которые не бросили в трудную минуту. Такое в DayZ редкость.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face",
    name: "Андрей Ф.",
    role: "Исследователь, 500+ часов",
  },
  {
    text: "В Камышово лучше не возрождаться — это я усвоил. А вот на ProjectFeral усвоил другое: тут реально встречаются люди, которые помогут и не воткнут нож в спину.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Евгений Л.",
    role: "Мирный выживший, 400+ часов",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)


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
            Что говорят игроки
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


      </div>
    </section>
  )
}