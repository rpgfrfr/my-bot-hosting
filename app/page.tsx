import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
      <h1>Bot Hosting Platform</h1>
      <SignedIn>
        <p>Welcome! Manage your bots.</p>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}
