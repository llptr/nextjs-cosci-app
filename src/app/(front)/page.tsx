import Features01Page from "@/components/features-01/features-01";
import Footer05Page from "@/components/footer-05/footer-05";
import Hero02 from "@/components/hero-02/hero-02";
//<div></div> or <> </> it's was the same
export default function Home() {
  return (
    <> 
      <Hero02/>
      <Features01Page/>
      <Footer05Page/>
    </>
  );
}
