import React from 'react';

export interface ToCItem {
  id: string;
  title: string;
  level: number;
}

export interface TableOfContentsProps {
  items: ToCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4 mb-8 border border-zinc-200 dark:border-zinc-800">
      <h4 className="font-bold mb-3 text-lg">Spis treści</h4>
      <ul className="space-y-1">
        {items.map((item, index) => {
          // Calculate indentation based on heading level (h2 is top level, h3 is indented, etc.)
          const indentClass = item.level === 2 ? ""
                            : item.level === 3 ? "ml-4"
                            : item.level === 4 ? "ml-8"
                            : item.level === 5 ? "ml-12"
                            : "ml-16";

          return (
            <li key={`${item.id}-${index}`} className={`${indentClass}`}>
              <a
                href={`#${item.id}`}
                className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
