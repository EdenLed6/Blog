import { useState } from "react";
import { Outlet } from "react-router-dom";
import LeftSidebar from "./LeftSidebar.jsx";
import RightPanel from "./RightPanel.jsx";
import PostComposer from "../composer/PostComposer.jsx";
import Modal from "../ui/Modal.jsx";

export default function AppShell() {
  const [composerOpen, setComposerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-[60px_1fr] xl:grid-cols-[280px_1fr] lg:grid-cols-[60px_1fr_300px] xl:grid-cols-[280px_1fr_320px] min-h-screen">
        {/* Left Sidebar */}
        <LeftSidebar onNewPost={() => setComposerOpen(true)} />

        {/* Main Feed — scrolls independently */}
        <main className="border-x border-border min-h-screen">
          <Outlet />
        </main>

        {/* Right Panel */}
        <RightPanel />
      </div>

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
