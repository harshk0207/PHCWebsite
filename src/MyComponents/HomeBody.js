import React from 'react'
// import HomePagePicture from './HomePagePicture.jpg'; 
import InstituteLogo from '../Images/InstituteLogo.jpg';
import '../CSSFiles/HomeBody.css'
const HomeBody = () => {
  return (
     <>
     <div className="bodyStyle">
     {/* <img className="imgStyle" src={HomePagePicture} alt="Home Page Picture"/> */}
    <div className="container containerStyle">
    <img className="rounded mx-auto d-block my-3"src={InstituteLogo} alt="Institute Logo" style={{ width: 120, height: 120 }}/>
     <form>
        <h3 className="text-center mb-4"><b>Sign In to PHC</b></h3>
        <div className="form-outline mb-4">
            <select class="form-select" aria-label="Select Your Role">
            <option value="" disabled selected hidden>Select Your Role</option>
                <option value="1">Doctor</option>
                <option value="2">Compounder</option>
                <option value="3">Admin</option>
            </select>
        </div>
        <div className="form-outline mb-4">
              <input type="email" id="form2Example1" className="form-control" placeholder='Email address' />
        </div>
        <div className="form-outline mb-4">
             <input type="password" id="form2Example2" className="form-control" placeholder='Password' />
        </div>
        <div className="row mb-4">
            <div className="col mx-auto">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                    <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                </div>
            </div>
            <div className="col text-end">
                <a href="#!">Forgot password?</a>
            </div>
        </div>
        <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">Sign In</button>
        </div>
        <div className="text-center">
        <hr/>
        <p><strong>Not a member?</strong><a href="#!"> Register</a></p>
        </div>
</form>
</div>
    </div>
     </>
  )
}

export default HomeBody
