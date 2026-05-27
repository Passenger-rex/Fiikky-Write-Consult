import React, { useState } from "react";
import { Send, CheckCircle2, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("Book Publishing Inquiry");
  const [message, setMessage] = useState<string>("");
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      return;
    }

    setIsSubmitting(true);

    // Format the email message body and subject
    const emailSubject = `[Inquiry] ${subject}`;
    const emailBody = `Dear Fikky Write Consult team,

I would like to initiate an inquiry. Below are my submission details:

Full Name: ${name}
Email Address: ${email}
Subject: ${subject}

Message/Project Details:
---------------------------------------------
${message}
---------------------------------------------

Thank you,
${name}`;

    const mailtoUrl = `mailto:fikkywriteconsult@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Simulate direct secure transmission & open the local mail client
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      
      // Trigger native email application
      window.location.href = mailtoUrl;
    }, 1200);
  };

  const resetFormState = () => {
    setName("");
    setEmail("");
    setSubject("Book Publishing Inquiry");
    setMessage("");
    setShowSuccessModal(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-8 bg-surface-low text-text-dark border-t border-neutral-300">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Contact info panel with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-12 text-left" 
          id="contact-info-panel"
        >
          <div className="space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-primary">Prestige Connection</span>
            <h2 className="font-serif text-4xl md:text-5.5xl font-bold leading-tight text-text-dark">
              Let's Craft Your Story.
            </h2>
            <p className="font-sans text-text-muted text-base md:text-lg leading-relaxed">
              Ready to take the next step in your publishing journey? Contact us for a consultation or to inquire about our premium ghostwriting packages.
            </p>
          </div>
        </motion.div>

        {/* Contact Form with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white p-8 md:p-12 text-text-dark border border-neutral-200 relative" 
          id="contact-form-panel"
        >
          
          <form onSubmit={handleSubmit} className="space-y-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 flex flex-col">
                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-dark">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border-0 border-b border-neutral-300 p-0 pb-3 focus:ring-0 focus:border-primary bg-transparent text-sm text-text-dark focus:outline-none"
                />
              </div>
              <div className="space-y-2 flex flex-col">
                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-dark">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border-0 border-b border-neutral-300 p-0 pb-3 focus:ring-0 focus:border-primary bg-transparent text-sm text-text-dark focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2 flex flex-col pt-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-dark">Subject</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full border-0 border-b border-neutral-300 p-0 pb-3 focus:ring-0 focus:border-primary bg-transparent text-sm text-text-dark appearance-none focus:outline-none cursor-pointer"
              >
                <option value="Book Publishing Inquiry">Book Publishing Inquiry</option>
                <option value="Ghostwriting Package">Ghostwriting Package</option>
                <option value="The Profitable Penman">The Profitable Penman</option>
                <option value="Other Services">Other Services</option>
              </select>
            </div>

            <div className="space-y-2 flex flex-col pt-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-dark">Message</label>
              <textarea
                placeholder="Tell us about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full border-0 border-b border-neutral-300 p-0 pb-3 focus:ring-0 focus:border-primary bg-transparent text-sm text-text-dark resize-none focus:outline-none"
              />
            </div>

            <button
              id="submit-contact-form-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white border border-primary py-5 font-sans text-xs uppercase tracking-widest font-bold hover:bg-primary-hover transition-all duration-300 active:scale-[0.98] outline-none cursor-pointer flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-wait"
            >
              {isSubmitting ? (
                <>
                  <Clock className="w-3.5 h-3.5 animate-spin" /> Transmitting Details...
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" /> Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Success Modal Panel */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            id="success-booking-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              id="success-modal-card"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white text-text-dark border-2 border-text-dark max-w-xl w-full p-8 md:p-10 text-left space-y-6"
            >
              <div className="flex flex-col items-center text-center space-y-4 py-6">
                <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center border border-blue-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-text-dark">Email Draft Ready</h3>
                <p className="text-sm text-neutral-500 max-w-md leading-relaxed">
                  We have prepared your message and launched your device's <strong>default email app</strong> to send this inquiry directly to <strong>fikkywriteconsult@gmail.com</strong>.
                </p>
                <p className="text-xs text-neutral-400 max-w-sm">
                  If your email app did not open automatically, please click the "Launch Email App" button below to transmit your draft.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-2">
                  <a
                    href={`mailto:fikkywriteconsult@gmail.com?subject=${encodeURIComponent(`[Inquiry] ${subject}`)}&body=${encodeURIComponent(`Dear Fikky Write Consult team,

I would like to initiate an inquiry. Below are my submission details:

Full Name: ${name}
Email Address: ${email}
Subject: ${subject}

Message/Project Details:
---------------------------------------------
${message}
---------------------------------------------

Thank you,
${name}`)}`}
                    className="px-6 py-4 bg-primary text-white text-xs uppercase tracking-widest font-bold hover:bg-primary-hover transition-all text-center flex-1 block"
                  >
                    Launch Email App
                  </a>
                  <button
                    id="finish-booking-btn"
                    onClick={resetFormState}
                    className="px-6 py-4 bg-neutral-100 hover:bg-neutral-200 text-text-dark text-xs uppercase tracking-widest font-bold transition-all text-center flex-1 cursor-pointer border border-neutral-300"
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
