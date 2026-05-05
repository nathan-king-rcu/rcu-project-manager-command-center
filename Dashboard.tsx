// RCU Project Manager Desktop Notes and Command Center
// React Dashboard Component

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, RefreshCw, BookOpen, BarChart3, Network, Send } from "lucide-react";

const BRAND = {
  maroon: "#5D1725",
  lightGray: "#C1C6C8",
  darkGray: "#777777",
  teal: "#00A3AD",
  beige: "#DAC79D",
};

export default function Dashboard() {
  const [query, setQuery] = useState("");

  return (
    <div style={{ backgroundColor: BRAND.maroon, fontFamily: 'Aptos, sans-serif', padding: '2rem' }}>
      <h1 style={{ backgroundColor: BRAND.lightGray, padding: '1rem' }}>
        RCU Project Manager Desktop Notes and Command Center
      </h1>
      <p style={{ backgroundColor: BRAND.beige, padding: '1rem' }}>
        This is the downloadable source file for your dashboard website.
      </p>
    </div>
  );
}
