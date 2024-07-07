import { Grid, GridColumn } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";

export default observer(function ActivityDetails() {
    const { activityStore } = useStore();
    const {
        selectedActivity: activity,
        loadActivity,
        loadingInitial,
    } = activityStore;
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            loadActivity(id);
        }
    }, [id, loadActivity]);

    if (loadingInitial || !activity)
        return <LoadingComponent content="Loading..." />;

    return (
        <Grid>
            <GridColumn width={10}>
                <ActivityDetailedHeader activity={activity} />
                <ActivityDetailedInfo activity={activity} />
                <ActivityDetailedChat />
            </GridColumn>
            <GridColumn width={6}>
                <ActivityDetailedSidebar />
            </GridColumn>
        </Grid>
    );
});
