import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Stories } from "./screens/Stories";
import { ConnectWallet } from "./screens/ConnectWallet";
import { SignUpModalStepChooseProfileType } from "./screens/SignUpModalStepChooseProfileType";
import { SwapATokens } from "./screens/SwapATokens";
import { MobileApp } from "./screens/MobileApp";
import { SignUpModalStepInvestorSignUp } from "./screens/SignUpModalStepInvestorSignUp";
import { Filter } from "./screens/Filter";
import { InvestorWizard } from "./screens/InvestorWizard";
import { Desktop } from "./screens/Desktop";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Stories />,
  },
  {
    path: "/stories",
    element: <Stories />,
  },
  {
    path: "/connect-wallet",
    element: <ConnectWallet />,
  },
  {
    path: "/sign-up-modal-step-1-choose-profile-type",
    element: <SignUpModalStepChooseProfileType />,
  },
  {
    path: "/swap-a-tokens",
    element: <SwapATokens />,
  },
  {
    path: "/mobile-app",
    element: <MobileApp />,
  },
  {
    path: "/sign-up-modal-step-2-investor-sign-up",
    element: <SignUpModalStepInvestorSignUp />,
  },
  {
    path: "/filter",
    element: <Filter />,
  },
  {
    path: "/investor-wizard-1",
    element: <InvestorWizard />,
  },
  {
    path: "/desktop-2-all-breakpoints",
    element: <Desktop />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
