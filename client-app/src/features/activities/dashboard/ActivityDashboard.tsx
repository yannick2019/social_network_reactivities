import { Grid, GridColumn, List, ListItem } from "semantic-ui-react";
import { Activity } from "../../../app/models/activities";

interface Props {
  activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
  return (
    <Grid>
      <GridColumn width="10">
        <List>
          {activities.map((activity) => (
            <ListItem key={activity.id}>{activity.title}</ListItem>
          ))}
        </List>
      </GridColumn>
    </Grid>
  );
}
