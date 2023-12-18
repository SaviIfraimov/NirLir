import React, { useState } from 'react';
import './OrdersPage.css';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import { useOrderData } from '../../hooks/useOrderData';
import List from '../../components/List/OrdersList/List';
import ListFilter from '../../components/List/OrdersList/ListFilter';
import Pagination from '../../components/Pagination';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ResponsiveLayout from '../../components/ResponsiveLayout';
import { calculateTotalPages } from '../../utils/Pagination';
import Button from '../../components/Button/Button';

import OrderModal from '../../components/Modal/OrderModal';
import { createOrder } from '../../services/ordersService';

const OrdersPage = () => {
    const [filterText, setFilterText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const itemsPerPage = 20; // Adjustable size.
  
    const { orders } = useOrderData({ filterText }) || [];
    
    const filteredOrders = orders?.filter((order) =>
      order.status?.toLowerCase().includes(filterText.toLowerCase())
    );
  
    const totalOrders = filteredOrders.length;
    const totalPages = calculateTotalPages(totalOrders, itemsPerPage);
  
    const handleFilterChange = (newFilterText: string) => {
      setFilterText(newFilterText);
      setCurrentPage(1);
    };
  
    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedOrders = filteredOrders.slice(startIndex, endIndex);

    const handleAddOrder = () => {
        setShowModal(true);
    };

    const handleAddOrderSubmit = (formData: any) => {
        setShowModal(false);
        createOrder(formData);
        // TODO to do logic to update the state (no refresh) - can be done with useEffect
    };

    return (
        <div>
            <Header header="Orders List"/>
            <div className="ordersTopBar">
                <Button text="Add Order" onClick={handleAddOrder} />
                <ListFilter onFilterChange={handleFilterChange} />
            </div>
            <div className="ordersTable">
                <OrderModal isEdit={false} currentOrder={null} show={showModal} onClose={() => setShowModal(false)} onSubmit={(handleAddOrderSubmit)}/>
                <ResponsiveLayout>
                    {orders.length === 0 && <LoadingSpinner />}
                    {filteredOrders.length > 0 && (
                        <>
                        <List orders={displayedOrders}/>
                        <Pagination onPageChange={handlePageChange} totalPages={totalPages} currentPage={currentPage} />
                        </>
                    )}
                </ResponsiveLayout>
            </div>
            <Footer />
        </div>
    );
};

export default OrdersPage;