import { SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default function Home() {
  const { userId } = auth();
  return (
    <div>
      {userId ? (
        <SignOutButton />
      ) : (
        <div>
          <SignInButton />
          <SignUpButton />
        </div>
      )}
    </div>
  );
}
