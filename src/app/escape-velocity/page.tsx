"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'motion/react';
import { Rocket, Users, Zap, Calendar, ExternalLink, Coffee, Twitter, Star, TrendingUp } from 'lucide-react';
// import  Navigation from '@/components/Navigation';
// import ProgressTracker from '@/components/escape-velocity/ProgressTracker';
// Data that can be easily updated
const currentStats = {
  mrr: 0,
  revenue: 0,
  apps: 0
};

const buildLog = [
  {
    date: "2025-01-15",
    title: "Website Launch",
    description: "Built this tracking website to document my journey to €10K MRR. The rocket awaits liftoff! 🚀"
  },
  {
    date: "2025-01-10",
    title: "First App Idea",
    description: "Validated my first SaaS idea through customer interviews. Time to start building."
  },
  {
    date: "2025-01-05",
    title: "The Journey Begins",
    description: "Decided to quit my day job and pursue indie hacking full-time. Here we go!"
  }
];

const apps = [
  {
    name: "TaskFlow Pro",
    description: "AI-powered task management for busy professionals",
    mrr: 0,
    status: "Testing",
    logo: "📋"
  },
  {
    name: "CodeSnap",
    description: "Beautiful code screenshot generator for developers",
    mrr: 0,
    status: "Active",
    logo: "📸"
  },
  {
    name: "MoodTracker",
    description: "Simple daily mood tracking with insights",
    mrr: 0,
    status: "Sunset",
    logo: "😊"
  }
];

const lessons = [
  "Ship fast, iterate faster. Perfect is the enemy of done.",
  "Talk to users daily. Their feedback is pure gold.",
  "Focus on one metric that matters. For me, it's MRR.",
  "Consistency beats intensity. Small daily progress wins."
];

const milestones = [
  { amount: 0, label: "Launch" },
  { amount: 100, label: "First €100" },
  { amount: 500, label: "Ramen Profitable" },
  { amount: 1000, label: "€1K MRR" },
  { amount: 2500, label: "€2.5K MRR" },
  { amount: 5000, label: "€5K MRR" },
  { amount: 10000, label: "Escape Velocity!" }
];

function RocketProgressTracker({ currentMRR }: { currentMRR: number }) {
  const maxMRR = 10000;
  const progress = Math.min((currentMRR / maxMRR) * 100, 100);
  const rocketControls = useAnimation();

  useEffect(() => {
    rocketControls.start({
      y: `€{100 - progress}%`,
      transition: { duration: 2, ease: "easeOut" }
    });
  }, [progress, rocketControls]);

  return (
    <div className="relative w-24 sm:w-32 h-64 sm:h-96 mx-auto">
      {/* Progress Track */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="w-full bg-gradient-to-t from-blue-600 via-purple-600 to-pink-500"
          initial={{ height: "0%" }}
          animate={{ height: `€{progress}%` }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>

      {/* Milestones */}
      {milestones.map((milestone, index) => {
        const position = (milestone.amount / maxMRR) * 100;
        const isReached = currentMRR >= milestone.amount;
        
        return (
          <div
            key={milestone.amount}
            className="absolute right-4 sm:right-6 transform -translate-y-1/2"
            style={{ bottom: `€{position}%` }}
          >
            <div className="flex items-center gap-2">
              <div className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full border-2 €{
                isReached 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-blue-400' 
                  : 'bg-gray-800 border-gray-600'
              }`} />
              <div className="text-right">
                <div className={`text-xs sm:text-sm font-medium €{
                  isReached ? 'text-blue-400' : 'text-gray-400'
                }`}>
                  €{milestone.amount.toLocaleString()}
                </div>
                <div className="text-xs sm:text-xs text-gray-500 hidden sm:block">{milestone.label}</div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Rocket */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl z-10"
        style={{ bottom: "0%" }}
        animate={rocketControls}
        whileHover={{ scale: 1.1 }}
      >
        <div className="relative">
          <div className="text-2xl sm:text-4xl">🚀</div>
          {progress > 0 && (
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <div className="text-sm sm:text-base text-orange-400">🔥</div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors = {
    Active: 'bg-green-900 text-green-300 border-green-600',
    Testing: 'bg-yellow-900 text-yellow-300 border-yellow-600',
    Sunset: 'bg-red-900 text-red-300 border-red-600'
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-full border €{colors[status as keyof typeof colors]}`}>
      {status}
    </span>
  );
}

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
              left: `€{Math.random() * 100}%`,
              top: `€{Math.random() * 100}%`,
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
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-12 sm:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              Reaching Escape Velocity
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 sm:mb-4">
              My Journey to €10K 
            </p>
  
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-4 sm:mb-4 container mx-auto max-w-3xl"
          >
        
            {/* <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-blue-500 transition-colors">

              <ProgressTracker />
            </div> */}
            <RocketProgressTracker currentMRR={currentStats.mrr} />
          </motion.div>
        </section>

        {/* Live Stats */}
        <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center justify-center gap-3">
              <TrendingUp className="text-blue-400" />
              Live Stats
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-blue-500 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
                  €{currentStats.mrr.toLocaleString()}
                </div>
                <div className="text-sm sm:text-base text-gray-400">Monthly Recurring Revenue</div>
              </div>
              
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-purple-500 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">
                  €{currentStats.revenue.toLocaleString()}
                </div>
                <div className="text-sm sm:text-base text-gray-400">Total Revenue</div>
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

        {/* Build Log */}
        <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center flex items-center justify-center gap-3">
              <Calendar className="text-blue-400" />
              Captain's Log
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
              {buildLog.map((entry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-blue-500 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                    <div className="text-blue-400 text-xs sm:text-sm font-medium sm:min-w-24">
                      {new Date(entry.date).toLocaleDateString()}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold mb-2">{entry.title}</h3>
                      <p className="text-sm sm:text-base text-gray-400">{entry.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Apps Section */}
        <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center flex items-center justify-center gap-3">
              <Rocket className="text-blue-400" />
              Apps I'm Building
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {apps.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-2xl sm:text-3xl">{app.logo}</div>
                    <StatusBadge status={app.status} />
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{app.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{app.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm sm:text-base text-blue-400 font-semibold">
                      €{app.mrr}/mo
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Lessons Learned */}
        <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center flex items-center justify-center gap-3">
              <Star className="text-blue-400" />
              Lessons Learned
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {lessons.map((lesson, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-blue-500 transition-colors"
                >
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">"{lesson}"</p>
                </motion.div>
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
                href="https://twitter.com/yourusername"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <Twitter className="w-5 h-5" />
                Follow on X
              </a>
              
              <a
                href="https://buymeacoffee.com/yourusername"
                className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <Coffee className="w-5 h-5" />
                Support My Journey
              </a>
            </div>
            
            <p className="text-sm text-gray-500">
              Built with ❤️ and a lot of coffee. Here's to reaching escape velocity! 🚀
            </p>
          </motion.div>
        </footer>
      </div>
    </div>
  );
}

export default App;