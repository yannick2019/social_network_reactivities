import {
    Button,
    Item,
    ItemContent,
    ItemDescription,
    ItemExtra,
    ItemGroup,
    ItemHeader,
    ItemMeta,
    Label,
    Segment,
} from "semantic-ui-react";
import { SyntheticEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

export default observer(function ActivityList() {
    const { activityStore } = useStore();
    const { activitiesByDate, deleteActivity, loading } = activityStore;
    const [target, setTarget] = useState("");

    const handleDeleteActivity = (
        e: SyntheticEvent<HTMLButtonElement>,
        id: string
    ) => {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    };

    return (
        <Segment>
            <ItemGroup divided>
                {activitiesByDate.map((activity) => (
                    <Item key={activity.id}>
                        <ItemContent>
                            <ItemHeader as="a">{activity.title}</ItemHeader>
                            <ItemMeta>{activity.date}</ItemMeta>
                            <ItemDescription>
                                <div>{activity.description}</div>
                                <div>
                                    {activity.city}, {activity.venue}
                                </div>
                            </ItemDescription>
                            <ItemExtra>
                                <Button
                                    name={activity.id}
                                    loading={loading && target === activity.id}
                                    onClick={(e) =>
                                        handleDeleteActivity(e, activity.id)
                                    }
                                    floated="right"
                                    content="Delete"
                                    color="red"
                                />
                                <Button
                                    as={Link}
                                    to={`/activities/${activity.id}`}
                                    floated="right"
                                    content="View"
                                    color="blue"
                                />
                                <Label basic content={activity.category} />
                            </ItemExtra>
                        </ItemContent>
                    </Item>
                ))}
            </ItemGroup>
        </Segment>
    );
});
