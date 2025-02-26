import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log("Session:", session);
  console.log("Status:", status);

  useEffect(() => {
    if (status === "unauthenticated") {
      console.log("Redirecting to login...");
      router.push("/login"); // Redirect to login if not logged in
    }
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {session?.user?.name || "Guest"}!</h1>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
