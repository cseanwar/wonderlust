"use client";
import { FcGoogle } from "react-icons/fc";
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
import Link from "next/link";
import { useRef } from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const passwordRef = useRef("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });

    if (data) {
      await authClient.signOut();
      toast.success("Congratulations!!! You have signed up successfully");
      redirect("/login");
    }

    if (error) {
      // toast
      toast.error("Signup failed");
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
        <h1 className="text-5xl text-[#0C0B0B] mb-2">Create Account</h1>
        <p className="text-[#6C696D] text-lg mb-6">
          Start your adventure with Wanderlust
        </p>
      </div>
      <Card className="shadow-md rounded-none p-10">
        <Form onSubmit={onSubmit} className="flex w-150 flex-col gap-4">
          <TextField isRequired name="name" type="text" className="mb-1">
            <Label className="text-[#0C0B0B] font-medium text-lg">
              Full Name
            </Label>
            <Input
              className="rounded-none bg-[#F8FAFC] text-sm text-[#6C696D]"
              placeholder="Enter your name"
            />
            <FieldError />
          </TextField>

          <TextField name="image" type="url" className="mb-1">
            <Label className="text-[#0C0B0B] font-medium text-lg">
              Image URL
            </Label>
            <Input
              className="rounded-none bg-[#F8FAFC] text-sm text-[#6C696D]"
              placeholder="Image url"
            />
            <FieldError />
          </TextField>

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
            className="mb-1"
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
            <Label className="text-[#0C0B0B] font-medium text-lg">
              Password
            </Label>
            <Input
              className="rounded-none bg-[#F8FAFC] text-sm text-[#6C696D]"
              placeholder="Enter your password"
              onChange={(e) => (passwordRef.current = e.target.value)}
            />
            <Description className="text-red-500">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="confirmPassword"
            type="password"
            className="mb-4"
            validate={(value) => {
              if (value !== passwordRef.current) return "Passwords do not match";
              return null;
            }}
          >
            <Label className="text-[#0C0B0B] font-medium text-lg">
              Confirm Password
            </Label>
            <Input
              className="rounded-none bg-[#F8FAFC] text-sm text-[#6C696D]"
              placeholder="Confirm your password"
            />
            <FieldError />
          </TextField>

          <div className="flex justify-center gap-2 mb-4">
            <Button className={"rounded-none w-full bg-[#15A1BF] text-lg font-bold py-5"} type="submit">
              Create Account
            </Button>
          </div>
        </Form>
        <div className="flex justify-center items-center gap-3 mb-4">
          <Separator />
          <div className="whitespace-nowrap"> Or sign up with </div>
          <Separator />
        </div>
        <div>
          <Button
            onClick={handleGoogleSignin}
            variant="outline"
            className={"w-full rounded-none mb-3 py-5 font-semibold text-lg"}
          >
            <FcGoogle /> Sign In with Google
          </Button>
        </div>

        <p className="text-[#6c696D] text-lg text-center">
          Already have an account?
          <Link href={"/login"}>
            <span className="text-[#15A1BF] font-semibold text-xl">
              {" "}
              Sign In
            </span>
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default SignUpPage;
