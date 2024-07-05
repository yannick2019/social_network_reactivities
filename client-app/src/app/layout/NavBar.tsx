import { Container, MenuItem, Menu, Button } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default function NavBar() {
    const { activityStore } = useStore();

    return (
        <div style={{ marginBottom: "90px" }}>
            <Menu inverted fixed="top" className="menu">
                <Container>
                    <MenuItem>
                        <img
                            src="assets/logo.png"
                            alt="logo"
                            style={{ marginRight: "10px" }}
                        />
                        Reactivities
                    </MenuItem>
                    <MenuItem name="Activities" />
                    <MenuItem>
                        <Button
                            onClick={() => activityStore.openForm()}
                            positive
                            content="Create Activity"
                        />
                    </MenuItem>
                </Container>
            </Menu>
        </div>
    );
}
