import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import "./Paginator.scss";

interface Props {
    currentPage: number;
    onPageSelect: (page: number) => void;
    totalPages: number;
}

function getPageNumbers(currentPage: number, totalPages: number): number[] {
    const pages = 10;
    let calculated: number[] = [];
    let start = 1;
    if (currentPage - pages / 2 < 1) start = 1;
    else start = currentPage - pages / 2;
    for (let i = start; i <= start + pages; i++) {
        if (i <= totalPages) calculated.push(i);
    }
    return calculated;
}

export default function Paginator({
    currentPage,
    onPageSelect,
    totalPages,
}: Props) {
    let calculated = getPageNumbers(currentPage, totalPages);

    return (
        <div className="paginator-wrapper">
            <div className="-buttons">
                <div className="-button -icon clickable">
                    <BiSolidChevronLeft
                        size={24}
                        color={currentPage > 1 ? "#CCC" : "#777"}
                        onClick={() =>
                            currentPage > 1 && onPageSelect(currentPage - 1)
                        }
                    />
                </div>
                {calculated.map((page: number, index: number) => (
                    <div
                        onClick={() => onPageSelect(page)}
                        className={`clickable -button ${
                            page === currentPage ? "-bold" : ""
                        }`}
                        key={page}
                    >
                        {page > currentPage &&
                            calculated[index - 1] < page - 2 && (
                                <span>...</span>
                            )}
                        {page}
                        {page < currentPage &&
                            calculated[index + 1] > page + 2 && (
                                <span>...</span>
                            )}
                    </div>
                ))}
                <div className="-button -icon clickable">
                    <BiSolidChevronRight
                        size={24}
                        onClick={() =>
                            currentPage < totalPages &&
                            onPageSelect(currentPage + 1)
                        }
                    />
                </div>
            </div>
        </div>
    );
}
