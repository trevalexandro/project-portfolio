"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
import { ComponentProps, JSX } from "react";

const NextThemesProvider = dynamic(
	() => import('next-themes').then((e) => e.ThemeProvider),
	{
		ssr: false,
	}
);

const FinalThemeProvider = ({children, ...props}: ComponentProps<typeof ThemeProvider>): JSX.Element => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
};

export default FinalThemeProvider;
