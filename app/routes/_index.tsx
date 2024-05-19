import dayjs from "dayjs";
import type { MetaFunction } from "@remix-run/node";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const date = dayjs("2024-05-19T12:38:03.440Z");
  const formatted = date.tz("Asia/Taipei").format();
  console.info(formatted, date.tz());
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <p>{formatted}</p>
    </div>
  );
}
