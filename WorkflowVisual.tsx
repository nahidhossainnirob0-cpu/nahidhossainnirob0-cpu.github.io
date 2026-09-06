interface WorkflowVisualProps {
  nodes: string[];
  accent?: string;
  compact?: boolean;
}

/**
 * Generates a simple, deterministic node-and-connector diagram representing
 * an automation workflow. Used in place of photography — the subject matter
 * (automation pipelines) is best represented as a system diagram, not a stock photo.
 */
export default function WorkflowVisual({ nodes, accent = '#4C7CF0', compact = false }: WorkflowVisualProps) {
  const nodeHeight = compact ? 34 : 44;
  const gap = compact ? 26 : 40;
  const width = compact ? 220 : 320;
  const startY = compact ? 14 : 20;

  return (
    <svg
      viewBox={`0 0 ${width} ${startY * 2 + nodes.length * nodeHeight + (nodes.length - 1) * gap}`}
      className="w-full h-full"
      role="img"
      aria-label={`Workflow diagram: ${nodes.join(' to ')}`}
    >
      <defs>
        <linearGradient id={`line-${accent.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.1" />
          <stop offset="50%" stopColor={accent} stopOpacity="0.9" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {nodes.map((label, i) => {
        const y = startY + i * (nodeHeight + gap);
        const cx = width / 2;
        return (
          <g key={label}>
            {i < nodes.length - 1 && (
              <line
                x1={cx}
                y1={y + nodeHeight}
                x2={cx}
                y2={y + nodeHeight + gap}
                stroke={`url(#line-${accent.replace('#', '')})`}
                strokeWidth={2}
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="20"
                  to="0"
                  dur="1.4s"
                  repeatCount="indefinite"
                />
              </line>
            )}
            <rect
              x={cx - (compact ? 78 : 110)}
              y={y}
              width={compact ? 156 : 220}
              height={nodeHeight}
              rx={10}
              fill="#0F1522"
              stroke="rgba(140,160,200,0.22)"
              strokeWidth={1}
            />
            <circle cx={cx - (compact ? 62 : 90)} cy={y + nodeHeight / 2} r={4} fill={accent} />
            <text
              x={cx - (compact ? 48 : 72)}
              y={y + nodeHeight / 2 + 4}
              fill="#E8ECF4"
              fontSize={compact ? 10 : 12}
              fontFamily="Inter, sans-serif"
              fontWeight={500}
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
