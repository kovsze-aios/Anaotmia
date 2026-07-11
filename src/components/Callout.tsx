import Link from "next/link";

interface CalloutProps {
  variant?: "dark" | "light";
}

export function Callout({ variant = "dark" }: CalloutProps) {
  return (
    <div className={`callout ${variant === "light" ? "callout--light" : ""}`}>
      <h2>Start learning in less than 60 seconds</h2>
      <Link href="/en/register" className="btn btn-primary">
        Create your free account ➞
      </Link>
    </div>
  );
}
