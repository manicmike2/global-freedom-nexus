import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import { getDestination } from "@/lib/destination-content";

const Portugal = () => <DestinationPageTemplate data={getDestination("portugal")} />;
export default Portugal;
