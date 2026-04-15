import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext.jsx";
import AppShell from "./components/layout/AppShell.jsx";
import HomePage from "./pages/HomePage.jsx";
import TopicPage from "./pages/TopicPage.jsx";
import PostDetailPage from "./pages/PostDetailPage.jsx";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppShell />}>
            <Route index element={<HomePage />} />
            <Route path="technology" element={<TopicPage topic="Technology" />} />
            <Route path="legal" element={<TopicPage topic="Legal" />} />
            <Route path="privacy" element={<TopicPage topic="Privacy" />} />
            <Route path="ethics" element={<TopicPage topic="Ethics" />} />
            <Route path="strategy" element={<TopicPage topic="Strategy" />} />
            <Route path="post/:id" element={<PostDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
