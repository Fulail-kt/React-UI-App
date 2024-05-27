import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../APIs/api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Signup (){

    const [first, setFirstName] = useState('');
    const [last, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const history=useHistory()

    useEffect(()=>{
        const token=localStorage.getItem('token')
        if(token){
         history.push(`${process.env.PUBLIC_URL}`)
        }
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!first.trim() || !last.trim() || !email.trim() || !password.trim() ||!confirmPassword.trim() ){
            alert('required field is missing') 
            return
        }
        const response= await signup(first,last,email,password,termsAccepted,confirmPassword,termsAccepted)

        if(response.data.success){
            alert('response.data.message')
        }
    }
    
        return(
            <div className="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
                <div className="w-100 p-3 p-md-5 card border-0 bg-dark text-light" style={{maxWidth: "32rem"}}>
                    <form className="row g-1 p-3 p-md-4" onSubmit={handleSubmit}>
                        <div className="col-12 text-center mb-1 mb-lg-5">
                            <h1>Create your account</h1>
                            <span>Free access to our dashboard.</span>
                        </div>
                        <div className="col-6">
                            <div className="mb-2">
                                <label className="form-label">Full name</label>
                                <input type="text" value={first} onChange={(e) => setFirstName(e.target.value)} className="form-control form-control-lg" placeholder="John" required />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-2">
                                <label className="form-label">&nbsp;</label>
                                <input type="text" className="form-control form-control-lg" value={last} onChange={(e) => setLastName(e.target.value)} placeholder="Parker" required />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-2">
                                <label className="form-label">Email address</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg" placeholder="name@example.com" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-2">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="8+ characters required" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-2">
                                <label className="form-label">Confirm password</label>
                                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control form-control-lg" placeholder="8+ characters required" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" value={termsAccepted} onChange={(e) => setTermsAccepted(!termsAccepted)} type="checkbox"  id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    I accept the <a href="#!" title="Terms and Conditions" className="text-secondary">Terms and Conditions</a>
                                </label>
                            </div>
                        </div>
                        <div className="col-12 text-center mt-4">
                            <button type="submit" className="btn btn-lg btn-block btn-light lift text-uppercase" >SIGN UP</button>
                        </div>
                        <div className="col-12 text-center mt-4">
                            <span className="text-muted">Already have an account? <Link to="sign-in" title="Sign in" className="text-secondary">Sign in here</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        )
    }


export default Signup;