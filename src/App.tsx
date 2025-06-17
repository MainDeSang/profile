import Header from './components/Header';
import AboutMe from "./components/AboutMe";

function App() {
    return (
        <>
            <Header />
            {/* Hier kommt später AboutMe, Projects, Contact */}
            <main className="p-4">
                <AboutMe />
                <section id="projects" className="py-12">...</section>
                <section id="contact" className="py-12">...</section>
            </main>
        </>
    );
}

export default App;
