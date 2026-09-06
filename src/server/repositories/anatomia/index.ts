import type { TextbookDomain } from "../../models";
import { osteology } from "../../../data/anatomia/domain-01-osteology";
import { myology } from "../../../data/anatomia/domain-02-myology";
import { nervous } from "../../../data/anatomia/domain-03-nervous";
import { endocrine } from "../../../data/anatomia/domain-04-endocrine";
import { cardiovascularRespiratory } from "../../../data/anatomia/domain-05-cardiovascular-respiratory";
import { digestive } from "../../../data/anatomia/domain-06-digestive";
import { urinaryReproductive } from "../../../data/anatomia/domain-07-urinary-reproductive";
import { sensory } from "../../../data/anatomia/domain-08-sensory";

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
