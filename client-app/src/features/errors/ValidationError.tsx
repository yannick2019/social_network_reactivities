import { Message, MessageItem, MessageList } from "semantic-ui-react";

interface Props {
    errors: string[];
}

export default function ValidationError({ errors }: Props) {
    return (
        <Message error>
            {errors && (
                <MessageList>
                    {errors.map((err: string, index) => (
                        <MessageItem key={index}>{err}</MessageItem>
                    ))}
                </MessageList>
            )}
        </Message>
    )
}