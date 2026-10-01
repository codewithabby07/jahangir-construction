"use client";

import { useSearchParams } from "next/navigation";
import QuoteForm from "@/components/QuoteForm";

export default function QuoteFormWrapper() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") ?? undefined;

  return <QuoteForm preselectedService={service} />;
}
