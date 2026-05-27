import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ForgeFireScene from './ForgeFireScene'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: 'MILITARY INQUIRY', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1500)
  }

  return (
    <section id="contact" className="py-24 bg-forge-black relative min-h-[800px]">
      <div className="container mx-auto px-6 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch h-full">
          
          {/* Left Form */}
          <motion.div
            className="section-fade"
            initial={{ opacity: 0, x: -50 }}
          >
            <h2 className="text-4xl md:text-5xl font-headlines text-ghost-white mb-12 uppercase tracking-[0.2em]">Inquire</h2>
            
            <div className="mb-16 space-y-6">
              <div>
                <h4 className="font-headlines text-aged-gold text-[10px] tracking-[0.3em] mb-2 uppercase">Registered Office</h4>
                <p className="font-body text-parchment/80 italic">11-A Rajpur Road, Dehradun, Uttarakhand 248001, India</p>
              </div>
              <div>
                <h4 className="font-headlines text-aged-gold text-[10px] tracking-[0.3em] mb-2 uppercase">Factory</h4>
                <p className="font-body text-parchment/80 italic">Village Balawala, Harrawala, Dehradun</p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-iron-dark border border-aged-gold/20 p-12 text-center"
                >
                  <p className="font-body text-aged-gold italic text-2xl leading-relaxed">
                    Your message has been received.<br />
                    The forge is working on your request.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 font-headlines text-[10px] tracking-widest text-parchment hover:text-aged-gold transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text" 
                      placeholder="NAME" 
                      className="bg-iron-dark border border-aged-gold/10 p-5 font-mono text-[10px] tracking-widest text-parchment outline-none focus:border-aged-gold transition-colors" 
                    />
                    <input 
                      required
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="EMAIL" 
                      className="bg-iron-dark border border-aged-gold/10 p-5 font-mono text-[10px] tracking-widest text-parchment outline-none focus:border-aged-gold transition-colors" 
                    />
                  </div>
                  <input 
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    type="text" 
                    placeholder="COMPANY" 
                    className="w-full bg-iron-dark border border-aged-gold/10 p-5 font-mono text-[10px] tracking-widest text-parchment outline-none focus:border-aged-gold transition-colors" 
                  />
                  <div className="relative">
                    <select 
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-iron-dark border border-aged-gold/10 p-5 font-mono text-[10px] tracking-widest text-parchment outline-none focus:border-aged-gold transition-colors appearance-none cursor-pointer"
                    >
                      <option value="MILITARY INQUIRY">SUBJECT: MILITARY INQUIRY</option>
                      <option value="PROPS / FILM">PROPS / FILM</option>
                      <option value="CUSTOM MANUFACTURING">CUSTOM MANUFACTURING</option>
                      <option value="PRESS">PRESS</option>
                      <option value="OTHER">OTHER</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-aged-gold">
                      ↓
                    </div>
                  </div>
                  <textarea 
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="MESSAGE" 
                    rows="6" 
                    className="w-full bg-iron-dark border border-aged-gold/10 p-5 font-mono text-[10px] tracking-widest text-parchment outline-none focus:border-aged-gold transition-colors resize-none"
                  ></textarea>
                  
                  <button 
                    disabled={status === 'sending'}
                    className="w-full py-6 bg-aged-gold text-forge-black font-headlines tracking-[0.4em] text-xs hover:bg-parchment transition-colors uppercase disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Fire Animation */}
          <div className="relative bg-iron-dark/30 border border-aged-gold/10 overflow-hidden min-h-[500px] lg:min-h-full section-fade">
             <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-forge-black via-transparent to-transparent" />
             <div className="absolute inset-0 z-0">
               <ForgeFireScene />
             </div>
             <div className="absolute bottom-12 left-12 z-20">
               <span className="font-headlines text-ghost-white text-4xl block mb-2 tracking-widest">FORGED IN</span>
               <span className="font-display text-aged-gold text-7xl tracking-[0.2em]">FIRE</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
