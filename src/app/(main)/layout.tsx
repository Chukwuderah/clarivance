import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-full flex flex-col">
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
