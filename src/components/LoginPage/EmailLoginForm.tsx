import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function EmailLoginForm() {
  return (
    <form action="">
      <div className="grid w-full items-center gap-1.5 mb-4">
        <Label htmlFor="email-address">Email Address</Label>
        <Input type="email" id="email-address" placeholder="Email Address" />
      </div>

      <div className="grid w-full items-center gap-1.5 mb-4">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          placeholder="Create Password (min. 8 characters)"
        />
      </div>

      <div className="flex space-x-2 mb-4">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <button className="main-gradient-bg w-full py-2 text-lg text-center rounded-lg shadow text-white">
        Log in
      </button>
    </form>
  );
}
