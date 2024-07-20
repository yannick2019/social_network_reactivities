import { Container, MenuItem, Menu, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div style={{ marginBottom: "90px" }}>
            <Menu inverted fixed="top">
                <Container>
                    <MenuItem as={NavLink} to="/" header>
                        <img
                            src="assets/logo.png"
                            alt="logo"
                            style={{ marginRight: "10px" }}
                        />
                        Reactivities
                    </MenuItem>
                    <MenuItem as={NavLink} to="/activities" name="Activities" />
                    <MenuItem as={NavLink} to="/errors" name="Errors" />
                    <MenuItem>
                        <Button
                            as={NavLink}
                            to="/createActivity"
                            positive
                            content="Create Activity"
                        />
                    </MenuItem>
                </Container>
            </Menu>
        </div>
    );
}
