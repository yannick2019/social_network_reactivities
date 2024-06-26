import { Container, MenuItem, Menu, Button } from "semantic-ui-react";

export default function NavBar() {
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
            <Button positive content="Create Activity" />
          </MenuItem>
        </Container>
      </Menu>
    </div>
  );
}
