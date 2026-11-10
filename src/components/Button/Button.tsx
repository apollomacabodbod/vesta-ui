import React from "react";
import type { ButtonHTMLAttributes, CSSProperties } from "react";
import "./Button.css";

// We define custom props that match your list exactly
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fontFamily?: string; // <--- ADDED THIS
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

export const Button: React.FC<ButtonProps> = ({
  children,
  fontFamily, // <--- ADDED THIS
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
  className = "",
  style,
  ...props
}) => {
  // We map the React props to CSS Variables
  const dynamicStyles: CSSProperties = {
    "--btn-font-family": fontFamily, // <--- ADDED THIS
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
  } as React.CSSProperties;

  return (
    <button
      className={`custom-button ${className}`.trim()}
      style={dynamicStyles}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
