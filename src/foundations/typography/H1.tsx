import React from "react";

type TypographyProps = {
    children: React.ReactNode;
};
export const H1: React.FC<TypographyProps> = ({ children }) => (
    <h1 className="text-4xl text-primary-600 font-bold leading-tight">{children}</h1>
);

export const H2: React.FC<TypographyProps> = ({ children }) => (
    <h2 className="text-3xl font-semibold leading-snug">{children}</h2>
);

export const H3: React.FC<TypographyProps> = ({ children }) => (
    <h3 className="text-2xl font-semibold leading-snug">{children}</h3>
);

export const H4: React.FC<TypographyProps> = ({ children }) => (
    <h4 className="text-xl font-medium leading-snug">{children}</h4>
);

export const H5: React.FC<TypographyProps> = ({ children }) => (
    <h5 className="text-lg font-medium leading-snug">{children}</h5>
);

export const H6: React.FC<TypographyProps> = ({ children }) => (
    <h6 className="text-base font-medium leading-snug">{children}</h6>
);

export const Body1: React.FC<TypographyProps> = ({ children }) => (
    <p className="text-base font-normal leading-relaxed">{children}</p>
);

export const Body2: React.FC<TypographyProps> = ({ children }) => (
    <p className="text-sm font-normal leading-relaxed">{children}</p>
);

export const Caption: React.FC<TypographyProps> = ({ children }) => (
    <span className="text-xs font-normal leading-tight text-gray-500">{children}</span>
);

export const Label: React.FC<TypographyProps> = ({ children }) => (
    <label className="text-sm font-medium text-gray-700">{children}</label>
);
