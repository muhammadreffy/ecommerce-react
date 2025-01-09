import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "../../components/ui/card";

import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormItem,
  FormMessage,
  FormLabel,
  FormField,
  FormControl,
  FormDescription,
} from "../../components/ui/form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { axiosInstance } from "@/lib/axios";
import { GuestPage } from "@/components/guard/GuestPage";

const registerFormSchema = z
  .object({
    email: z.string().min(8, "Email has to be 8 characters or more"),
    username: z.string().min(3, "Username has to be 3 characters or more"),
    password: z
      .string()
      .min(8, "Your password needs to be 8 characters or more"),
    confirmPassword: z
      .string()
      .min(8, "Your password needs to be 8 characters or more"),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

const RegisterPage = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },

    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
  });

  const handleRegister = async (values) => {
    try {
      const [emailResponse, usernameResponse] = await Promise.all([
        axiosInstance.get("/users", {
          params: { email: values.email },
        }),

        axiosInstance.get("/users", {
          params: { username: values.username },
        }),
      ]);

      if (emailResponse.data.length) {
        alert("Email already taken");

        return;
      }

      if (usernameResponse.data.length) {
        alert("Username already taken");

        return;
      }

      await axiosInstance.post("/users", {
        username: values.username,
        email: values.email,
        password: values.password,
      });

      alert("User Registered");

      form.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <GuestPage>
        <main className="flex flex-col items-center justify-center min-h-screen py-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleRegister)}
              className="w-full max-w-lg"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Welcome!</CardTitle>
                  <CardDescription>
                    Please enter your details to create an account.
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field} type="email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input {...field} type="text" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input {...field} type="password" />
                        </FormControl>
                        <FormDescription>
                          Your password needs to be 8 characters or more
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input {...field} type="password" />
                        </FormControl>
                        <FormDescription>
                          Password and password confirmation must be the same
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>

                <CardFooter>
                  <div className="flex flex-col w-full">
                    <Button disabled={!form.formState.isValid} type="submit">
                      Register
                    </Button>

                    <div className="flex items-center justify-center mt-2 text-gray-700 gap-x-1.5">
                      You have an account?
                      <Link to="/login">
                        <Button variant="link" className="p-0 text-gray-700">
                          Login
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </form>
          </Form>
        </main>
      </GuestPage>
    </>
  );
};

export default RegisterPage;
