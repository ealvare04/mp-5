import UrlsDisplay from "@/components/UrlsDisplay";
import getAllUrls from "@/lib/getAllUrls";

export default async function Home() {

    const urls = await getAllUrls();

    return (
    <div>
        <UrlsDisplay inputUrls={urls} />
    </div>
  );
}
