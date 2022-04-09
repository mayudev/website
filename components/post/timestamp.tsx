export default function Timestamp({ date }: { date: string }) {
  const parsed = new Date(date);
  const month = parsed.toLocaleString("en", { month: "long" });

  return (
    <time dateTime={parsed.toLocaleString()} title={parsed.toLocaleString()}>
      {month} {parsed.getDate()}, {parsed.getFullYear()}
    </time>
  );
}
