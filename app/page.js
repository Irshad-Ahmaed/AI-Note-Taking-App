"use client"
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useEffect } from "react";

export default function Home() {
  const {user} = useUser();
  const createUser = useMutation(api.user.createUser);

  useEffect(()=>{
    user && checkUser()
  }, [user])

  const checkUser = async() => {
    const result = await createUser({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      imageUrl: user?.imageUrl
    })

    console.log(result);
  }

  return (
    <div className="flex gap-5">
      <h2>welcome</h2>
      <Button className='mt-1'>Click me</Button>

      <UserButton/>
    </div>
  );
}
