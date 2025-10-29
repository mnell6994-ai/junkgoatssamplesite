import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Junk Removal Services Richmond VA | Professional Cleanup",
  description: "Professional junk removal services in Richmond, VA. Furniture removal, yard waste, construction debris, appliance removal, estate cleanouts, and more. Same-day service available!",
  keywords: "junk removal services Richmond VA, furniture removal Richmond, yard waste removal Richmond, construction debris Richmond, appliance removal Richmond, estate cleanout Richmond, junk hauling Richmond",
  alternates: {
    canonical: 'https://junkgoatsrichmond.com/services',
    languages: {
      'en-US': 'https://junkgoatsrichmond.com/services',
      'en': 'https://junkgoatsrichmond.com/services',
      'x-default': 'https://junkgoatsrichmond.com/services',
    },
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}



