import BannerList from "../layout/BannerList";
import BestEvents from "../layout/BestEvents.jsx";
import TicketOpen from "../layout/TicketOpen.jsx";
import SecondaryBanner from "../layout/SecondaryBanner.jsx";
import RecommendedEvents from "../layout/RecommendedEvents.jsx";

export default function MainPage() {
  return (
    <main>
      <h2 hidden>메인페이지</h2>
      <BannerList />
      <BestEvents />
      <TicketOpen />
      <SecondaryBanner />
      <RecommendedEvents />
    </main>
  );
}
