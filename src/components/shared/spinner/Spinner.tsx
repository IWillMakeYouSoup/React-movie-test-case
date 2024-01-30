import "./Spinner.scss";

import PacmanLoader from "react-spinners/ClipLoader";

export default function () {
    return (
        <div>
            <PacmanLoader
                color={"#FFF"}
                loading
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}
