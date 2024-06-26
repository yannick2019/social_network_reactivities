import { Button, Form, FormInput, Segment } from "semantic-ui-react";

export default function ActivityForm() {
  return (
    <Segment clearing>
      <Form>
        <FormInput placeholder="Title" />
        <FormInput placeholder="Description" />
        <FormInput placeholder="Category" />
        <FormInput placeholder="Date" />
        <FormInput placeholder="City" />
        <FormInput placeholder="Venue" />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button floated="right" type="button" content="Cancel" />
      </Form>
    </Segment>
  );
}
