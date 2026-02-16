import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import BlobBackground from '../components/BlobBackground';
import LiquidDivider from '../components/LiquidDivider';
import FeatureCard from '../components/FeatureCard';
import MagneticButton from '../components/MagneticButton';
import ScrollytellingAbout from '../components/ScrollytellingAbout';
import VideoReel from '../components/VideoReel';
import CareerOutcomesDashboard from '../components/CareerOutcomesDashboard';

const courses = [
  { icon: '💻', title: 'Computer Science', description: 'AI, Machine Learning, Data Science, and Cyber Security.', href: '/courses#computer-science', variant: 'blue' },
  { icon: '⚡', title: 'Electrical & Electronics', description: 'Power Systems, EV Tech, and Integrated Circuits.', href: '/courses#electrical-electronics', variant: 'gold' },
  { icon: '🏗️', title: 'Civil Engineering', description: 'Smart Infrastructure, Green Buildings, and Urban Planning.', href: '/courses#civil-engineering', variant: 'blue' },
  { icon: '⚙️', title: 'Mechanical', description: 'Robotics, Automotive Design, and Aerospace.', href: '/courses#mechanical', variant: 'crimson' },
  { icon: '🧪', title: 'Chemical Engineering', description: 'Process Optimization, Biotechnology, and Sustainable Energy.', href: '/courses#chemical-engineering', variant: 'gold' },
  { icon: '🍽️', title: 'Food Technology', description: 'Advanced Processing, Packaging, and Quality Management.', href: '/courses#food-technology', variant: 'crimson' },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  return (
    <>
      <BlobBackground />

      <header
        ref={heroRef}
        id="home"
        className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-8 pb-20 overflow-hidden"
      >
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur border border-black/5 text-sm font-medium text-primary-blue mb-6">
            Premier Engineering Institute
          </span>
          <motion.h1
            className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-blue leading-tight mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            Your future driven at{' '}
            <span className="bg-gradient-to-r from-primary-blue to-primary-crimson bg-clip-text text-transparent">
              Amal Jyothi
            </span>
          </motion.h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10">
            Experience a world-class campus with NAAC A++ accreditation. Where technology meets tradition in the heart of Kerala.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <MagneticButton to="/#courses" size="lg" primary>
              Explore Programs →
            </MagneticButton>
            <MagneticButton to="/#about" size="lg" primary={false}>
              The AJCE Way
            </MagneticButton>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-14 p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg max-w-3xl mx-auto">
            <div className="text-center">
              <div className="font-heading text-2xl md:text-3xl text-primary-blue font-bold">70+</div>
              <div className="text-text-muted text-sm">Years of Engineering</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-2xl md:text-3xl text-primary-crimson font-bold">100%</div>
              <div className="text-text-muted text-sm">Placement Support</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-2xl md:text-3xl text-accent-gold font-bold">A++</div>
              <div className="text-text-muted text-sm">Highest NAAC Grade</div>
            </div>
          </div>
        </motion.div>
      </header>

      <LiquidDivider fillClass="bg-bg-light" />

      <section id="campus-vibe" className="py-20 md:py-28 bg-bg-light">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <span className="text-sm font-medium text-primary-crimson">Life at AJCE</span>
            <h2 className="font-heading text-3xl md:text-4xl text-primary-blue mt-2">Campus Vibe</h2>
          </motion.div>
          <div
            className="grid gap-4 md:gap-6"
            style={{
              gridTemplateColumns: 'repeat(6, 1fr)',
              gridTemplateRows: 'repeat(3, minmax(140px, 1fr))',
            }}
          >
            <div
              className="rounded-2xl overflow-hidden bg-primary-blue/10 border border-black/5 md:col-span-4 md:row-span-2 min-h-[200px] md:min-h-[280px] bg-cover bg-center"
              style={{ backgroundImage: "url('https://www.ajce.in/home/images/Gallery-widget_ajce.jpg')" }}
            >
              <div className="h-full flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="font-heading text-xl text-white">Vibrant Campus</h3>
                <p className="text-white/90 text-sm">Experience a world-class environment in the foothills of Kanjirappally.</p>
              </div>
            </div>
            <div className="rounded-2xl bg-primary-blue/90 p-6 flex flex-col justify-center md:col-span-2 md:row-span-1 text-white">
              <span className="text-3xl mb-2">💼</span>
              <h3 className="font-heading text-lg">Top Placements</h3>
              <p className="text-white/90 text-sm">Recruiters from Google, Infosys, TCS & more.</p>
              <span className="text-primary-crimson font-bold mt-2">500+ Offers</span>
            </div>
            <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-black/5 p-6 flex flex-col justify-center md:col-span-2 md:row-span-1">
              <span className="text-3xl mb-2">🚀</span>
              <h3 className="font-heading text-lg text-primary-blue">Startups Valley</h3>
              <p className="text-text-muted text-sm">Kerala&apos;s largest TBI for student entrepreneurs.</p>
              <Link to="/#video-reel" className="text-primary-crimson font-medium text-sm mt-2 inline-flex items-center gap-1">
                Watch reels <span>→</span>
              </Link>
            </div>
            <div
              className="rounded-2xl overflow-hidden min-h-[120px] md:min-h-[140px] bg-cover bg-center md:col-span-2"
              style={{ backgroundImage: "url('https://www.ajce.in/home/images/Gallery-widge_canteent.jpg')" }}
            >
              <div className="h-full flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="font-heading text-white">Azure</h3>
                <p className="text-white/90 text-sm">Arts Fest</p>
              </div>
            </div>
            <div
              className="rounded-2xl overflow-hidden min-h-[120px] md:min-h-[140px] bg-cover bg-center md:col-span-2"
              style={{ backgroundImage: "url('https://www.ajce.in/home/images/sports-2018_Gallery-widget.jpg')" }}
            >
              <div className="h-full flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="font-heading text-white">Arena</h3>
                <p className="text-white/90 text-sm">Sports Glory</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollytellingAbout />

      <LiquidDivider fillClass="bg-bg-white" />

      <section id="courses" className="py-20 md:py-28 bg-bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-primary-blue">
              Our <span className="text-primary-crimson">Courses</span>
            </h2>
            <p className="text-text-muted mt-2 max-w-xl mx-auto">Industry-focused engineering programs for the next generation.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c) => (
              <FeatureCard
                key={c.title}
                icon={c.icon}
                title={c.title}
                description={c.description}
                href={c.href}
                variant={c.variant}
                linkLabel="Explore"
              />
            ))}
          </div>
        </div>
      </section>

      <CareerOutcomesDashboard
        stats={{ placements: 500, companies: 120, avgPackage: '8.5 LPA', higherStudies: 15 }}
        employerLogos={[]}
      />

      <VideoReel videos={[]} />

      <section id="admission" className="py-20 md:py-28 bg-bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-black/5 shadow-xl p-8 md:p-12">
            <h2 className="font-heading text-2xl md:text-3xl text-primary-blue mb-4">
              <span className="text-primary-crimson">Admissions</span> 2026
            </h2>
            <p className="text-text-muted mb-8">
              Secure your seat in one of top-ranked engineering colleges. Admission is based on performance in Entrance Exams and Academic Excellence.
            </p>
            <MagneticButton to="/admissions" size="lg" primary>
              Apply Now
            </MagneticButton>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-28 bg-bg-light">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h2 className="font-heading text-3xl md:text-4xl text-primary-blue text-center mb-2">
            Contact <span className="text-primary-crimson">Us</span>
          </h2>
          <p className="text-text-muted text-center mb-12">We are here to help you. Reach out for any queries.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-black/5 shadow-lg p-8 space-y-6">
              <div className="flex gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h4 className="font-semibold text-primary-blue">Visit Us</h4>
                  <p className="text-text-muted text-sm">Kanjirappally, Koovappally P.O.<br />Kottayam, Kerala - 686518</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <h4 className="font-semibold text-primary-blue">Call Us</h4>
                  <p className="text-text-muted text-sm">+91 4828 305500, 305501</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <h4 className="font-semibold text-primary-blue">Email Us</h4>
                  <p className="text-text-muted text-sm">info@amaljyothi.ac.in</p>
                </div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-black/5 shadow-lg p-8" id="contact-form">
              <h3 className="font-heading text-xl text-primary-blue mb-6">Send Us a Message</h3>
              {contactSubmitted ? (
                <p className="text-primary-crimson flex items-center gap-2">
                  <span>✓</span> Thank you! Your message has been sent successfully.
                </p>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setContactSubmitted(true); }}
                  className="space-y-4"
                >
                  <input type="text" placeholder="Full Name" required className="w-full rounded-xl border border-black/10 px-4 py-3 focus:ring-2 focus:ring-primary-crimson focus:border-transparent outline-none" />
                  <input type="email" placeholder="Email Address" required className="w-full rounded-xl border border-black/10 px-4 py-3 focus:ring-2 focus:ring-primary-crimson focus:border-transparent outline-none" />
                  <input type="tel" placeholder="Phone Number" required className="w-full rounded-xl border border-black/10 px-4 py-3 focus:ring-2 focus:ring-primary-crimson focus:border-transparent outline-none" />
                  <select required className="w-full rounded-xl border border-black/10 px-4 py-3 focus:ring-2 focus:ring-primary-crimson focus:border-transparent outline-none bg-white">
                    <option value="">Select Subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="academics">Academic Programs</option>
                    <option value="placements">Placements & Careers</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea placeholder="Your Message" rows={4} required className="w-full rounded-xl border border-black/10 px-4 py-3 focus:ring-2 focus:ring-primary-crimson focus:border-transparent outline-none resize-none" />
                  <MagneticButton type="submit" size="md" primary>Submit Message</MagneticButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary-blue text-text-light py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <img src="https://www.ajce.in/home/images/ajcelogo_2.jpg" alt="AJCE Logo" className="h-14 w-auto rounded mb-4" loading="lazy" width={140} height={56} />
              <p className="text-white/80 text-sm">Amal Jyothi College of Engineering<br />Kanjirappally, Kerala, India</p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Explore</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><Link to="/#about">About Us</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/#admission">Admissions</Link></li>
                <li><Link to="/#contact-form">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><a href="#student-portal">Student Portal</a></li>
                <li><a href="#faculty">Faculty Log</a></li>
                <li><a href="#tbi">TBI Portal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
              <p className="text-white/80 text-sm">+91 4828 305500</p>
              <p className="text-white/80 text-sm">info@amaljyothi.ac.in</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
            <p>© 2026 Amal Jyothi College of Engineering.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
