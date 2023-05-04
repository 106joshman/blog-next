'use client'
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Icon } from "@iconify/react";
import {
  Stack,
  Button,
  Alert,
  TextField,
  FormControl,FormHelperText,
  OutlinedInput,Input,FilledInput,InputAdornment,
  InputLabel,
} from "@mui/material";
import { Kalam } from "next/font/google";
import React from "react";

const kalam = Kalam({
  weight: "400",
  subsets: ["latin"],
});

export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  // };

export const metadata = {
  title: "Login",
};

const LoginPage = () => {
  return (
    <div>
      {/* <Link href="\">go back hone</Link> */}

      <section className="h-screen">
        <div className="container h-full px-6 py-24">
          <div className="flex flex-col h-full items-center lg:w-1/2 mx-auto justify-center rounded-3xl bg-slate-400">
            <div className="head">
              <div
                className={`${kalam.className} h1 bg-black shadow-lg rounded-full text-white uppercase p-4 h-16 w-16 items-center mx-auto flex justify-center text-5xl`}
              >
                b
              </div>
              <h2 className="text-white text-2xl mt-2 text-center">
                Welcome back!
              </h2>
              <p className="text-gray-700">
                The black bloggers, blogging the right way
              </p>
            </div>

            <div className="form">
              <form>
                <div className="form-email"></div>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                // value={password}
                onChange={(e) => setShowPassword((show) => !show)}
                endAdornment={
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <Icon
                      icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                    />
                  </IconButton>
                }
                label="Password"
              />
                </FormControl>
                <div className="form-bttn"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
