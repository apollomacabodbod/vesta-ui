import type { ButtonHTMLAttributes, CSSProperties, FC } from "react";
import "./Button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string | number;
  color?: string;
  background?: string;
  width?: string;
  padding?: string;
  margin?: string;
  display?: "flex" | "inline-flex" | "block" | "none";
  border?: string;
  borderRadius?: string;
  hide?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  fontFamily,
  fontSize,
  fontWeight,
  color,
  background,
  width,
  padding,
  margin,
  display = "inline-flex",
  border,
  borderRadius,
  hide = false,
  type = "button",
  className = "",
  style,
  ...props
}) => {
  const dynamicStyles = {
    "--btn-font-family": fontFamily,
    "--btn-font-size": fontSize,
    "--btn-font-weight": fontWeight,
    "--btn-color": color,
    "--btn-bg": background,
    "--btn-width": width,
    "--btn-padding": padding,
    "--btn-margin": margin,
    "--btn-border": border,
    "--btn-radius": borderRadius,
    display: hide ? "none" : display,
    ...style
  } as CSSProperties;

  return (
    <button
      type={type}
      className={`custom-button ${className}`.trim()}
      style={dynamicStyles}
      {...props}
    >
      {children}
    </button>
  );
};
