import React from 'react';
import * as motion from "motion/react-client";
import Navigation from '@/components/Navigation';
import { LuChevronDown, LuZap, LuMail, LuTrendingUp, LuSparkles, LuTwitch, LuLinkedin } from "react-icons/lu";
import { SiX } from 'react-icons/si';
import RevenueTracker from '@/components/escape-velocity/RevenueTracker';
import Link from 'next/link';

// Data that can be easily updated
const currentStats = {
  mrr: 0,
  totalRevenue: 22.21,
  apps: 0
};

const missions = [
  {
    name: "1K Challenge",
    description: (
      <>
        I joined{' '}
        <a
          href="https://aliabdaal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-400 hover:text-blue-300"
        >
          Ali Abdaal's
        </a>
        {' '} $1K Challenge to create and scale digital products to $1,000 in revenue each. This mission focuses on rapid product development, market validation, and scaling strategies to reach the first major revenue milestone.
      </>
    ),
    products: [
      { name: "A.S.S.E.T. AI Automation", image: "https://www.gstatic.com/android/keyboard/emojikitchen/20231113/u1f4da/u1f4da_u1f916.png", link: "https://stan.store/robindeneef/p/turn-ai-into-an-asset", status: "Buy", ctaType: "buy" },
      { name: "€1 Support Package", image: "https://www.gstatic.com/android/keyboard/emojikitchen/20250430/u1f4aa/u1f4aa_u1f48c.png", link: "https://stan.store/robindeneef/p/support-my-business-for-1-m3tbn671", ctaType: "support" },
      { name: "Ecommerce KPI Kit", image: "https://www.gstatic.com/android/keyboard/emojikitchen/20231113/u1f5bc-ufe0f/u1f5bc-ufe0f_u1f4c8.png", link: "https://stan.store/robindeneef/p/the-kpi-kit-every-ecommerce-founder-needs", status: "Pre Order", ctaType: "preorder" },
      { name: "Coming Soon", image: "https://www.gstatic.com/android/keyboard/emojikitchen/20231128/u2601-ufe0f/u2601-ufe0f_u2753.png", link: "#", status: "Planned" }
    ]
  },
  {
    name: "RevenueCat Shipathon",
    description: (
      <>RevenueCat is organising a mobile app hackaton with $300,000 in prizes. To participate I'm building an app based on the 12 week year that will use AI to give you one task a day to move the needle towards your goals.</>
    ),
    products: [
      { name: "MoveTheNeedle", link: "#", image: "https://www.gstatic.com/android/keyboard/emojikitchen/20240530/u1f3c6/u1f3c6_u1faa1.png", status: "In Development", ctaType: "development" }
    ]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Stars Background */}
      <div className="fixed inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Navigation />
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              Reaching Escape Velocity
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 sm:mb-4">
              My Journey to €10K Revenue
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl bg-gray-900 border border-gray-700 rounded-xl hover:border-purple-500 transition-colors">
            <RevenueTracker />
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-4">
          <div className="mx-auto w-64">
            <a
              href="https://robindeneef.substack.com"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 sm:px-6 py-2 sm:py-4 rounded-lg transition-colors text-lg sm:text-lg w-full sm:w-auto justify-center"
            >
              <LuMail className="w-6 h-6" />
              Follow Along
            </a>
          </div>
        </section>

        {/* Live Stats */}
        <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-6"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center justify-center gap-3">
              <LuTrendingUp className="text-blue-400" />
              Live Stats
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-blue-500 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
                  € {currentStats.totalRevenue.toLocaleString()}
                </div>
                <div className="text-sm sm:text-base text-gray-400">Total Revenue</div>
              </div>

              <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-purple-500 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">
                  € {currentStats.mrr.toLocaleString()}
                </div>
                <div className="text-sm sm:text-base text-gray-400">Monthly Recurring Revenue</div>
              </div>

              <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-pink-500 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-2">
                  {currentStats.apps}
                </div>
                <div className="text-sm sm:text-base text-gray-400">Apps Launched</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Current Missions */}
        <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center flex items-center justify-center gap-3">
              <LuSparkles className="text-blue-400" />
              Current Missions
            </h2>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              {missions.map((mission, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-blue-500 transition-colors group"
                >
                  <motion.details
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <summary className="text-lg sm:text-xl font-semibold text-blue-400 cursor-pointer flex items-center justify-between list-none">
                      <span className="flex items-center gap-3">
                        <LuZap className="w-5 h-5" />
                        {mission.name}
                      </span>
                      <LuChevronDown className="w-5 h-5 transform transition-transform duration-300 group-open:rotate-180" />
                    </summary>

                    <div className="mt-4">
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {mission.description}
                      </p>
                    </div>
                  </motion.details>
                  <div className="mt-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {mission.products.map((product, productIndex) => (
                        <Link
                          href={product.link || "#"}
                          key={productIndex}
                        >
                          <div className="min-h-full bg-gray-800 border border-gray-600 rounded-lg p-3 flex flex-col items-center justify-center">
                            <div className="flex flex-col items-center">
                            {product.image && (
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-20 h-20 mb-2 rounded"
                              />
                            )}
                            <p className="text-sm sm:text-base text-gray-300 flex items-center gap-1 text-center">
                              {product.name}
                            </p>
                            </div>
                            {/* CTA/Badge logic */}
                            {product.ctaType === 'buy' && product.link && product.link !== '#' && (
                              <p
                                className="mt-2 px-3 py-1 text-xs rounded-sm bg-green-700 text-white font-semibold hover:bg-green-800 transition-colors border border-green-500 shadow"
                              >
                                Buy Now
                              </p>
                            )}
                            {product.ctaType === 'download' && product.link && product.link !== '#' && (
                              <p
                                className="mt-2 px-3 py-1 text-xs rounded-sm bg-green-700 text-white font-semibold hover:bg-green-800 transition-colors border border-green-500 shadow"
                              >
                                Download
                              </p>
                            )}
                            {product.ctaType === 'preorder' && (
                              <span
                                className="mt-2 px-3 py-1 text-sm rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors border border-blue-500 shadow"
                              >
                                Preorder
                              </span>
                            )}
                            {product.ctaType === 'support' && (
                              <span
                                className="mt-2 px-3 py-1 text-sm rounded-md bg-yellow-700 text-white font-semibold hover:bg-yellow-800 transition-colors border border-yellow-500 shadow"
                              >
                                Support
                              </span>
                            )}
                            {product.ctaType === 'development' && (
                              <span className="mt-2 px-3 py-1 text-xs rounded-full bg-blue-900 text-blue-300 border border-blue-600 font-semibold">
                                In Development
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>



        {/* Footer */}
        <footer className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 text-center border-t border-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <p className="text-sm sm:text-base text-gray-400 px-4">
              Following my journey? Let's connect and support each other!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="https://robindeneef.substack.com"
                className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base w-auto justify-center"
              >
                <LuMail className="w-5 h-5" />
                Newsletter
              </a>
              <a
                href="https://twitter.com/robindeneef"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base w-auto justify-center"
              >
                <SiX className="w-5 h-5" />
                Follow on X
              </a>

              <a
                href="https://www.linkedin.com/in/robindeneef"
                className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base w-auto justify-center"
              >
                <LuLinkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://twitch.tv/HiNeph"
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base w-auto justify-center"
              >
                <LuTwitch className="w-5 h-5" />
                Check a Stream
              </a>

            </div>

            <p className="text-sm text-gray-500">
              Here's to reaching escape velocity! 🚀
            </p>
          </motion.div>
        </footer>
      </div>
    </div>
  );
}

export default App;