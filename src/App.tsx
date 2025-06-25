import Header from './components/Header';
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Text from "./components/Text";
import Certificates from "./components/Certificates";


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
                <Certificates />
                <Contact />
            </main>
        </>
    );
}

export default App;
