import './home.css'
import video from '../../assets/WhatsApp_Video_2025-02-28_at_12_42_30_PM.mp4'
import commode from'../../assets/washbasin.jpg';
import washbasin from'../../assets/Commode.jpg';
import Urinal from '../../assets/urinal.jpeg';
import hardware4 from'../../assets/hardware4.jpg';
import hardware5 from'../../assets/hardware5.jpg';
import hardware6 from'../../assets/hardware6.jpg';
import why from '../../assets/why.jpeg'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleProductClick = () => {
        navigate('/product');
    };

    return(
        <>
            <section id="home">

                <div className="video">
                    <video autoPlay muted playsInline loop>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>

                <div className="sanitary">

                    <div className="sani-head">
                        <div className='forHR'>
                            <hr />
                        </div>
                        <div className='fortext'>
                            <h3>SANITARYWARE</h3>
                        </div>
                        <div className="forHR">
                            <hr />
                        </div>
                    </div>

                    <div className="sani-cont">
                        <div className="products-sec">

                            <div className="product-card" id='product' onClick={handleProductClick} style={{cursor: 'pointer'}}>
                                <div className="img-sec">
                                    <img src={commode} alt='commode' />
                                </div>
                                <div className="text-sec">
                                    COMMODE
                                </div>
                            </div>

                            <div className="product-card" id='product' onClick={handleProductClick} style={{cursor: 'pointer'}}>
                                <div className="img-sec">
                                  <img src={washbasin} alt='commode' />
                                </div>
                                <div className="text-sec">
                                    WASH BASIN
                                </div>
                            </div>

                            <div className="product-card" id='product' onClick={handleProductClick} style={{cursor: 'pointer'}}>
                                <div className="img-sec">
                                    <img src={Urinal} alt='commode' />
                                </div>
                                <div className="text-sec">
                                    URINAL & DIVISON PLATE
                                </div>
                            </div>

                            <div className="product-card" id='product' onClick={handleProductClick} style={{cursor: 'pointer'}}>
                                <div className="img-sec">
                                    <img src={hardware4} alt='commode' />
                                </div>
                                <div className="text-sec">
                                    CONCEALED CISTERN &...
                                </div>
                            </div>

                            <div className="product-card" id='product' onClick={handleProductClick} style={{cursor: 'pointer'}}>
                                <div className="img-sec">
                                    <img src={hardware5} alt='commode' />
                                </div>
                                <div className="text-sec">
                                    CISTERNS
                                </div>
                            </div>

                            <div className="product-card" id='product' onClick={handleProductClick} style={{cursor: 'pointer'}}>
                                <div className="img-sec">
                                    <img src={hardware6} alt='commode' />
                                </div>
                                <div className="text-sec">   
                                    SOFT PRESS VALVE
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="why">
                        <p>Why Plumbbing Bazzar? </p>
                        <img src={why} alt="why" />
                    </div>
                    
                </div>


            </section>
        </>
    );
}

export default Home;