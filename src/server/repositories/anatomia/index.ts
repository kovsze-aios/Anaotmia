import type { TextbookDomain } from "../../models";
import { osteology } from "./domain-01-osteology";
import { myology } from "./domain-02-myology";
import { nervous } from "./domain-03-nervous";
import { endocrine } from "./domain-04-endocrine";
import { cardiovascularRespiratory } from "./domain-05-cardiovascular-respiratory";
import { digestive } from "./domain-06-digestive";
import { urinaryReproductive } from "./domain-07-urinary-reproductive";
import { sensory } from "./domain-08-sensory";
import { tom1Domain } from "./domain-tom1";
import { tom2Domain } from "./domain-tom2";
import { tom3Domain } from "./domain-tom3";
import { tom4Domain } from "./domain-tom4";
import { bochenek1Domain } from "./domain-bochenek1";

const domains: TextbookDomain[] = [
  tom1Domain,
  tom2Domain,
  tom3Domain,
  tom4Domain,
  bochenek1Domain,
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
