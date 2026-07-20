import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { VEHICLE_ITEMS } from "../homeContent";
import { VehicleCard } from "./VehicleCard";

export function VehicleSection() {
  return (
    <section className="bg-wnb-surface py-16 sm:py-24 border-b border-wnb-border" aria-labelledby="vehicle-section-title">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          id="vehicle-section-title"
          eyebrow="Armada Klasik"
          title="Land Rover Short dan Long"
          description="WNB menggunakan dua kategori varian kendaraan klasik. Pemilihan armada mempertimbangkan jumlah peserta, karakter rute, dan kebutuhan perjalanan Anda."
          align="center"
          headingLevel="h2"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {VEHICLE_ITEMS.map((vehicle) => (
            <VehicleCard key={vehicle.variant} vehicle={vehicle} />
          ))}
        </div>
      </Container>
    </section>
  );
}
