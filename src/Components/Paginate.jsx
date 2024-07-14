import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

const Paginate = ({ itemsPerPage}) => {
    let productData=useSelector((state)=>state.allproduct.product)

    const items = productData

    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((item) => (
                        <div>
                            <ProductCard imageurl={item.thumbnail}
                                Name={item.title}
                                Price={`$ ${Math.floor(item.price - (item.discountPercentage / 100) * item.price)
                                    }`}
                                Offer={`$ ${item.price}`}
                                discount={`-${item.discountPercentage}%`}
                                review={item.reviews}
                                color="#DB4444"
                                rating={item.rating}
                            />
                        </div>
                    ))}
            </>
        );
    }

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=""
                renderOnZeroPageCount={null}
                className='flex mt-8'
                pageClassName='bg-black text-white px-6 py-2 ml-2'
            />
        </>
    );
}

export default Paginate
