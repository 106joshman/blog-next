"use client";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Icon } from "@iconify/react";
import {
  Stack,
  Button,
  Alert,
  TextField,
  FormControl,
  FormHelperText,
  OutlinedInput,
  Input,
  FilledInput,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { Kalam } from "next/font/google";
import React, { useState } from "react";

const kalam = Kalam({
  weight: "400",
  subsets: ["latin"],
});

// export default function InputAdornments() {

// const handleClickShowPassword = () => setShowPassword((show) => !show);

// const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//   event.preventDefault();
// };

// export const metadata = {
//   title: "Login",
// };

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(password);

  return (
    <div>
      {/* <Link href="\">go back hone</Link> */}

      <section className="h-screen">
        <div className="container h-full px-6 pt-28 pb-24">
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
                <div className="form-email my-5">
                  <TextField
                    // style={{ margin: 1, width: "25ch" }}
                    type="email"
                    label="Email"
                    name="email"
                    variant="filled"
                    // className="w-full border border-gray-300 rounded-md p-2 h-[46px] outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* {emailError && (
              <Alert sx={{ mt: 2 }} severity="error">
                {emailError}
              </Alert>
            )} */}
                </div>
                <div className="form-password">
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      endAdornment={
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          <Icon
                            icon={
                              showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                            }
                          />
                        </IconButton>
                      }
                      label="Password"
                    />
                  </FormControl>
                </div>
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
