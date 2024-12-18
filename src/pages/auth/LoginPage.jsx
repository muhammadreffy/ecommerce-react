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

const LoginPage = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [inputUsernameMessage, setInputUsernameMessage] = useState("");
  const [inputPasswordMessage, setInputPasswordMessage] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = () => {
    const usernameIsValid = inputEmail.length >= 8;
    const passwordIsValid = inputPassword.length >= 8;

    if (usernameIsValid && passwordIsValid) {
      alert(`Username: ${inputEmail}, Password: ${inputPassword}`);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-8">
      <form className="w-full max-w-lg" onSubmit={handleLogin}>
        <Card>
          <CardHeader>
            <CardTitle>Welcome back!</CardTitle>
            <CardDescription>
              Please enter your details to login.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                onChange={(e) => {
                  if (e.target.value.length < 8) {
                    setInputUsernameMessage(
                      "Email must be at least 8 characters long."
                    );
                  } else {
                    setInputUsernameMessage("");
                  }

                  setInputEmail(e.target.value);
                }}
              />
              <p className="text-sm text-muted-foreground">
                {inputUsernameMessage}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={isChecked ? "text" : "password"}
                onChange={(e) => {
                  if (e.target.value.length < 8) {
                    setInputPasswordMessage(
                      "Password must be at least 8 characters long."
                    );
                  } else {
                    setInputPasswordMessage("");
                  }

                  setInputPassword(e.target.value);
                }}
              />
              <p className="text-sm text-muted-foreground">
                {inputPasswordMessage}
              </p>
            </div>

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
              <Button
                type="submit"
                disabled={inputEmail.length < 8 || inputPassword.length < 8}
              >
                Login
              </Button>

              <div className="flex items-center justify-center mt-2 text-gray-700 gap-x-1.5">
                Don't have an account?
                <Button variant="link" className="p-0 text-gray-700">
                  Register
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </form>
    </main>
  );
};

export default LoginPage;
