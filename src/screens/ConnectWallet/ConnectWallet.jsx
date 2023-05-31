import React from "react";
import "./style.css";

export const ConnectWallet = () => {
  return (
    <div className="connect-wallet">
      <div className="group-51692-wrapper">
        <div className="group-51692">
          <div className="text-wrapper-8">Connect wallet</div>
          <p className="p">Choose how you want to connect. There are several wallet providers.</p>
          <div className="group-54983">
            <div className="overlap-2">
              <div className="group-40070">
                <div className="overlap-group-5">
                  <img className="metamask-fox-svg" alt={"Metamask fox svg"} src={"/img/metamask-fox-svg-2.png"} />
                  <img className="mask-group-109" alt={"Mask group"} src={"/img/mask-group-109-1-1x-png.png"} />
                </div>
              </div>
              <div className="metamask-fox-svg-wrapper">
                <img className="metamask-fox-svg-2" alt={"Metamask fox svg"} src={"/img/metamask-fox-svg-2.png"} />
              </div>
            </div>
            <div className="text-wrapper-9">MetaMask</div>
          </div>
          <div className="group-54984">
            <div className="group-3">
              <div className="overlap-group-6">
                <img className="metamask-fox-svg-3" alt={"Metamask fox svg"} src={"/img/metamask-fox-svg-2.png"} />
                <img className="mask-group-2" alt={"Mask group"} src={"/img/mask-group-109-1-1x-png.png"} />
              </div>
            </div>
            <div className="text-wrapper-10">WalletConnect</div>
          </div>
          <div className="group-54985">
            <div className="show-more">Show More</div>
          </div>
        </div>
      </div>
    </div>
  );
};
