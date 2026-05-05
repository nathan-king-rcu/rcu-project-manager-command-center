import { useState } from "react";

/**
 * ------------------------------------------------------------
 * RCU Project Manager Desktop Notes and Command Center
 * ------------------------------------------------------------
 * • Font: Aptos (assumed system / web available)
 * • Maroon is the predominant brand color
 * • Large text: ≥ 18pt
 * • Small text: < 18pt
 * ------------------------------------------------------------
 */

const BRAND = {
  maroon: "#5D1725",
  lightGray: "#C1C6C8",
  darkGray: "#777777",
  teal: "#00A3AD",
  beige: "#DAC79D",
  white: "#FFFFFF",
  black: "#000000",
};

type Agent = {
  id: string;
  name: string;
  description: string;
  webEnabled: boolean;
};

const AGENTS: Agent[] = [
  {
    id: "cte-info",
    name: "CTE Articles and Info",
    description:
      "Curated articles, policy updates, resources, and reference information related to Career & Technical Education.",
    webEnabled: true,
  },
  {
    id: "skillsusa-xwalk",
    name: "SkillsUSA Competition Xwalk",
    description:
      "Crosswalks linking curriculum objectives to SkillsUSA competition standards and frameworks.",
    webEnabled: false,
  },
  {
    id: "tsa-xwalk",
    name: "TSA Competition Xwalk",
    description:
      "Curriculum-to-competition alignment for TSA events and pathways.",
    webEnabled: false,
  },
  {
    id: "researcher",
    name: "Researcher",
    description:
      "Focused research agent for articles, trends, legislation, and best practices.",
    webEnabled: true,
  },
  {
    id: "analyst",
    name: "Analyst",
    description:
      "Analysis agent for trends, summaries, comparisons, and synthesis of information.",
    webEnabled: false,
  },
];

export default function Dashboard() {
  const [researchQuery, setResearchQuery] = useState("");
  const [researchLog, setResearchLog] = useState<string[]>([]);

  const startResearch = () => {
    if (!researchQuery.trim()) return;
    setResearchLog([
      ...researchLog,
      `Research request: ${researchQuery}`,
    ]);
    setResearchQuery("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: BRAND.maroon,
        padding: "24px",
        fontFamily: "Aptos, sans-serif",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          backgroundColor: BRAND.lightGray,
          padding: "16px 20px",
          borderRadius: "12px",
          marginBottom: "24px",
        }}
      >
        <h1
          style={{
            fontSize: "20pt",
            fontWeight: 600,
            color: BRAND.black,
            margin: 0,
          }}
        >
          RCU Project Manager Desktop Notes and Command Center
        </h1>
      </div>

      {/* RESEARCHER SEARCH BAR */}
      <div
        style={{
          backgroundColor: BRAND.beige,
          borderRadius: "12px",
          padding: "16px",
          marginBottom: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "18pt",
            fontWeight: 600,
            marginBottom: "8px",
            color: BRAND.black,
          }}
        >
          Researcher Agent
        </h2>

        <p
          style={{
            fontSize: "14pt",
            color: BRAND.black,
            marginBottom: "12px",
          }}
        >
          Enter a topic to create a new researcher inquiry.
        </p>

        <div style={{ display: "flex", gap: "8px" }}>
          <input
            type="text"
            value={researchQuery}
            onChange={(e) => setResearchQuery(e.target.value)}
            placeholder="e.g., Latest SkillsUSA manufacturing standards"
            style={{
              flex: 1,
              fontSize: "14pt",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #999",
            }}
          />
          <button
            onClick={startResearch}
            style={{
              backgroundColor: BRAND.maroon,
              color: BRAND.white,
              fontSize: "14pt",
              padding: "10px 14px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Start
          </button>
        </div>
      </div>

      {/* AGENT DASHBOARD GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {AGENTS.map((agent) => (
          <div
            key={agent.id}
            style={{
              backgroundColor: BRAND.beige,
              borderRadius: "14px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "18pt",
                  fontWeight: 600,
                  marginBottom: "8px",
                  color: BRAND.black,
                }}
              >
                {agent.name}
              </h3>

              <p
                style={{
                  fontSize: "14pt",
                  color: BRAND.black,
                  marginBottom: "16px",
                }}
              >
                {agent.description}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "14pt",
                  color: agent.webEnabled
                    ? BRAND.maroon
                    : BRAND.darkGray,
                  fontStyle: agent.webEnabled ? "normal" : "italic",
                }}
              >
                {agent.webEnabled
                  ? "Web updates enabled"
                  : "Manual / static agent"}
              </span>

              <button
                style={{
                  backgroundColor: BRAND.maroon,
                  color: BRAND.white,
                  fontSize: "14pt",
                  border: "none",
                  borderRadius: "6px",
                  padding: "8px 12px",
                  cursor: "pointer",
                }}
              >
                Open
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RESEARCH LOG */}
      {researchLog.length > 0 && (
        <div
          style={{
            backgroundColor: BRAND.darkGray,
            color: BRAND.white,
            borderRadius: "12px",
            padding: "16px",
            marginTop: "28px",
          }}
        >
          <h3
            style={{
              fontSize: "18pt",
              fontWeight: 600,
              marginBottom: "12px",
            }}
          >
            Researcher Activity Log
          </h3>

          <ul style={{ fontSize: "14pt", paddingLeft: "20px" }}>
            {researchLog.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
