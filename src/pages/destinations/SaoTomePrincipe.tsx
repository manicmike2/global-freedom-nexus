import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import { getDestination } from "@/lib/destination-content";

const SaoTomePrincipe = () => <DestinationPageTemplate data={getDestination("sao-tome-and-principe")} />;
export default SaoTomePrincipe;
