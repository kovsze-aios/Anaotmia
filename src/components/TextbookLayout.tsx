"use client";
import Link from "next/link";
import { useState } from "react";
import { ChapterNav } from "./ChapterNav";
import type { TextbookDomain } from "@/types/textbook";

interface TextbookLayoutProps {
  domains: TextbookDomain[];
  activeSection: string | null;
  onSectionSelect: (domainId: string, sectionId: string) => void;
