

const Allmedia = () => {
    return (
        <>
            <div style={{ margin: 'auto', marginTop: '3rem', maxWidth: '1560px' }}>
                <div style={{
                    color: 'white',
                    fontSize: '32px',
                    fontWeight: '500',

                }}
                    className=" text-[32px] font-medium text-white">
                    <span style={{ color: '#C778DD' }}>

                        #</span>all-media
                </div>


                <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', margin: '2rem 1rem' }}
                    className=" flex gap-6">
                    <a href="tyla3713">
                        <div
                            style={{
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <img src={require('./Discord.png')} alt="" />
                            <span>@Sam Ho</span>
                        </div>
                    </a >
                    <a href="https://www.linkedin.com/in/sam-ho-b1006b221/">
                        <div style={{
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <img style={{ width: '8%' }} src={require('./LinkedIn.png')} alt="" />
                            <span>@Sam Ho</span>
                        </div>
                    </a>
                </div >


            </div>

        </>
    )
}

export default Allmedia