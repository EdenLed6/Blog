import { useState } from "react";
import { Outlet } from "react-router-dom";
import LeftSidebar from "./LeftSidebar.jsx";
import RightPanel from "./RightPanel.jsx";
import BottomNav from "./BottomNav.jsx";
import PostComposer from "../composer/PostComposer.jsx";
import Modal from "../ui/Modal.jsx";

export default function AppShell() {
  const [composerOpen, setComposerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto grid
        grid-cols-1
        md:grid-cols-[60px_1fr]
        lg:grid-cols-[60px_1fr_300px]
        xl:grid-cols-[280px_1fr_320px]
        min-h-screen">

        {/* Left Sidebar, hidden on mobile */}
        <div className="hidden md:block">
          <LeftSidebar onNewPost={() => setComposerOpen(true)} />
        </div>

        {/* Main Feed */}
        <main id="feed-scroll" className="border-x border-border min-h-screen pb-16 md:pb-0">
          <Outlet />
        </main>

        {/* Right Panel, hidden below lg */}
        <div className="hidden lg:block">
          <RightPanel />
        </div>
      </div>

      {/* Bottom nav, mobile only */}
      <BottomNav />

      {/* Mobile FAB for new post */}
      <button
        onClick={() => setComposerOpen(true)}
        className="fixed bottom-20 right-4 z-40 md:hidden w-14 h-14 rounded-full bg-accent-blue hover:bg-blue-500 text-white shadow-lg shadow-black/40 flex items-center justify-center text-2xl font-light transition-colors"
        aria-label="New post"
      >
        +
      </button>

      {/* New Post Modal */}
      <Modal
        isOpen={composerOpen}
        onClose={() => setComposerOpen(false)}
        title="New Post"
        wide
      >
        <PostComposer onSubmit={() => setComposerOpen(false)} />
      </Modal>
    </div>
  );
}
