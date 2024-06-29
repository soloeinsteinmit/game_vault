import { Input } from "@nextui-org/input";
import React from "react";
import { Link } from "react-router-dom";
import PasswordInput from "./PasswordInput";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

function LoginForm() {
  return (
    <div className="flex flex-col justify-between gap-5 p-5 max-w-[500px] w-full h-dvh bg-content1">
      <p className="text-sm font-pt-sans text-right">
        <span className="text-default-500">HAVE AND ACCOUNT?</span>{" "}
        <Link to={"gamevault.sign-in"} className="font-bold">
          SIGN UP
        </Link>
      </p>

      {/* ---------------------------------------------------------------------- */}

      <div>
        <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
          <h1 className="flex flex-col font-pt-sans font-extrabold text-4xl">
            LOG IN
            <span className="font-normal text-sm text-default-400">
              Get Started with GameVault
            </span>
          </h1>
          <form className="flex flex-col gap-4">
            <Input
              isClearable
              isRequired
              type="text"
              label="Username"
              className="text-xs"
              // size="sm"
            />
            <PasswordInput />

            <Button className="font-pt-sans font-bold h-12" color="primary">
              CONTINUE
            </Button>
          </form>

          {/* ---------------------------------------------------------------------- */}

          <Divider className="my-4" />

          {/* ---------------------------------------------------------------------- */}

          <div className="flex flex-col gap-2">
            <p className="font-bold text-sm font-pt-sans">or continue with</p>
            <div className="flex gap-1 font-bold font-pt-sans ">
              <Button startContent={<FcGoogle />} className="w-full font-bold">
                GOOGLE
              </Button>
              <Button
                startContent={<FaFacebookF className="text-primary " />}
                className="w-full font-bold"
              >
                FACEBOOK
              </Button>
            </div>
            <p className="text-sm font-pt-sans text-default-400 font-bold">
              {" "}
              by registering you agree to our{" "}
              <span className="text-primary">Terms & Conditions</span>
            </p>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}

      <p className="text-sm font-pt-sans text-right text-default-500">
        made by <u>Solomon Eshun</u> with{" "}
        <u>
          <a href="https://rawg.io" target="_blank" rel="noopener noreferrer">
            RAWG API
          </a>
        </u>
      </p>
    </div>
  );
}

export default LoginForm;
