import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/', label: 'Home' },
  {
    label: 'Academics',
    children: [
      { to: '/courses', label: 'UG Programs', sub: ['Computer Science (CSE)', 'Electrical & Electronics (EEE)', 'Civil Engineering (CE)', 'Mechanical Engineering (ME)'] },
      { to: '/courses', label: 'Allied Branches', sub: ['Chemical Engineering', 'Food Technology'] },
      { to: '/courses', label: 'PG & Research', sub: ['M.Tech Programs', 'MCA / MBA', 'PhD Research'] },
    ],
  },
  { to: '/admissions', label: 'Admissions' },
  { to: '/#campus-vibe', label: 'Campus Life' },
  { to: '/#contact', label: 'Contact Us' },
];

function isNavActive(to, location) {
  if (to === '/') return location.pathname === '/';
  if (to.startsWith('/#')) return location.pathname === '/' && location.hash === to.slice(1);
  return location.pathname.startsWith(to.split('#')[0]);
}

export default function TopNav() {
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-[5%] h-[70px] bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm transition-all duration-300"
      aria-label="Main navigation"
    >
      <Link to="/" className="flex items-center gap-2 text-primary-blue font-bold text-xl focus-ring rounded">
        <img
          src="https://www.ajce.in/ajceJubileeLogo.png"
          alt="AJCE Silver Jubilee"
          className="h-12 w-auto object-contain"
          loading="eager"
          width={120}
          height={50}
        />
      </Link>

      <ul className="hidden md:flex list-none gap-8">
        {navLinks.map((item) =>
          item.children ? (
            <li
              key={item.label}
              className="relative flex items-center"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                type="button"
                className="text-sm font-medium text-text-main hover:text-primary-blue focus-ring py-2 flex items-center gap-1"
                aria-expanded={megaOpen}
                aria-haspopup="true"
              >
                {item.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[600px] bg-white rounded-xl shadow-xl border border-black/5 p-6"
                  >
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <h3 className="font-heading font-semibold text-primary-blue mb-3 flex items-center gap-2">
                          <span className="text-accent-gold">UG</span> Programs
                        </h3>
                        <div className="flex flex-col gap-2">
                          <Link to="/courses#computer-science" className="text-text-main hover:text-primary-crimson text-sm">Computer Science (CSE)</Link>
                          <Link to="/courses#electrical-electronics" className="text-text-main hover:text-primary-crimson text-sm">Electrical & Electronics (EEE)</Link>
                          <Link to="/courses#civil-engineering" className="text-text-main hover:text-primary-crimson text-sm">Civil Engineering (CE)</Link>
                          <Link to="/courses#mechanical" className="text-text-main hover:text-primary-crimson text-sm">Mechanical Engineering (ME)</Link>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-primary-blue mb-3">Allied Branches</h3>
                        <div className="flex flex-col gap-2">
                          <Link to="/courses#chemical-engineering" className="text-text-main hover:text-primary-crimson text-sm">Chemical Engineering</Link>
                          <Link to="/courses#food-technology" className="text-text-main hover:text-primary-crimson text-sm">Food Technology</Link>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-primary-blue mb-3">PG & Research</h3>
                        <div className="flex flex-col gap-2">
                          <Link to="/courses" className="text-text-main hover:text-primary-crimson text-sm">M.Tech Programs</Link>
                          <Link to="/courses" className="text-text-main hover:text-primary-crimson text-sm">MCA / MBA</Link>
                          <Link to="/courses" className="text-text-main hover:text-primary-crimson text-sm">PhD Research</Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ) : (
            <li key={item.label}>
              <Link
                to={item.to}
                className={`text-sm font-medium focus-ring py-2 block border-b-2 border-transparent hover:border-primary-crimson transition-colors ${
                  isNavActive(item.to, location) ? 'text-primary-crimson border-primary-crimson' : 'text-text-main hover:text-primary-blue'
                }`}
                aria-current={isNavActive(item.to, location) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>

      <div className="hidden md:block">
        <Link
          to="/admissions"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary-crimson text-white font-medium text-sm hover:bg-primary-blue focus-ring transition-colors"
        >
          Apply Now
        </Link>
      </div>
    </nav>
  );
}
