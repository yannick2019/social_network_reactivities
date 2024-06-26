import { Grid, GridColumn } from "semantic-ui-react";
import { Activity } from "../../../app/models/activities";
import ActivityList from "./ActivityList";

interface Props {
  activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
  return (
    <Grid>
      <GridColumn width="10">
        <ActivityList activities={activities} />
      </GridColumn>
    </Grid>
  );
}
