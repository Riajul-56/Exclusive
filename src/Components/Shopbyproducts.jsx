import React, { useState } from 'react'
import Flex from './Flex'
import Paginate from './Paginate'

const Shopbyproducts = ({ loading }) => {
    let [perpage, satPerpage] = useState(6)
    let handlePerpage = (e) => {
        satPerpage(e.target.value)
    }
    return (
        <div>

            <div className=' flex justify-end mb-[30px]'>
                <h5 className='font-poppins font-normal leading-6 text-4 text-black'>Show:</h5>

                <select onChange={handlePerpage}
                    id="countries" className="w-[78px] border rounded-lg focus:outline-none right-0 top-0 font-poppins text-center ">
                        
                    <option value="3">3</option>
                    <option selected value="6">6</option>
                    <option value="12">12</option>
                    <option value="24">24</option>

                </select>
            </div>

            <Flex className="justify-between flex-wrap">
                {loading ?
                    <Flex className="flex-wrap justify-between">
                        <div
                            role="status"
                            className="max-w-sm lg:w-[270px] border rounded shadow animate-pulse md:p-6"
                        >
                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                <svg
                                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 16 20"
                                >
                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                </svg>
                            </div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                            <div className="flex items-center mt-4">

                                <div>
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                                </div>
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>

                        <div
                            role="status"
                            className="max-w-sm lg:w-[270px] border rounded shadow animate-pulse md:p-6"
                        >
                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                <svg
                                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 16 20"
                                >
                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                </svg>
                            </div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                            <div className="flex items-center mt-4">

                                <div>
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                                </div>
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>

                        <div
                            role="status"
                            className="max-w-sm lg:w-[270px] border rounded shadow animate-pulse md:p-6"
                        >
                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                <svg
                                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 16 20"
                                >
                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                </svg>
                            </div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                            <div className="flex items-center mt-4">

                                <div>
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                                </div>
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>

                        <div
                            role="status"
                            className="max-w-sm lg:w-[270px] border rounded shadow animate-pulse md:p-6"
                        >
                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                <svg
                                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 16 20"
                                >
                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                </svg>
                            </div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                            <div className="flex items-center mt-4">

                                <div>
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                                </div>
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>

                        <div
                            role="status"
                            className="max-w-sm lg:w-[270px] border rounded shadow animate-pulse md:p-6"
                        >
                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                <svg
                                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 16 20"
                                >
                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                </svg>
                            </div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                            <div className="flex items-center mt-4">

                                <div>
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                                </div>
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>

                        <div
                            role="status"
                            className="max-w-sm lg:w-[270px] border rounded shadow animate-pulse md:p-6"
                        >
                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                <svg
                                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 16 20"
                                >
                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                </svg>
                            </div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                            <div className="flex items-center mt-4">

                                <div>
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                                </div>
                            </div>

                            <span className="sr-only">Loading...</span>
                        </div>

                    </Flex>
                    :
                    <Paginate itemsPerPage={perpage}/>
                }
            </Flex>

        </div>
    )
}

export default Shopbyproducts
