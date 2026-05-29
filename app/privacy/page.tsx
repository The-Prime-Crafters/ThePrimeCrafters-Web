import { Navbar } from "@/components";
import PrivacyHero from "../privacy/components/Privacyhero";
import PrivacyCommitment from "../privacy/components/PrivacyCommitment";
import PrivacyInfoCollect from "../privacy/components/Privacyinfocollect";
import Privacyhowweuse from "../privacy/components/Privacyhowweuse";
import Howweshare from "../privacy/components/Howweshare";
import PrivacyCookies from "../privacy/components/Privacycookies";
import Datasecurity from "../privacy/components/Datasecurity";
import Yourprivacy from "../privacy/components/Yourprivacy";
import Dataretention from "../privacy/components/Dataretention";
import Thirdparty from "../privacy/components/Thirdparty";
import Privacyupdate from "../privacy/components/Privacyupdate";
import { Footer } from "@/components";
export default function PrivacyPage() {
  return (
    <main>
      <Navbar/>
      <PrivacyHero />
      <PrivacyCommitment />
      <PrivacyInfoCollect/>
      <Privacyhowweuse/>
      <Howweshare/>
      <PrivacyCookies/>
      <Datasecurity/>
      <Dataretention/>
      <Yourprivacy/>
      <Thirdparty/>
      <Privacyupdate/>
      <Footer/>
    </main>
  );
}