import {UrlProps} from "@/types";
import Link from "next/link";
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";

export default function UrlPreview({url}: { url: UrlProps}) {
    return (
        <Card sx={{width: "50%", m: 1, borderRadius: 3, backgroundColor: "#38bdf8", textAlign: "center", mx: "auto"}}>
            <CardActionArea component={Link} href={`/r/${url.alias}`}>
                <CardContent>
                    <Typography variant="h6">{url.alias}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}