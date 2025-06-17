import Header from './components/Header';
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    return (
        <>
            <Header />
            {/* Hier kommt später AboutMe, Projects, Contact */}
            <main className="p-4">
                <AboutMe />
                <Projects />
                <Contact />
            </main>
        </>
    );
}

export default App;
