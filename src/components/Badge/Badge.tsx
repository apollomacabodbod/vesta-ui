// src/components/Badge/Badge.tsx
type BadgeProps = {
  text: string;
  color?: "green" | "red" | "gray";
};

export function Badge({ text, color = "gray" }: BadgeProps) {
  return <span className={`badge badge-${color}`}>{text}</span>;
}
