import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import AIAssistant from '../components/AIAssistant';

export default function Layout() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1001] focus:px-4 focus:py-2 focus:bg-primary-crimson focus:text-white focus:rounded-lg focus:w-auto focus:h-auto focus:m-0 focus:[clip:auto]"
      >
        Skip to main content
      </a>
      <TopNav />
      <main id="main-content" className="min-h-screen pt-[70px] pb-20 md:pb-0" role="main">
        <Outlet />
      </main>
      <BottomNav />
      <AIAssistant />
    </>
  );
}
