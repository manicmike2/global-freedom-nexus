import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import { getDestination } from "@/lib/destination-content";

const SaintKittsNevis = () => <DestinationPageTemplate data={getDestination("saint-kitts-nevis")} />;
export default SaintKittsNevis;
