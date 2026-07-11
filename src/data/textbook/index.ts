import type { TextbookDomain } from "@/types/textbook";
import { osteology } from "./domain-01-osteology";
import { myology } from "./domain-02-myology";
import { nervous } from "./domain-03-nervous";
import { endocrine } from "./domain-04-endocrine";
import { cardiovascularRespiratory } from "./domain-05-cardiovascular-respiratory";
import { digestive } from "./domain-06-digestive";
import { urinaryReproductive } from "./domain-07-urinary-reproductive";
import { sensory } from "./domain-08-sensory";

const domains: TextbookDomain[] = [
  osteology,
  myology,
  nervous,
  endocrine,
  cardiovascularRespiratory,
  digestive,
  urinaryReproductive,
  sensory,
];

export function getDomains(): TextbookDomain[] {
  return domains;
}

export function getDomain(id: string): TextbookDomain | undefined {
  return domains.find((d) => d.id === id);
}
