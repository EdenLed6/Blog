import { HashRouter as BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AppProvider } from "./context/AppContext.jsx";
import AppShell from "./components/layout/AppShell.jsx";
import TopicPage from "./pages/TopicPage.jsx";
import PostDetailPage from "./pages/PostDetailPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const feed = document.getElementById("feed-scroll");
    if (feed) feed.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<AppShell />}>
            <Route index element={<AboutPage />} />
            <Route path="technology" element={<TopicPage topic="Technology" />} />
            <Route path="legal" element={<TopicPage topic="Legal" />} />
            <Route path="privacy" element={<TopicPage topic="Privacy" />} />
            <Route path="ethics" element={<TopicPage topic="Ethics" />} />
            <Route path="strategy" element={<TopicPage topic="Strategy" />} />
            <Route path="post/:id" element={<PostDetailPage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
