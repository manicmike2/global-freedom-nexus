import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import { getDestination } from "@/lib/destination-content";

const Panama = () => <DestinationPageTemplate data={getDestination("panama")} />;
export default Panama;
