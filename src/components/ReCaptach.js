import React, { useState } from "react";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import ReactLoading from "react-loading";
import { FaCheckDouble } from "react-icons/fa";

const ReCaptach = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleVerify = async (token) => {
    console.log("token", token);
    const res = await fetch("http://localhost:8000/verify", {
      method: "POST",
      body: { "g-recaptcha-response": token },
    })
      .then((res) => {
        console.log(res);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
    console.log("🚀 ~ file: ReCaptach.js:17 ~ handleVerify ~ res", res);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {isLoading ? (
          <ReactLoading
            type={"spin"}
            color={"#2A6CB6"}
            height={"30%"}
            width={"30%"}
          />
        ) : (
          <FaCheckDouble size="6em" color="#16C25D" />
        )}
      </div>
      <GoogleReCaptchaProvider reCaptchaKey="6Le_E8IjAAAAADfBZ8d2cQwVvL1Gh7Wl_DDvrlLK">
        <GoogleReCaptcha onVerify={handleVerify} />
      </GoogleReCaptchaProvider>
    </>
  );
};

export default ReCaptach;
