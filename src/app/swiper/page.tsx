import { Swiper } from "@/components/pages/swiper";
import { TGame } from "@/types/types";
import { fetchData } from "@/utils/functions/fetch-data";

export default async function SwiperPage() {

  const response = await fetchData<{ results: TGame[] }>(
    `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  if (response.isRight()) return <Swiper data={response.value.results} />;
}
