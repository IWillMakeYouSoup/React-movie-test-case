import "./Snackbar.scss";

interface Props {
    children: string;
}

export default function ({ children }: Props) {
    return <div className="snackbar">{children}</div>;
}
