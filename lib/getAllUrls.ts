import {UrlProps} from "@/types";
import getCollection, {URLS_COLLECTION} from "@/db";

export default async function getAllUrls():Promise<UrlProps[]>{

    const urlsCollection = await getCollection(URLS_COLLECTION);
    const data = await urlsCollection.find().toArray();

    const urls:UrlProps[]=data.map((u) =>
        (
            {
                id: u._id.toHexString(),
                alias: u.alias,
                url: u.url,
            }
        )
    )

    return urls.reverse();
}