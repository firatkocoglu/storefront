import { LoginForm } from "@/components/Auth/LoginForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome</CardTitle>
          <CardDescription>Log in to start shopping</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?
            <Link href="/register" className="text-blue-600 hover:underline">
              {" "}
              Register.
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
};

export default page;
