"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import confetti from "canvas-confetti";
import Navbar from "@/components/shared/Navbar";

const formSchema = z
  .object({
    emailAddress: z.string().email(),
    password: z.string().min(3),
    passwordConfirm: z.string().min(3),
    accountType: z.enum(["personal", "company"]),
    companyName: z.string().optional(),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm;
    },
    {
      message: "Password do not match",
      path: ["passwordConfirm"],
    }
  )
  .refine(
    (data) => {
      if (data.accountType === "company") {
        return !!data.companyName;
      }
      return true;
    },
    {
      message: "Company name is required",
      path: ["companyName"],
    }
  );

export default function AuthPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
      passwordConfirm: "",
      companyName: "",
    },
  });

  const accountType = form.watch("accountType");
  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    toast("Event has been created.");
  };
  const handleConvetti = () => {
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: any, max: any) {
      return Math.random() * (max - min) + min;
    }

    var interval: any = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };
  return (
    <main className="container flex min-h-screen flex-col items-center justify-between py-4">
      <Tabs
        defaultValue="signin"
        className="max-w-md w-full space-y-2 rounded-2xl"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">Login</TabsTrigger>
          <TabsTrigger value="signup">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <Card className="max-w-md w-full  rounded-2xl">
            <CardHeader>
              <CardTitle>Login Form</CardTitle>
              <CardDescription>Let&apos;s join with us</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSubmit)}
                  className="max-w-md w-full flex flex-col gap-4"
                >
                  <FormField
                    control={form.control}
                    name="emailAddress"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Email Address"
                              type="email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  {accountType === "company" && (
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Company name</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Company name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  )}

                  <FormField
                    control={form.control}
                    name="accountType"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>accountType</FormLabel>
                          <Select onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an account type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="personal">Personal</SelectItem>
                              <SelectItem value="company">Company</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="password"
                              type="password"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />

                  <FormField
                    control={form.control}
                    name="passwordConfirm"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Password Confirm</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Password Confirm"
                              type="password"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />

                  <div className="flex gap-2 w-full">
                    <Button type="submit">Login</Button>
                    <Button
                      onClick={handleConvetti}
                      type="reset"
                      variant="secondary"
                      className="hover:bg-[#d6d6d6]"
                    >
                      Try Convetti 🎉🎉🎉
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card className="max-w-md w-full  rounded-2xl">
            <CardHeader>
              <CardTitle>Register Form</CardTitle>
              <CardDescription>Let&apos;s join with us</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSubmit)}
                  className="max-w-md w-full flex flex-col gap-4"
                >
                  <FormField
                    control={form.control}
                    name="emailAddress"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Email Address"
                              type="email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  {accountType === "company" && (
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Company name</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Company name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  )}

                  <FormField
                    control={form.control}
                    name="accountType"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>accountType</FormLabel>
                          <Select onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an account type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="personal">Personal</SelectItem>
                              <SelectItem value="company">Company</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="password"
                              type="password"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />

                  <FormField
                    control={form.control}
                    name="passwordConfirm"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Password Confirm</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Password Confirm"
                              type="password"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />

                  <div className="flex gap-2 w-full">
                    <Button type="submit">Register</Button>
                    <Button
                      onClick={handleConvetti}
                      type="reset"
                      variant="secondary"
                      className="hover:bg-[#d6d6d6]"
                    >
                      Try Convetti 🎉🎉🎉
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
