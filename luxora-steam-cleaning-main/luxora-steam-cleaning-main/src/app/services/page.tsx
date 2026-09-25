import type { Metadata } from "next";
import ServicesPageClient from "@/components/ServicesPageClient";

export const metadata: Metadata = {
  title: "Our Services | Luxora Steam Cleaning Ltd",
  description:
    "Professional carpet, sofa, mattress, curtain and chair cleaning services across the UK. Affordable prices, guaranteed results.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
