import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, ChevronDown, ChevronUp, Send } from "lucide-react";
import Button from "../components/Button";

const faqs = [
  { q: "What programming experience do I need?", a: "Most of our beginner courses require no prior experience. We start from the basics and gradually build up your skills. Each course page mentions the prerequisites." },
  { q: "How long do I have access to the course?", a: "You get lifetime access to all course materials, including future updates. Learn at your own pace without any time pressure." },
  { q: "Do you offer placement assistance?", a: "Yes! Our placement cell helps you with resume building, mock interviews, and connects you with 500+ hiring partner companies including Google, Amazon, Microsoft." },
  { q: "Can I get a refund if I'm not satisfied?", a: "We offer a 7-day money-back guarantee on all courses. If you're not satisfied, contact our support team for a full refund." },
  { q: "Are the certificates recognized by companies?", a: "Yes, our certificates are recognized by 500+ hiring partners. They are verified and can be added to your LinkedIn profile." },
  { q: "Do you offer live classes or recorded content?", a: "We offer both! Our courses include live sessions with instructors as well as HD recorded lectures you can watch anytime." },
];

const contactInfo = [
  { icon: <Mail size={20} />, title: "Email Us", value: "support@codingninjas.com", desc: "We reply within 24 hours" },
  { icon: <Phone size={20} />, title: "Call Us", value: "+91 12345 67890", desc: "Mon-Sat, 9 AM - 6 PM IST" },
  { icon: <MapPin size={20} />, title: "Visit Us", value: "Koramangala, Bangalore", desc: "India 560034" },
  { icon: <MessageCircle size={20} />, title: "Live Chat", value: "Available 24/7", desc: "Get instant help from our team" },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cn-dark to-cn-darker text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have a question or need help? We're here for you. Reach out and we'll respond quickly.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((c) => (
            <div key={c.title}
              className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-cn-orange/20
                hover:shadow-md transition-all duration-300 text-center">
              <div className="w-10 h-10 rounded-xl bg-cn-orange/10 text-cn-orange
                flex items-center justify-center mx-auto mb-3">
                {c.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{c.title}</h3>
              <p className="text-cn-orange font-semibold text-sm">{c.value}</p>
              <p className="text-gray-400 text-xs mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
              Send Us a <span className="gradient-text">Message</span>
            </h2>

            {submitted && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 animate-fade-in">
                <p className="text-green-700 font-semibold text-sm">
                  ✅ Message sent successfully! We'll get back to you within 24 hours.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm
                      focus:outline-none focus:border-cn-orange focus:ring-1 focus:ring-cn-orange/20
                      transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm
                      focus:outline-none focus:border-cn-orange focus:ring-1 focus:ring-cn-orange/20
                      transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="What is this about?"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm
                    focus:outline-none focus:border-cn-orange focus:ring-1 focus:ring-cn-orange/20
                    transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us more about your question..."
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm
                    focus:outline-none focus:border-cn-orange focus:ring-1 focus:ring-cn-orange/20
                    transition-all resize-none"
                ></textarea>
              </div>
              <Button variant="primary" size="lg" icon={<Send size={16} />}
                className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    className="w-full flex items-center justify-between p-4 text-left
                      hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-gray-900 text-sm pr-4">{faq.q}</span>
                    {openFaq === i
                      ? <ChevronUp size={18} className="text-cn-orange flex-shrink-0" />
                      : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
                    }
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 animate-fade-in">
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Contact;
