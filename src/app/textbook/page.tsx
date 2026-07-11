"use client";

import { Suspense } from "react";
import { TextbookLayout } from "@/components/TextbookLayout";
import { getDomains } from "@/data/textbook";
import { TextbookPageInner } from "./TextbookPageInner";

export default function TextbookPage() {
  const domains = getDomains();

  return (
    <Suspense
      fallback={
        <TextbookLayout
          domains={domains}
          activeSection={null}
          onSectionSelect={() => {}}
        >
          <div className="textbook-welcome">
            <h1>Smart Anatomy Textbook</h1>
            <p>Loading...</p>
          </div>
        </TextbookLayout>
      }
    >
      <TextbookPageInner />
    </Suspense>
  );
}
