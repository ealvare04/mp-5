import {UrlProps} from "@/types";
import Link from "next/link";
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";

export default function UrlPreview({url}: { url: UrlProps}) {
    // hardcoded to vercel
    const fullUrl = `https://mp-5-sigma-swart.vercel.app/r/${url.alias}`;
    return (
        <>
            <Card sx={{width: "50%", m: 1, borderRadius: 3, backgroundColor: "#9dd6df", textAlign: "center", mx: "auto"}}>
                <Typography variant="body2" sx={{textAlign: "center", color: "black"}}>
                    {fullUrl}
                </Typography>
            </Card>
            <Card sx={{width: "50%", m: 1, borderRadius: 3, backgroundColor: "#38bdf8", textAlign: "center", mx: "auto"}}>
                <CardActionArea component={Link} href={`/r/${url.alias}`}>
                    <CardContent>
                        <Typography variant="h6" sx={{color: "black"}}>{url.alias}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}