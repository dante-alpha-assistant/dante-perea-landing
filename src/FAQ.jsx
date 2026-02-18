import { useState } from 'react'

const faqs = [{"question":"What is a VPS?","answer":"A VPS (Virtual Private Server) is a virtual machine sold as a service by an Internet hosting service. It offers a private, isolated environment with dedicated resources for your applications."},{"question":"How quickly can I deploy my VPS?","answer":"Our automated system allows for near-instant deployment. Your VPS will typically be ready to use within minutes of your order confirmation."},{"question":"Can I upgrade my VPS plan later?","answer":"Yes, you can easily upgrade or downgrade your VPS plan at any time through our control panel to perfectly match your evolving resource needs."},{"question":"Do you offer full root access?","answer":"Absolutely. All our VPS plans come with full root access, giving you complete control over your server environment and software installations."},{"question":"What operating systems are supported?","answer":"We support a wide range of Linux distributions including Ubuntu, CentOS, Debian, Fedora, and more. Windows Server options are also available."},{"question":"What kind of support is available?","answer":"We offer 24/7 technical support via ticketing and live chat, staffed by experienced professionals ready to assist with any server-related issues."}];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((item, i) => (
        <div key={i} className="border border-gray-800 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left text-white hover:bg-white/5 transition-colors"
          >
            <span className="font-medium">{item.question}</span>
            <span className={`transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}>▾</span>
          </button>
          {open === i && (
            <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
