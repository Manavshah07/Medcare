import { NavLink } from 'react-router-dom';
import icon from '../../Assets/Images/pharmacy-image/1.png';
import SectionHeader from '../SectionHeader';
const MedcareRegistration = () => {
    return (
        <>
            <div id="medcare-login" style={{ height: "100vh" }}>
                <div className="content-box-md">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <div className="d-flex flex-row-reverse">
                                    <NavLink to="/" class="btn btn-outline-secondary">Back to Home</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                <SectionHeader title="Medcare Registration" />
                                <div className="login-cards d-flex justify-content-around flex-wrap" style={{ height: "48.5vh", alignItems: "center" }}>
                                    <div className="login-card" style={{ width: "360px", margin: "5px", border: "solid 1px rgba(33, 132, 187, 1)", padding: "30px 15px", borderRadius: "10px" }}>
                                        <div className="login-card-img">
                                            <img src={icon} alt="" style={{ display: "block", margin: "auto" }} height="70px" />
                                        </div>
                                        <div className="login-card-details" style={{ "text-align": "justify" }}>
                                            <h4 className='text-center p-2'>Patient Registration</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa accusamus nobis repellat esse cupiditate, blanditiis suscipit id. Officia dolorem autem libero ipsum quo similique fuga.</p>
                                        </div>
                                        <NavLink to="/login" className="btn btn-primary d-flex justify-content-center">Patient Registration</NavLink>
                                    </div>

                                    <div className="login-card" style={{ width: "360px", margin: "5px", border: "solid 1px rgba(33, 132, 187, 1)", padding: "30px 15px", borderRadius: "10px" }}>
                                        <div className="login-card-img">
                                            <img src={icon} alt="" style={{ display: "block", margin: "auto" }} height="70px" />
                                        </div>
                                        <div className="login-card-details" style={{ "text-align": "justify" }}>
                                            <h4 className='text-center p-2'>Doctor Registration</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa accusamus nobis repellat esse cupiditate, blanditiis suscipit id. Officia dolorem autem libero ipsum quo similique fuga.</p>
                                        </div>
                                        <NavLink to="/login" className="btn btn-primary d-flex justify-content-center">Doctor Registration</NavLink>
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <p>Already a Member? <NavLink to="/medcare/login">Login</NavLink> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MedcareRegistration;