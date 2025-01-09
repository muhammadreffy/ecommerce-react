import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "../../components/ui/card";

import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormItem,
  FormMessage,
  FormLabel,
  FormField,
  FormControl,
} from "../../components/ui/form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { axiosInstance } from "@/lib/axios";
import { useDispatch } from "react-redux";
import { GuestPage } from "@/components/guard/GuestPage";

const loginFormSchema = z.object({
  email: z.string().min(8, "Email has to be 8 characters or more"),
  password: z.string().min(8, "Your password needs to be 8 characters or more"),
});

const LoginPage = () => {
  const dispatch = useDispatch();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    resolver: zodResolver(loginFormSchema),
    mode: "onChange",
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = async (values) => {
    try {
      const userResponse = await axiosInstance.get("/users", {
        params: {
          email: values.email,
        },
      });

      if (
        !userResponse.data.length ||
        userResponse.data[0].password !== values.password
      ) {
        return alert("Login failed. Email or password is incorrect.");
      }

      alert("Succefully Logged In");

      dispatch({
        type: "USER_LOGIN",
        payload: {
          id: userResponse.data[0].id,
          email: userResponse.data[0].email,
          username: userResponse.data[0].username,
          role: userResponse.data[0].role,
        },
      });

      localStorage.setItem("CURRENT_USER", userResponse.data[0].id);

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
              onSubmit={form.handleSubmit(handleLogin)}
              className="w-full max-w-lg"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Welcome Back!</CardTitle>
                  <CardDescription>
                    Please enter your details to login.
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
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type={isChecked ? "text" : "password"}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center mt-2 gap-x-2">
                    <Checkbox
                      id="show-password"
                      onCheckedChange={(checked) => setIsChecked(checked)}
                    />

                    <Label htmlFor="show-password">Show password</Label>
                  </div>
                </CardContent>

                <CardFooter>
                  <div className="flex flex-col w-full">
                    <Button disabled={!form.formState.isValid} type="submit">
                      Login
                    </Button>

                    <div className="flex items-center justify-center mt-2 text-gray-700 gap-x-1.5">
                      Don't have an account?
                      <Link to="/register">
                        <Button variant="link" className="p-0 text-gray-700">
                          Register
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

export default LoginPage;
