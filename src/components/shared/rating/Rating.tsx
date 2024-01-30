import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import "./Rating.scss";

interface Props {
    value: number;
}

export default function Rating({ value }: Props) {
    const fullStars = Math.floor(value);
    const halfStar = value - fullStars > 0.2;
    const emptyStars = 10 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="rating-wrapper">
            {[...Array(fullStars)].map((star, index) => (
                <IoMdStar key={index} />
            ))}
            {halfStar ? <IoMdStarHalf /> : <IoMdStarOutline />}
            {[...Array(emptyStars)].map((star, index) => (
                <IoMdStarOutline key={index} />
            ))}
        </div>
    );
}
