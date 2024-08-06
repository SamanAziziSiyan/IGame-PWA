import { FC, useState } from 'react';

interface FilterCategoriesProps {
    setSelectedCategory: (category: string) => void;
}

const FilterCategories: FC<FilterCategoriesProps> = ({ setSelectedCategory }) => {
    const categories = [
        { name: 'همه', value: 'all' },
        { name: 'سیپی', value: 'cp' },
        { name: 'آفر', value: 'offer' }
    ];

    const [activeCategory, setActiveCategory] = useState<string>('all');

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
        setSelectedCategory(category);
    };

    return (
        <div className="container-px">
            <ul className="flex md:gap-x-[55px] gap-x-[27px] md:text-xl text-[14px] font-normal text-white max-lg:overflow-x-scroll">
                {categories.map((category) => (
                    <li
                        key={category.value}
                        className={`cursor-pointer text-nowrap pb-1 transition-all duration-200 ease-linear 
                            ${activeCategory === category.value 
                                ? 'border-b-2 border-[#CCFB4B]' 
                                : 'hover:border-b-[1px] hover:border-[#CCFB4B]'
                            }`}
                        onClick={() => handleCategoryClick(category.value)}
                    >
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilterCategories;
