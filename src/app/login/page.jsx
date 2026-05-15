/* eslint-disable react/no-unescaped-entities */
"use client";

import { Card, Separator } from "@heroui/react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import toast from "react-hot-toast";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    console.log({ data, error });

    if (data) {
      toast.success("Congratulations!!! You have logged in successfully");
      redirect("/");
    }

    if (error) {
      // toast
      toast.error("Login failed");
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="text-center pb-5">
        <h1 className="text-5xl text-[#0C0B0B] mb-2">Login</h1>
        <p className="text-[#6C696D] text-lg mb-6">Resume your adventure with Wanderlust</p>
      </div>
      <Card className="shadow-md rounded-none p-10">
        <Form onSubmit={onSubmit} className="flex w-150 flex-col gap-4">
          <TextField
            isRequired
            name="email"
            type="email"
            className="mb-1"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-[#0C0B0B] font-medium text-lg">
              Email Address
            </Label>
            <Input
              className="rounded-none bg-[#F8FAFC] text-sm text-[#6C696D]"
              placeholder="john@example.com"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="mb-4"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="text-[#0C0B0B] font-medium text-lg">Password</Label>
            <Input className="rounded-none bg-[#F8FAFC] text-sm text-[#6C696D]" placeholder="Enter your password" />
            <Description className="text-red-500">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex justify-center gap-2 mb-4">
            <Button className={"rounded-none w-full bg-[#15A1BF] text-lg font-bold"} type="submit">
              Login
            </Button>
          </div>
        </Form>

        <div className="flex justify-center items-center gap-3 mb-4">
          <Separator />
          <div className="whitespace-nowrap"> Or sign in with </div>
          <Separator />
        </div>
        <div>
          <Button
            onClick={handleGoogleSignin}
            variant="outline"
            className={"w-full rounded-none mb-3 py-5 font-semibold text-lg"}
          >
            <FcGoogle /> Sign in with Google
          </Button>
        </div>

        <p className="text-[#6c696D] text-lg text-center">
          Don't have an account?
          <Link href={"/signup"}>
            <span className="text-[#15A1BF] font-semibold text-xl">
              {" "}
              Sign Up
            </span>
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;
