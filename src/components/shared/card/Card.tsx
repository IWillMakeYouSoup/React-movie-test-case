import "./Card.scss";
import Rating from "../rating/Rating";

interface Props {
    header: string;
    image: string;
    text: string;
    vote: number;
}

export default function Card({ header, image, text, vote }: Props) {
    return (
        <div className="card-wrapper clickable">
            <div
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${image})`,
                }}
                className="-card"
            >
                <div className="-overlay">
                    <div className="-content">{header}</div>
                </div>
                <div className="-info">
                    <div className="-header">
                        <Rating value={vote} />
                    </div>
                    <div className="-text">{text.substring(0, 90)}...</div>
                </div>
            </div>
        </div>
    );
}
