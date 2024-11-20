import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex gap-5">
      <h2>welcome</h2>
      <Button className='mt-1'>Click me</Button>

      <UserButton/>
    </div>
  );
}
