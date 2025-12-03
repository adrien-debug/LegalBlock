import Hero from "@/components/home/Hero";
import Notifications from "@/components/home/Notifications";
import RecentRequests from "@/components/home/RecentRequests";
import LegalAnalysis from "@/components/home/LegalAnalysis";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <Hero />
      <Notifications />
      <RecentRequests />
      <LegalAnalysis />
    </div>
  );
}
