import { motion } from 'framer-motion';
import { Award, Cloud, Bot, PieChart, Code, Brain, BadgeCheck } from 'lucide-react';

const certifications = [
  {
    name: 'Microsoft Azure AI Fundamentals',
    issuer: 'Microsoft',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    url: 'https://drive.google.com/file/d/1nwgi0mnQ5KdH8hzGF7xX4t0edHvgX4vG/view',
  },
  {
    name: 'Machine Learning',
    issuer: 'Microsoft',
    icon: Bot,
    color: 'from-purple-500 to-pink-500',
    url: 'https://drive.google.com/file/d/1Ggt9aeSGRCgUBHKJLo4ge0yDkQJvaXV9/view',
  },
  {
    name: 'Power BI',
    issuer: 'Microsoft',
    icon: PieChart,
    color: 'from-yellow-500 to-orange-500',
    url: 'https://drive.google.com/file/d/1-rm0uTf_bY_OnYOaXboTZEwKe2EHteB8/view',
  },
  {
    name: 'Master in Data Science & Analytics with AI',
    issuer: 'IBM',
    icon: Code,
    color: 'from-green-500 to-teal-500',
    url: 'https://itvedant.skillsnetwork.site/certificates/4ab9c995-fe10-4386-92ad-400728b8f60c',
  },
  {
    name: 'Data Science & AI',
    issuer: 'IT Vedant',
    icon: Brain,
    color: 'from-red-500 to-pink-500',
    url: 'https://drive.google.com/file/d/1NsF8RSTDjfupW51uyNUlAzFw9ozXnkV6/view',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Professional certifications validating my expertise
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-dark-800/50 backdrop-blur-xl rounded-2xl border border-dark-700 overflow-hidden hover:border-dark-600 transition-all cursor-pointer"
              >
               {/* Gradient top */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`} />

              <div className="p-6 text-center">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <cert.icon className="text-white" size={32} />
                </motion.div>

                {/* Content */}
                <h3 className="text-white font-semibold mb-2 group-hover:text-primary-400 transition-colors text-sm">
                  {cert.name}
                </h3>
                <p className="text-dark-400 text-xs mb-4">{cert.issuer}</p>

                {/* Badge */}
                <div className="flex items-center justify-center gap-1 text-dark-500 text-xs">
                  <BadgeCheck size={14} className="text-green-500" />
                  <span>Certified</span>
                </div>
              </div>
            </motion.div>
             </a>
          ))}
        </div>
      </div>
    </section>
  );
}
