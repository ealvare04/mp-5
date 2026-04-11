"use client";

import {UrlProps} from "@/types";
import {useState} from "react";
import NewUrlForm from "@/components/NewUrlForm";
import UrlPreview from "@/components/UrlPreview";

export default function UrlsDisplay({inputUrls}: {inputUrls: UrlProps[]}){

    const [urls, setUrls] = useState(inputUrls);

    function append(newUrl: UrlProps) {
        setUrls([newUrl, ...urls]); // add new shortened url to display
    }

    return (
        <>
            <NewUrlForm append={append} />
            {
                urls.map((u) =>
                    (
                        <UrlPreview key={u.id} url={u} />
                    )
                )
            }
        </>
    )
}