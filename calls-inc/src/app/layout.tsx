export const metadata = {
  title: "Calls Inc",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </body>
    </html>
  );
}
