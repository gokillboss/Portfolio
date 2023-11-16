import About from "../components/first_section_about/About";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills_section/Skill";
import Summary from "../components/summary/summary";
import Contact from "../components/conntact/contact";

const HomePage = () => {

    return (
        <>
            <About />
            <Projects />
            <Skills />
            <Summary />
            <Contact />
        </>
    );
};
export default HomePage;
