import {
  Avatar,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { useState } from "react";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";

const Login = () => {
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // use auth
  const { setUser } = useAuth();

  // navigate
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/dashboard";

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setIsLoginLoading(true);
    axios
      .post(`https://house-hunter-server-mu.vercel.app/users/login`, { ...data })
      .then((res) => {
        if (res.data?.isLogin) {
          const { newUser, token } = res.data;

          // save token in local storage
          localStorage.setItem("hunter_token", token);
          localStorage.setItem("userEmail", newUser?.email);

          // set user
          setUser(newUser);

          Swal.fire("Login successful", "Welcome back to hunter", "success");

          // navigate user
          navigate(from);
          setIsLoginLoading(false);
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.log(err);
        setIsLoginLoading(false);
      });
  };
  return (
    // Login Part
    <div className="flex">
      <div
        className="flex-1 hidden lg:block min-h-screen object-fill object-center bg-no-repeat"
        style={{
          background: `url(https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=740&t=st=1689765542~exp=1689766142~hmac=aa4980d1b021c10be687b0b433c836c2e2c32992876b88d84b915d2e3db19b09)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center, center",
        }}
      ></div>
      <div className=" w-full md:w-1/2 mx-auto lg:w-1/3 flex justify-center px-3 lg:px-6 xl:px-16 py-32">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex flex-col items-center gap-3 mb-8">
            <Avatar sx={{ bgcolor: "skyblue" }}>
              <LockPersonIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{ fontWeight: "bold" }}
              className="font-bold"
            >
              Sign in
            </Typography>
          </div>
          <TextField
            {...register("email")}
            label="Email"
            variant="outlined"
            type="email"
            required
            fullWidth
            sx={{ mb: 3 }}
          />
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              {...register("password")}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              required
            />
          </FormControl>

          <LoadingButton
            loading={isLoginLoading}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 4 }}
          >
            Sign in
          </LoadingButton>

          <div className="flex flex-col 2xl:flex-row justify-between mt-4 items-center 2xl:items-start">
            <Link to="" variant="body2" className="cursor-pointer">
              <span className="text-blue-600 underline"> Forgot password?</span>
            </Link>
            <Link to="/registration" variant="body2" className="cursor-pointer">
              <span className="text-blue-600 underline">
                {" "}
                Do not have an account? Sign Up
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
