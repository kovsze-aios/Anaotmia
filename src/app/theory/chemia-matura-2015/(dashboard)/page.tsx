import type { Metadata } from "next";
import { TheorySubjectLanding } from "@/components/TheorySubjectLanding";
import { getNavDomains } from "@/server";

export const metadata: Metadata = {
  title: "Chemia — Matura Formuła 2015",
  description:
    "Podręcznik maturalny z chemii (Poziom Rozszerzony, Formuła 2015) podzielony na 13 działów CKE z ciągami przemian nieorganicznych, stechiometrią i wytycznymi klucza CKE.",
};

export default function ChemiaMatura2015Page() {
  return (
    <TheorySubjectLanding
      basePath="/theory/chemia-matura-2015"
      heading="Chemia — Matura Formuła 2015"
      scopeHeading="Podstawa Programowa CKE Formuła 2015 (Działy I–XIII)"
      intro="Kompletny podręcznik maturalny z chemii dla zdających w Formule 2015. Uwzględnia specyfikę arkuszy Formuły 2015 (rozbudowane schematy przemian nieorganicznych, wyłączenie rachunkowego Prawa Hessa i Kso) oraz pułapki klucza CKE."
      domainsLabel="Wybierz jeden z 13 działów podstawy programowej CKE:"
      domains={getNavDomains("chemia-matura-2015")}
    />
  );
}
