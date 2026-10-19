
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { AmbientMotion, PageTransition } from "@/components/motion-system";

export default function AppFrame({ children }) {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <AmbientMotion />

      <div className="w-full">
        <SiteHeader />

        <main
          className="relative bg-cover bg-center bg-no-repeat px-4 py-5"
          style={{
            backgroundImage: "url('/background.png')",
          }}
        >
          <PageTransition>{children}</PageTransition>
        </main>

        {/* <SiteFooter /> */}
      </div>
    </section>
  );
}
