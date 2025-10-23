import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Washing Pricing Richmond VA | Transparent Pricing & Free Estimates",
  description: "Transparent power washing pricing in Richmond, VA. House washing, deck cleaning, concrete cleaning, and more. Free estimates with no hidden fees. Licensed and insured.",
  keywords: "power washing pricing Richmond VA, house washing cost Richmond, deck cleaning price Richmond, concrete cleaning cost Richmond, pressure washing rates Richmond, free estimates Richmond"
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}



