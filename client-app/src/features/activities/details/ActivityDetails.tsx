import {
    Button,
    ButtonGroup,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardMeta,
    Image,
} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";

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

    if (loadingInitial) return <LoadingComponent content="Loading..." />;

    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity?.category}.jpg`} />
            <CardContent>
                <CardHeader>{activity?.title}</CardHeader>
                <CardMeta>
                    <span className="date">{activity?.date}</span>
                </CardMeta>
                <CardDescription>{activity?.description}</CardDescription>
            </CardContent>
            <CardContent extra>
                <ButtonGroup widths="2">
                    <Button
                        as={Link}
                        to={`/edit/${activity?.id}`}
                        basic
                        color="blue"
                        content="Edit"
                    />
                    <Button
                        as={Link}
                        to="/activities"
                        basic
                        color="grey"
                        content="Cancel"
                    />
                </ButtonGroup>
            </CardContent>
        </Card>
    );
});
