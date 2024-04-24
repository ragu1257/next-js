import Card from "@/app/components/card";
import Link from "next/link";

export default function SubUsersPage() {
  
  return (
    <Card>
      <h1>Sub Users</h1>
      <p>Find the sub users here.</p>
      <Link href="/complex-dashboard">
        Back to all users
      </Link>
    </Card>
  );
}