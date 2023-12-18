import React, { useState } from 'react';

import './CustomersPage.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import CustomerList from '../../components/List/CustomersList/List';
import ListFilter from '../../components/List/CustomersList/ListFilter';
import Pagination from '../../components/Pagination';
import Button from '../../components/Button/Button';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ResponsiveLayout from '../../components/ResponsiveLayout';

import { calculateTotalPages } from '../../utils/Pagination';
import { useCustomerData } from '../../hooks/useCustomerData';

const CustomersPage = () => {
    const [filterText, setFilterText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
  
    const { customers } = useCustomerData({ filterText }) || [];
    const filteredCustomers = customers?.filter((customer) =>
      customer.name?.toLowerCase().includes(filterText.toLowerCase())
      );
  
    const totalCustomers = filteredCustomers.length;
    const totalPages = calculateTotalPages(totalCustomers, itemsPerPage);
  
    const handleFilterChange = (newFilterText: string) => {
      setFilterText(newFilterText);
      setCurrentPage(1);
    };
  
    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedCustomers = filteredCustomers.slice(startIndex, endIndex);

    const handleAddCustomer = () => {

    };

    return (
        <div>
            <Header header="Our Customers"/>
            <div className="customersTopBar">
                <Button text="Add Customer" onClick={handleAddCustomer} />
                <ListFilter onFilterChange={handleFilterChange} />
            </div>
            <div className="customersTable">
                <ResponsiveLayout>
                    {customers.length === 0 && <LoadingSpinner />}
                    {filteredCustomers.length > 0 && (
                        <>
                        <CustomerList customers={displayedCustomers}/>
                        <Pagination onPageChange={handlePageChange} totalPages={totalPages} currentPage={currentPage} />
                        </>
                    )}
                </ResponsiveLayout>
            </div>
            <Footer />
        </div>
    );
};

export default CustomersPage;