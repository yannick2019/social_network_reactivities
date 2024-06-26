import { useEffect, useState } from "react";
import axios from "axios";
import { Container, List, ListItem } from "semantic-ui-react";
import { Activity } from "../models/activities";
import NavBar from "./NavBar";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        console.log(response);
        setActivities(response.data);
      });
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <List>
          {activities.map((activity) => (
            <ListItem key={activity.id}>{activity.title}</ListItem>
          ))}
        </List>
      </Container>
    </>
  );
}

export default App;
