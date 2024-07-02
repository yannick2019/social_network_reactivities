import { Grid, GridColumn } from "semantic-ui-react";
import { Activity } from "../../../app/models/activities";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEditActivity: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityDashboard({
    activities,
    selectedActivity,
    selectActivity,
    cancelSelectActivity,
    editMode,
    openForm,
    closeForm,
    createOrEditActivity,
    deleteActivity,
    submitting,
}: Props) {
    return (
        <Grid>
            <GridColumn width="10">
                <ActivityList
                    activities={activities}
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                    submitting={submitting}
                />
            </GridColumn>
            <GridColumn width="6">
                {selectedActivity && !editMode && (
                    <ActivityDetails
                        activity={selectedActivity}
                        cancelSelectActivity={cancelSelectActivity}
                        openForm={openForm}
                    />
                )}
                {editMode && (
                    <ActivityForm
                        closeForm={closeForm}
                        activity={selectedActivity}
                        createOrEditActivity={createOrEditActivity}
                        submitting={submitting}
                    />
                )}
            </GridColumn>
        </Grid>
    );
}
