import {UrlProps} from "@/types";
import Link from "next/link";

export default function UrlPreview({url}: { url: UrlProps}) {
    return (
        <Link href={`/r/${url.alias}`}>
            <div className="bg-sky-400 rounded-xl p-4 m-2 w-96">
                <h4>{url.alias}</h4>
                <p>{url.url}</p>
            </div>
        </Link>
    )
}