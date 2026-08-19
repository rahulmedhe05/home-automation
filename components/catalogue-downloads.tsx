"use client";

import { FileText, ExternalLink } from "lucide-react";

export interface CatalogueEntry {
  file: string;
  name: string;
  tag: string;
}

export const catalogues: CatalogueEntry[] = [
  { file: "https://drive.google.com/file/d/1gYh8MKCtOjn3CfYQxWhZXeFSFYxLSCSl/view?usp=drive_link", name: "VARNI Master Catalogue 2026", tag: "General" },
  { file: "https://drive.google.com/file/d/16-mlMLWV7xt3stQx_ilXMA19nAlW0cpE/view?usp=drive_link", name: "Touch Panel Series Catalogue", tag: "Touch Panel" },
  { file: "https://drive.google.com/file/d/1bQbLWPmHG7mQg1Dpg1vb_G0w-WJZLQtH/view?usp=drive_link", name: "Color Series Catalogue 2026", tag: "Color" },
  { file: "https://drive.google.com/file/d/1Cnqg5WoOp1gRq1VZh6oMiHQVOiyYl2rk/view?usp=drive_link", name: "Edge Series Catalogue 2026", tag: "Edge" },
  { file: "https://drive.google.com/file/d/1el44hln8BT6HnuZsgketK6KIhDe0no7Y/view?usp=drive_link", name: "VARNI Digital Catalogue 2025", tag: "General" },
  { file: "https://drive.google.com/file/d/1m3Fc2uQ9eBdK8txssCAls6oNv9caVfvs/view?usp=drive_link", name: "VARNI Digital Catalogue 2024", tag: "General" },
];

interface Props {
  variant?: "dark" | "light";
  className?: string;
}

export function CatalogueDownloads({ variant = "dark", className = "" }: Props) {
  const isDark = variant === "dark";
  return (
    <div className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {catalogues.map((cat) => (
          <a
            key={cat.file}
            href={cat.file}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-3 rounded-lg border p-3 transition-colors ${
              isDark
                ? "border-white/10 bg-white/[0.03] hover:border-pink-400/50 hover:bg-white/[0.06]"
                : "border-gray-200 bg-white hover:border-pink-400 hover:bg-pink-50"
            }`}
          >
            <FileText
              className={`h-5 w-5 flex-shrink-0 ${isDark ? "text-pink-400" : "text-pink-600"}`}
            />
            <div className="min-w-0 flex-1">
              <p className={`truncate text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                {cat.name}
              </p>
              <p className={`text-xs ${isDark ? "text-white/50" : "text-gray-500"}`}>{cat.tag}</p>
            </div>
            <ExternalLink
              className={`h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                isDark ? "text-white/50" : "text-gray-400"
              }`}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
