import './footer.css'

const Footer = () => {
    return (
        <>
            <div className='end-line'></div>

            <div data-aos="fade-up" className='footer'>
                <div className='upper'>
                    <div className='left-foot'>
                        <div className='upper-left'>
                            <div className='logo'>
                                <img src={require("./logo.png")} alt="" />
                                <span style={{ fontSize: '32px', fontWeight: 'bold' }}>Sam</span>
                                <span style={{ color: '#ABB2BF', padding: '1rem' }}> samho.bmt@gmail.com</span>
                            </div>
                        </div>
                        <div style={{ color: '#ffffff', margin: 'auto 1.5rem' }}>
                            <p>Web developer and fullstack developer</p>
                        </div>
                    </div>
                    <div className='right-foot'>

                        <h2 className='medias'>Media</h2>

                        <div className='logos'>
                            <a href="https://www.linkedin.com/in/sam-ho-b1006b221/" className="">
                                <img src={require("./LinkedIn.png")} alt="" className="img-fluid" style={{ width: '25px', margin: '4px' }} />
                            </a>
                            <a href="https://github.com/gokillboss">
                                <img src={require("./Github.png")} alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='lower'>
                    © Copyright 2022. Made by Sam, designed by Elias
                </div>
            </div>

        </>
    )

}



export default Footer