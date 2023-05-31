import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const SignUpModalStepChooseProfileType = () => {
  return (
    <div className="sign-up-modal-step-choose-profile-type">
      <div className="sign-up-modal-step-1-choose-profile-type">
        <div className="group-55237">
          <h1 className="let-s-create-your-account">Let&#39;s create your account</h1>
          <div className="text-wrapper-11">Choose your profile type</div>
          <div className="already-a-member-login">
            <span className="span">Already a member? </span>
            <span className="text-wrapper-12">Login</span>
          </div>
          <div className="component-139-3">
            <div className="text-wrapper-13">Creator</div>
          </div>
          <div className="component-139-4">
            <div className="text-wrapper-14">Investor</div>
          </div>
          <Link className="group-4" to={"/sign-up-modal-step-2-investor-sign-up"}>
            <div className="text-wrapper-15">Next</div>
          </Link>
          <div className="group-55234">
            <div className="overlap-group-7">
              <img className="line" alt={"Line"} src={"/img/line-1989.png"} />
              <div className="group-55231">
                <div className="profile-type">Profile Type</div>
                <div className="group-55229">
                  <div className="text-wrapper-16">1</div>
                </div>
              </div>
              <div className="group-55233">
                <div className="text-wrapper-17">Sign Up</div>
                <div className="group-55230">
                  <div className="text-wrapper-18">2</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="iconly-light-outline-close-square"
            style={{
              backgroundImage: "url(/img/combined-shape-89.png)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
