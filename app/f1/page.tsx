import Link from "next/link";

export default function DefaultF1() {
  return (
    <>
      <h1>This is Folder 1</h1>
      <Link href="/f1/f2">Go to Folder 2</Link>
    </>
  );
}