export default interface formProps {
    id: string;
    label: string;
    type: string;
    value: string;
    error: boolean | undefined;
    errorText: string | undefined;
}