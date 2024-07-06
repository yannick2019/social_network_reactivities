import {
    Button,
    Form,
    FormInput,
    FormTextArea,
    Segment,
} from "semantic-ui-react";
import { ChangeEvent, useEffect, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { Activity } from "../../../app/models/activities";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default observer(function ActivityForm() {
    const { activityStore } = useStore();
    const {
        createActivity,
        updateActivity,
        loading,
        loadActivity,
        loadingInitial,
    } = activityStore;
    const { id } = useParams();

    const [activity, setActivity] = useState<Activity>({
        id: "",
        title: "",
        category: "",
        description: "",
        date: "",
        city: "",
        venue: "",
    });

    useEffect(() => {
        if (id) {
            loadActivity(id).then((activity) => setActivity(activity!));
        }
    }, [id, loadActivity, activity]);

    const handleSubmit = () => {
        console.log(activity);
        activity.id ? updateActivity(activity) : createActivity(activity);
    };

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    };

    if (loadingInitial) return <LoadingComponent content="Loading..." />;

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <FormInput
                    placeholder="Title"
                    value={activity?.title}
                    name="title"
                    onChange={handleInputChange}
                />
                <FormTextArea
                    placeholder="Description"
                    value={activity?.description}
                    name="description"
                    onChange={handleInputChange}
                />
                <FormInput
                    placeholder="Category"
                    value={activity?.category}
                    name="category"
                    onChange={handleInputChange}
                />
                <FormInput
                    type="date"
                    placeholder="Date"
                    value={activity?.date}
                    name="date"
                    onChange={handleInputChange}
                />
                <FormInput
                    placeholder="City"
                    value={activity?.city}
                    name="city"
                    onChange={handleInputChange}
                />
                <FormInput
                    placeholder="Venue"
                    value={activity?.venue}
                    name="venue"
                    onChange={handleInputChange}
                />
                <Button
                    loading={loading}
                    floated="right"
                    positive
                    type="submit"
                    content="Submit"
                />
                <Button floated="right" type="button" content="Cancel" />
            </Form>
        </Segment>
    );
});
