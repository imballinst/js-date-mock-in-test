import { test } from "vitest";
import { createRemixStub } from "@remix-run/testing";
import Home from "./_index";

test("should have a consistent ", () => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      Component: Home,
    },
  ]);

  <RemixStub />;
});
