import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiShield, 
  FiEye, 
  FiZap, 
  FiCheckCircle,
  FiArrowRight,
  FiPlay,
  FiStar,
  FiLock,
  FiTrendingUp,
  FiUsers
} from 'react-icons/fi';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1604011237320-8e0506614fdf)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <FiShield className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold">bugeater.ai</h1>
            </div>
            <p className="text-green-400 text-lg font-medium">Your Cyber Shield</p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Secure Your Database,
            <br />
            <span className="text-green-400">Ensure Data Integrity</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Bugeater helps you track database security with real-time monitoring and threat detection tools.
            Protect your enterprise data with AI-powered cybersecurity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="group bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center space-x-2">
              <span>Get a Demo</span>
              <FiPlay className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <span>Try Bugeater for Free</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-6">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1524169220946-12efd782aab4)'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful <span className="text-green-400">Security Features</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI-powered tools to protect your database infrastructure from cyber threats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FiShield,
                title: "AI Copilot",
                description: "Intelligent threat detection powered by machine learning algorithms"
              },
              {
                icon: FiEye,
                title: "Vulnerability Scanner",
                description: "Comprehensive scanning to identify security weaknesses and risks"
              },
              {
                icon: FiZap,
                title: "Real-time Alerts",
                description: "Instant notifications for critical security events and breaches"
              },
              {
                icon: FiCheckCircle,
                title: "Compliance Monitoring",
                description: "Automated compliance checks for industry standards and regulations"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10"
              >
                <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-xl font-semibold mb-4 group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-slate-900 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-green-400">Bugeater</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: "⚡", title: "Fast", description: "Lightning-fast threat detection and response times" },
              { icon: "🔒", title: "Secure", description: "Enterprise-grade security with zero compromise" },
              { icon: "📊", title: "Insights", description: "Deep analytics and actionable security insights" },
              { icon: "👍", title: "Trusted", description: "Trusted by leading enterprises worldwide" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
              What Our Users Say
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10"
            >
              <div className="flex items-center mb-6">
                <img
                  src="https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg"
                  alt="Sarah Johnson"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">Sarah Johnson</h4>
                  <p className="text-green-400">CTO, Fintech Startup</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 text-green-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                "Bugeater's AI Copilot found vulnerabilities our team missed. Highly recommend!"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10"
            >
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1610631066894-62452ccb927c"
                  alt="Michael Chen"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">Michael Chen</h4>
                  <p className="text-green-400">Security Lead, Healthcare Org</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 text-green-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                "The real-time alerts are a game changer for our compliance team."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Screenshot Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-gray-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Comprehensive
                <br />
                <span className="text-green-400">Security Dashboard</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Monitor your database security in real-time with our intuitive dashboard. 
                Get instant insights into threats, vulnerabilities, and compliance status.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <FiTrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg">Real-time threat monitoring</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <FiLock className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg">Advanced vulnerability assessment</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <FiUsers className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg">Team collaboration tools</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <img
                  src="https://images.unsplash.com/photo-1545063328-c8e3faffa16f"
                  alt="Bugeater Dashboard"
                  className="relative w-full h-auto rounded-2xl shadow-2xl border border-slate-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-green-500/10 via-transparent to-green-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Secure Your
              <br />
              <span className="text-green-400">Database?</span>
            </h3>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of enterprises who trust Bugeater to protect their critical data infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-green-500 hover:bg-green-400 text-black font-semibold px-10 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center space-x-2 text-lg">
                <span>Start Free Trial</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-semibold px-10 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-lg">
                <span>Schedule Demo</span>
                <FiPlay className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-slate-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <FiShield className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-bold">bugeater.ai</h4>
              </div>
              <p className="text-green-400 text-lg mb-4">Your Cyber Shield</p>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Protecting enterprise databases with AI-powered cybersecurity solutions. 
                Trusted by organizations worldwide.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold text-lg mb-6">Product</h5>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Enterprise</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-lg mb-6">Company</h5>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bugeater.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;