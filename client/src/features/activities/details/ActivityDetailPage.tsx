import {  Grid, Typography } from "@mui/material"
import {  useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsSidebar from "./ActivityDetailsSidebar";


export default function ActivityDetailPage() {
    
    
    const {id} = useParams();
    const {activity, isLoading} =  useActivities(id);

    if (isLoading) return <Typography>Loading...</Typography>

    if (!activity) return <Typography>Activity mot found</Typography>
    return (
    <Grid container spacing={3}>
        <Grid size={8}>
            <ActivityDetailsHeader activity={activity}></ActivityDetailsHeader>
            <ActivityDetailsInfo activity={activity}></ActivityDetailsInfo>
            <ActivityDetailsChat></ActivityDetailsChat>
        </Grid>
        <Grid size={4}>
            <ActivityDetailsSidebar/>
        </Grid>
    </Grid>
  )
}
