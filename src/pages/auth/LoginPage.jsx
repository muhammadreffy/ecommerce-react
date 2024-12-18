import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../components/ui/card";

import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import { Button } from "../../components/ui/button";

const LoginPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-8">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Welcome back!</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-2">
          <div className="space-y-2">
            <Label id="email">Email</Label>
            <Input htmlFor="email" type="email" />
          </div>

          <div className="space-y-2">
            <Label id="password">Password</Label>
            <Input htmlFor="password" type="password" />
          </div>

          <div className="flex items-center mt-2 gap-x-2">
            <Checkbox id="show-password" />

            <Label htmlFor="show-password">Show password</Label>
          </div>
        </CardContent>

        <CardFooter>
          <div className="flex flex-col w-full">
            <Button>Login</Button>

            <div className="flex items-center justify-center mt-2 text-gray-700 gap-x-1.5">
              Don't have an account?
              <Button variant="link" className="p-0 text-gray-700">
                Register
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
};

export default LoginPage;
