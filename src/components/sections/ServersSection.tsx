import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"
import { useState } from "react"
import Icon from "@/components/ui/icon"

const servers = [
  {
    name: "ProjectFeral Cherno",
    map: "Chernarus",
    description: "Классическая карта Чернарус. Выживание, рейды, PvP и PvE. Огромный открытый мир с уникальными модами.",
    ip: "109.248.4.238",
    port: "2302",
    tags: ["PvP", "PvE", "Моды"],
    icon: "MapPin",
    players: "64/80",
    status: "online",
  },
  {
    name: "ProjectFeral Namalsk",
    map: "Namalsk",
    description: "Суровый арктический остров. Экстремальная температура, атмосфера и хардкорное выживание.",
    ip: "109.248.4.238",
    port: "2502",
    tags: ["Хардкор", "Атмосфера", "PvE"],
    icon: "Snowflake",
    players: "32/60",
    status: "online",
  },
  {
    name: "ProjectFeral Deathmatch",
    map: "Deathmatch",
    description: "Чистый PvP-экшен без лишнего. Быстрые бои, лут с респауна, рейтинговая таблица убийств.",
    ip: "109.248.4.238",
    port: "2402",
    tags: ["PvP", "Рейтинг", "Быстрый старт"],
    icon: "Crosshair",
    players: "48/50",
    status: "online",
  },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="ml-2 p-1 rounded text-zinc-600 hover:text-zinc-300 transition-colors"
      title="Скопировать"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-zinc-400" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  )
}

export function ServersSection() {
  return (
    <section id="servers" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Серверы</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            Выбери свой мир
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance">
            Три сервера — три режима игры. Подключайся напрямую или через лаунчер DayZ.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {servers.map((server, i) => (
            <motion.div
              key={server.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="group h-full p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center">
                    <Icon name={server.icon} fallback="Server" className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-zinc-500">{server.players}</span>
                  </div>
                </div>

                {/* Name & Map */}
                <h3 className="font-heading font-semibold text-zinc-100 mb-1">{server.name}</h3>
                <p className="text-xs text-zinc-600 mb-3 font-mono">{server.map}</p>

                {/* Description */}
                <p className="text-zinc-500 text-sm mb-5 flex-1 leading-relaxed">{server.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {server.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs bg-zinc-800 text-zinc-400 border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* IP/Port */}
                <div className="rounded-xl bg-zinc-950 border border-zinc-800 p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-600 uppercase tracking-wider">IP</span>
                    <div className="flex items-center">
                      <span className="font-mono text-xs text-zinc-300">{server.ip}</span>
                      <CopyButton text={server.ip} />
                    </div>
                  </div>
                  <div className="h-px bg-zinc-800" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-600 uppercase tracking-wider">Порт</span>
                    <div className="flex items-center">
                      <span className="font-mono text-xs text-zinc-300">{server.port}</span>
                      <CopyButton text={server.port} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-zinc-600 mt-6"
        >
          В лаунчере DayZ: Community → введи IP и порт → Connect
        </motion.p>
      </div>
    </section>
  )
}
