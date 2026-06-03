import type { Metadata } from "next";
import { Navbar } from "@/components";
import PrivacyHero from "../privacy-policy/components/Privacyhero";
import PrivacyCommitment from "../privacy-policy/components/PrivacyCommitment";
import PrivacyInfoCollect from "../privacy-policy/components/Privacyinfocollect";
import Privacyhowweuse from "../privacy-policy/components/Privacyhowweuse";
import Howweshare from "../privacy-policy/components/Howweshare";
import PrivacyCookies from "../privacy-policy/components/Privacycookies";
import Datasecurity from "../privacy-policy/components/Datasecurity";
import Yourprivacy from "../privacy-policy/components/Yourprivacy";
import Dataretention from "../privacy-policy/components/Dataretention";
import Thirdparty from "../privacy-policy/components/Thirdparty";
import Privacyupdate from "../privacy-policy/components/Privacyupdate";
import { Footer } from "@/components";

export const metadata: Metadata = {
  title: "Privacy Policy | The Prime Crafters AI Automation Agency",
  description:
    "Read The Prime Crafters’ privacy policy to understand how we collect, use, and protect your data. Your privacy is our priority — transparent, secure, and GDPR-aware.",

  alternates: {
    canonical: "https://www.theprimecrafters.com/privacy-policy",
  },
};
export default function PrivacyPage() {
  return (
    <main>
      <Navbar/>
      <PrivacyHero />
      <PrivacyCommitment />
      <PrivacyInfoCollect/>
      <Privacyhowweuse/>
      <PrivacyCookies/>
      <Howweshare/>
      
      <Datasecurity/>
      <Dataretention/>
      <Yourprivacy/>
      <Thirdparty/>
      <Privacyupdate/>
      <Footer/>
    </main>
  );
}