import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Washing Services Richmond VA | House Washing, Deck Cleaning & More",
  description: "Professional power washing services in Richmond, VA. House washing, deck cleaning, concrete cleaning, roof cleaning, gutter cleaning, and window cleaning. Free estimates!",
  keywords: "power washing services Richmond VA, house washing Richmond, deck cleaning Richmond, concrete cleaning Richmond, roof cleaning Richmond, gutter cleaning Richmond, window cleaning Richmond, pressure washing Richmond"
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}



