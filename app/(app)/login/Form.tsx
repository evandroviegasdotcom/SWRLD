import Logo from "@/components/navbar/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { handleLoggin } from "@/services/admin";
import React from "react";

export default function Form() {
  const login = async (form: FormData) => {
    "use server";
    const email = form.get("email")
    const password = form.get("password")
    if(!email || !password) return 
    await handleLoggin({ email: email as string, password: password as string })


  };
  return (
    <form action={login} className="flex flex-col gap-3 justify-center p-20">
      <Logo admin />
      <div className="space-y-2 w-full">
        <Label>Email</Label>
        <Input type="email" placeholder="jhon@doe.com" name="email" />
      </div>
      <div className="space-y-2 w-full">
        <Label>Password</Label>
        <Input type="password" name="password" />
      </div>
      <Button type="submit">Log in</Button>
    </form>
  );
}
