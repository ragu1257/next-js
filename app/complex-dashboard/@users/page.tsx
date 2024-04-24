import Link from "next/link";
import Card from "../../components/card";

export default function UsersPage() {
  return (
    <Card>
      <h1>Users</h1>
      <p>Find the users here.</p>
      <Link href="/complex-dashboard/sub-users">
          Sub Users
      </Link>
    </Card>
  );
}