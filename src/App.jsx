import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    /* The grid-bg class ensures the UI remains consistent across the whole page */
    <div className="grid-bg min-h-screen">
      <Navbar />
      
      {/* All sections are now directly in the main container */}
      <main className="flex flex-col">
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer has been removed as requested */}
    </div>
  );
}