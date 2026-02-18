import FAQ from './FAQ.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-gray-950/80 border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-xl font-bold">FastVPS</span>
          <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a>
          <a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">How It Works</a>
          <a href="#faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</a>
          <a href="#get-started" className="text-sm text-gray-400 hover:text-white transition-colors">Get Started</a>
          </div>
          <a href="#get-started" className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition-colors">Launch Your Server Now</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent" />
        <div className="max-w-4xl mx-auto text-center py-24 md:py-32 px-6 relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">Achieve Blazing-Fast Performance Without Downtime Worries</h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">FastVPS provides developers and businesses with highly reliable and scalable virtual private servers, ensuring your applications run optimally 24/7.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#get-started" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-lg font-medium transition-colors">Launch Your Server Now</a>
            <a href="#how-it-works" className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-gray-700 rounded-xl text-lg font-medium transition-colors">See Our Plans</a>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="border-y border-gray-800/50 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 text-sm">
          <span className="text-gray-500">Trusted by 5,000+ developers and businesses</span>
          <span className="text-gray-600 font-medium">TechGrowth Solutions</span>
          <span className="text-gray-600 font-medium">InnovateCo</span>
          <span className="text-gray-600 font-medium">Global Web Studios</span>
          <span className="text-gray-600 font-medium">Digital Pioneers</span>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-6xl mx-auto py-20 md:py-28 px-6" id="problem">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tired of slow, unreliable, and overly complex VPS hosting?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Many developers and businesses struggle with hosting solutions that hinder their growth and productivity.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">🐌</div>
          <h4 className="font-semibold text-white mb-2">Lagging Performance</h4>
          <p className="text-gray-400 text-sm">Slow server response times and inconsistent uptime frustrate users and damage your brand.</p>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">💸</div>
          <h4 className="font-semibold text-white mb-2">Hidden Costs & Complexity</h4>
          <p className="text-gray-400 text-sm">Unexpected bills and complicated setups make managing your VPS a constant headache.</p>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">⛔</div>
          <h4 className="font-semibold text-white mb-2">Lack of Control & Support</h4>
          <p className="text-gray-400 text-sm">Feeling stuck with limited customization options and unhelpful customer service when issues arise.</p>
        </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-gradient-to-b from-blue-600/5 to-transparent">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Unlock unparalleled speed and control with FastVPS.</h2>
          <p className="text-gray-400 text-lg leading-relaxed">We offer robust virtual private servers engineered for maximum performance and reliability. Get full root access, dedicated resources, and expert support to power your projects with confidence.</p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto py-20 md:py-28 px-6" id="features">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold">Everything you need</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
          <div className="text-3xl mb-4">⚡</div>
          <h3 className="text-lg font-semibold text-white mb-2">Lightning-Fast SSD Storage</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Experience superior read/write speeds that make your applications and websites load instantaneously.</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
          <div className="text-3xl mb-4">🔒</div>
          <h3 className="text-lg font-semibold text-white mb-2">Guaranteed Resource Allocation</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Your server gets dedicated CPU and RAM, ensuring consistent, high performance without resource contention.</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
          <div className="text-3xl mb-4"> ascension </div>
          <h3 className="text-lg font-semibold text-white mb-2">Scalable Infrastructure</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Easily upgrade your resources as your needs grow, adapting seamlessly to increasing traffic and demands.</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
          <div className="text-3xl mb-4">👨‍💻</div>
          <h3 className="text-lg font-semibold text-white mb-2">24/7 Expert Support</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Get quick, knowledgeable assistance from our team whenever you need it, minimizing downtime and frustration.</p>
        </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-gray-900/30" id="how-it-works">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold">Launch your high-performance VPS in minutes.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
          <h4 className="font-semibold text-white mb-2">Choose Your Plan</h4>
          <p className="text-gray-400 text-sm">Select the VPS package that best suits your performance and resource requirements.</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
          <h4 className="font-semibold text-white mb-2">Configure Your Server</h4>
          <p className="text-gray-400 text-sm">Customize your operating system, location, and additional features with ease.</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
          <h4 className="font-semibold text-white mb-2">Deploy & Conquer</h4>
          <p className="text-gray-400 text-sm">Your VPS is ready in moments. Start building, hosting, and scaling your projects instantly.</p>
        </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto py-20 md:py-28 px-6" id="pricing">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible plans for every project and budget.</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Find the perfect virtual private server solution to power your online presence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-900 border-gray-800 border rounded-2xl p-8 flex flex-col">
          
          <h4 className="text-xl font-bold text-white">Starter</h4>
          <div className="mt-4 mb-2"><span className="text-4xl font-bold text-white">\$5</span><span className="text-gray-500">mo</span></div>
          <p className="text-sm text-gray-400 mb-6">Ideal for personal projects and small-scale applications.</p>
          <ul className="space-y-3 mb-8 flex-1">
            <li className="flex items-center gap-2 text-sm text-gray-300"><span className="text-green-400">✓</span>1 vCPU Core</li>
            <li className="flex items-center gap-2 text-sm text-gray-300"><span className="text-green-400">✓</span>1GB RAM</li>
            <li className="flex items-center gap-2 text-sm text-gray-300"><span className="text-green-400">✓</span>25GB SSD Storage</li>
            <li className="flex items-center gap-2 text-sm text-gray-300"><span className="text-green-400">✓</span>1TB Bandwidth</li>
            <li className="flex items-center gap-2 text-sm text-gray-300"><span className="text-green-400">✓</span>Full Root Access</li>
          </ul>
          <button className="bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-medium transition-colors">Get Started Free</button>
        </div>
        <div className="bg-blue-600/10 border-blue-500/50 ring-1 ring-blue-500/20 border rounded-2xl p-8 flex flex-col">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">Most Popular</div>
          <h4 className="text-xl font-bold text-white">Pro</h4>
          <div className="mt-4 mb-2"><span className="text-4xl font-bold text-white">\$12</span><span className="text-gray-500">mo</span></div>
          <p className="text-sm text-gray-400 mb-6">Perfect for growing websites, APIs, and development environments.</p>
          <ul className="space-y-3 mb-8 flex-1">
            <li className="flex items-center gap-2 text-sm text-gray-300"><span className="text-green-400">✓</span>2 vCPU Cores</li>
            <li className="flex items-center gap-2 text-sm text-gray-300"><span className="text-green-400">✓</span>4GB RAM</li>
            <li className="flex items-center gap-2 text-sm text-gray-300"><span className="text-green-400">✓</span>80GB SSD Storage</li>
            <li className="flex items-center gap-2 text-sm text-gray-300"><span className="text-green-400">✓</span>4TB Bandwidth</li>
            <li className="flex items-center gap-2 text-sm text-gray-300"><span className="text-green-400">✓</span>Advanced Security</li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-medium transition-colors">Choose Pro Plan</button>
        </div>
        <div className="bg-gray-900 border-gray-800 border rounded-2xl p-8 flex flex-col">
          
          <h4 className="text-xl font-bold text-white">Enterprise</h4>
          <div className="mt-4 mb-2"><span className="text-4xl font-bold text-white">\$48</span><span className="text-gray-500">mo</span></div>
          <p className="text-sm text-gray-400 mb-6">Robust solution for high-traffic applications and complex systems.</p>
          <ul className="space-y-3 mb-8 flex-1">
            <li className="flex items-center gap-2 text-sm text-gray-300"><span className="text-green-400">✓</span>8 vCPU Cores</li>
            <li className="flex items-center gap-2 text-sm text-gray-300"><span className="text-green-400">✓</span>16GB RAM</li>
            <li className="flex items-center gap-2 text-sm text-gray-300"><span className="text-green-400">✓</span>320GB SSD Storage</li>
            <li className="flex items-center gap-2 text-sm text-gray-300"><span className="text-green-400">✓</span>10TB Bandwidth</li>
            <li className="flex items-center gap-2 text-sm text-gray-300"><span className="text-green-400">✓</span>Dedicated IP & Backup</li>
          </ul>
          <button className="bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-medium transition-colors">Contact Sales</button>
        </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">What People Say</p>
            <h2 className="text-3xl md:text-4xl font-bold">Loved by early adopters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <p className="text-gray-300 text-sm italic mb-4">"FastVPS transformed our website's performance. Page load times dropped by 40%, and our user engagement skyrocketed!"</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">S</div>
            <div>
              <p className="text-white font-medium text-sm">Sarah Chen</p>
              <p className="text-gray-500 text-xs">CTO at Innovate Solutions</p>
            </div>
          </div>
          <div className="mt-3 text-xs text-blue-400 font-medium">40% faster load times</div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <p className="text-gray-300 text-sm italic mb-4">"The uptime guarantee with FastVPS is no joke. We've experienced 99.99% uptime for over a year, which is critical for our e-commerce platform."</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">M</div>
            <div>
              <p className="text-white font-medium text-sm">Mark Johnson</p>
              <p className="text-gray-500 text-xs">Founder of OnlineRetailer</p>
            </div>
          </div>
          <div className="mt-3 text-xs text-blue-400 font-medium">99.99% uptime</div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <p className="text-gray-300 text-sm italic mb-4">"Setting up our development environment on FastVPS was incredibly easy, and their support team resolved my query in under 15 minutes. Highly recommend!"</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">J</div>
            <div>
              <p className="text-white font-medium text-sm">Jessica Lee</p>
              <p className="text-gray-500 text-xs">Lead Developer at CodeCrafters</p>
            </div>
          </div>
          <div className="mt-3 text-xs text-blue-400 font-medium">15-minute support resolution</div>
        </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto py-20 md:py-28 px-6" id="faq">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold">Frequently asked questions</h2>
        </div>
        <FAQ />
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-blue-600/10 to-transparent" id="get-started">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to experience uncompromised VPS performance?</h2>
          <p className="text-gray-400 text-lg mb-8">Join thousands of satisfied users who power their projects with FastVPS. Get started today and elevate your online presence.</p>
          <a href="#" className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl text-lg font-medium transition-colors">Launch Your Server Now</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-bold text-lg">FastVPS</span>
          <p className="text-gray-500 text-sm">© 2026 FastVPS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
