import { Subscription } from "@/components/pages/subscription";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inscreva-se",
  description: "Inscreva-se para receber as novidades do blog",
};

export default function SubscriptionPage() {
  return <Subscription />;
}
