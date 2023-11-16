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

                        <div style={{ color: '#ffffff', margin : 'auto 1.5rem' }}>
                            <p>Web developer and fullstack developer</p>
                        </div>
                    </div>

                    <div className='right-foot'>


                        <h2 className='medias'>Media</h2>


                        <div className='logos'>
                            <a href="github.com">
                                <img src={require("./Discord.png")} alt="" />
                            </a>
                            <a href="discord.com">
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