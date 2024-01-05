export default interface formProps {
    id: string;
    name: string;
    label: string;
    type: string;
    value: string;
    error: boolean | undefined;
    errorText: string | undefined;
}