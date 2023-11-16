import './skill.css'

const Skills = () => {

    const skills = [
        {
            title: "Language",
            languages: ["JavaScript", "C++", "Python", "Java"]

        },
        { title: "Databases", languages: ["SQL", "PostgreSQL", "Mongo"] },
        {
            title: "Tools",
            languages: [
                "VSCode",
                "Linux",
                "Git",
                "Visual Studio",
                "Postman",
            ],
        },
        {
            title: "Other",
            languages: ["HTML", "CSS", "Bootstrap", "MUI"],
        },
        {
            title: "Frameworks",
            languages: [
                "React",
                "Express.js",
                "Koa.js"
            ],
        },
    ]

    return (
        <>
            <div className='box'>
                <div data-aos="fade-left" className='top'>
                    <div className="head">
                        <span style={{ color: "#C778DD" }}>#</span>skills
                    </div>
                    <div className="line"></div>
                    <div></div>
                   
                </div>

                <div className='body'>
                    <div data-aos="fade-right" className='left'>
                        <img className="pic" src={require("./shapes.png")} alt="" />
                    </div >

                    <div data-aos="fade-left" className='right'>
                        {skills.map(({ title, languages }) => {
                            return (
                                <>
                                    <div className='outer'>
                                        <div className='section'>
                                            <h2>{title}</h2>
                                        </div>
                                        <div className='items'>
                                            {languages.map((e) => {
                                                return <span>{e}</span>;
                                            })}
                                        </div>

                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>

            </div >
        </>
    )

}


export default Skills