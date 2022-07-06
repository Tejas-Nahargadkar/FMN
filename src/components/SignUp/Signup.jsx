import React from "react";
import GoogleIcon from "../assets/google.png";
import FacebookIcon from "../assets/facebook.png";
import Bag from "../assets/Rectangle 72.svg";
import "./Signup.css";
export default function Signup() {
  return (
    <div className="formm">
      {/* <div className="upcontainer">
            <button className="btn-grp-cea">Candidate</button>
            <button className="btn-grp-cea">Employer</button>
            <button className="btn-grp-cea">Admin</button>

        </div> */}
      <div className="downcontainer">
        <div className="leftS">
          {" "}
          <img src={Bag} alt="" />{" "}
        </div>
        <div className="rightS">
          <h2>SignUp</h2>
          <form>
              <div className="Form-Row">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter Name..." name="Name" />
            </div>
            <div className="Form-Row">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter Email..." name="email" />
            </div>
            <div className="Form-Row">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password..." name="psw" />
            </div>
            <div className="Form-Row">
            <label htmlFor="repeat password">Re Enter Password</label>
            <input
              type="password"
              placeholder="Re Enter Password"
              name="psw-repeat"
            />
            </div>
            {/* <input type="text" name="Signup" value="Signup"/> */}
            <div className="checkbox">
              <label>
                <input type="checkbox" name="remember" />
              </label>

              <p>I have read and agree with the Terms and Conditions</p>
            </div>
            {/* <label>
      <input type="checkbox"  name="remember"/>
    </label>

    <p>By creating an account you agree to our Terms & Privacy</p> */}
            <button type="submit" className="signupbtn">
              Sign up
            </button>
          </form>
          <div className="other">
            <p>OR</p>
            {/* <h3>Sign In With</h3> */}
            <div className="buttonn">
              <button className="btn-grp-Gf">
                <img src={GoogleIcon}  alt='' />
                Signin with Google
              </button>
              <button className="btn-grp-Gf">
                <img src={FacebookIcon} alt='' />
                Signin with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
}
