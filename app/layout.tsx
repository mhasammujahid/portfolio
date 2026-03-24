import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "@/app/styles/globals.css";

export const metadata: Metadata = {
  title: "Muhammad Hassam Mujahid — Software Engineer",
  description:
    "Software Engineer specializing in MERN stack, cloud architecture, and performance engineering. Building scalable systems for 50K+ daily users.",
  keywords: [
    "Software Engineer",
    "MERN Stack",
    "React",
    "Node.js",
    "Next.js",
    "AWS",
    "Full Stack Developer",
    "Muhammad Hassam Mujahid",
  ],
  authors: [{ name: "Muhammad Hassam Mujahid", url: "https://github.com/mhasammujahid" }],
  openGraph: {
    title: "Muhammad Hassam Mujahid — Software Engineer",
    description:
      "Software Engineer specializing in MERN stack, cloud architecture, and performance engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hassam Mujahid — Software Engineer",
    description:
      "Software Engineer specializing in MERN stack, cloud architecture, and performance engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
