import Header from './components/Header';
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Text from "./components/Text";

function App() {
    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <Header />
            {/* Hier kommt später AboutMe, Projects, Contact */}
            <main className="p-4">
                <AboutMe />
                <Text />
                <Projects />
                <Contact />
            </main>
        </>
    );
}

export default App;
