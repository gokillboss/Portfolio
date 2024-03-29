import AboutMe from "../components/summary/About_Page"
import Skills from "../components/skills_section/Skill"
import { Container, } from 'react-bootstrap';

const AboutPage = () => {
    return (
        <>
            <Container >
                <AboutMe />
                <Skills />
            </Container>
        </>
    )
}


export default AboutPage