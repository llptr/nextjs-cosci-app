"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authClient } from "@/lib/auth-client"; //import the auth client
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(1, "Name"),
  email: z.string().email("Your mail was worng"),
  password: z.string().min(6, "Your password will be more than 6"),
});

const Signup01Page = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (form: z.infer<typeof formSchema>) => {

    await authClient.signUp.email({
        name: form.name,
        email: form.email,
        password: form.password,
      }, {
        onRequest: (ctx) => {
          //show loading
          console.log(ctx.body);
        },
        onSuccess: (ctx) => {
          //redirect to the dashboard or sign in page
          console.log(ctx.data);
          router.replace('/');
        },
        onError: (ctx) => {
          // display the error message
          alert(ctx.error.message);
        },
    }); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xs w-full flex flex-col items-center">
        
        <p className="mt-4 mb-4 text-xl font-bold tracking-tight">
          Membership
        </p>

        <Form {...form}>
          <form
            className="w-full space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>FullName</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="w-full"
                      {...field}
                    />
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
                      type="password"
                      placeholder="Password"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-4 w-full">
              Sign up
            </Button>
          </form>
        </Form>

        <div className="mt-5 space-y-5">
          <p className="text-sm text-center">
            Already have accout?
            <Link href="/login" className="ml-1 underline text-muted-foreground">
              Succeed
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup01Page;
