import { createFileRoute } from "@tanstack/react-router";
import logo from "../logo.svg";
import FlippingCardDemo from "@/components/demo";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="text-center">
      <FlippingCardDemo />
    </div>
  );
}
