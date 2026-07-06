import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kompas — Financial Dashboard for Small Businesses" },
      {
        name: "description",
        content:
          "Kompas helps small businesses price products, track costs, project 5-year revenue, and benchmark against the market.",
      },
      { property: "og:title", content: "Kompas — Financial Dashboard for Small Businesses" },
      {
        property: "og:description",
        content:
          "Price products, track costs, project revenue, and benchmark your small business — all in one dashboard.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/kompas.html"
      title="Kompas Dashboard"
      style={{
        border: "none",
        width: "100vw",
        height: "100vh",
        display: "block",
      }}
    />
  );
}
