import BannerList from "../layout/BannerList";
import BestEvents from "../layout/BestEvents.jsx";

export default function MainPage() {
  return (
    <main>
      <h2 hidden>메인페이지</h2>
      <BannerList />
      <BestEvents />
    </main>
  );
}
