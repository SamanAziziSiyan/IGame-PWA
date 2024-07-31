// components/Pagination.tsx

import { PaginationProps } from "../types";

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center md:gap-x-[75px] gap-x-4 mt-6">
            <div>
                <button
                    className="md:text-sm text-[10px] font-medium"
                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                >
                    قبلی
                </button>
            </div>
            <div>
                <ul className="flex gap-x-2">
                    {pages.map(page => (
                        <li key={page}>
                            <button
                                className={`rounded-full flex items-center justify-center align-middle w-6 h-6 p-3 font-semibold text-[10px] ${page === currentPage ? 'bg-white text-[#111]' : 'bg-[#2d2d2d] text-white'
                                    }`}
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <button
                    className="md:text-sm text-[10px] font-medium"
                    onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                >
                    بعدی
                </button>
            </div>
        </div>
    );
};

export default Pagination;
