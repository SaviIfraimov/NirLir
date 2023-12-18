import React, { useState } from 'react';
import { Order } from '../../../types/Order';
import './List.css';
import SmallButton from '../../Button/SmallButton';

import OrderModal from '../../Modal/OrderModal';
import { updateOrder } from '../../../services/ordersService';

interface ListProps {
  orders: Order[];
}

const OrderList: React.FC<ListProps> = ({ orders }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleEditOrder = (order: Order) => {
    setSelectedOrder(order);
    setIsEdit(true);
    setShowModal(true);
  };

  const handleCloseOrder = () => {
    setShowModal(false); 
    setIsEdit(false);
    setSelectedOrder(null);
    
  }

  const getOrderDataFromForm = (formData : any) => {
    const scheduled_date = formData?.scheduled_date ? new Date(formData?.scheduled_date) : null;
    const completion_date = formData?.completion_date ? new Date(formData?.completion_date) : null;
    const customer_id = parseInt(formData.customer_id)
    const newOrder: Order = {...formData, scheduled_date, completion_date, customer_id};
    return newOrder;
  }

  const handleEditOrderSubmit = (formData: any) => {
    setShowModal(false);
    
    const resultOrderData: Order = getOrderDataFromForm(formData);
    updateOrder(resultOrderData.id, resultOrderData);
    // TODO to do logic to update the state (no refresh) - can be done with useEffect
};

  const formatDate = (dateStr: any) => {
    const [year, month, day] = dateStr.split('-');
    return `${day}-${month}-${year}`;
  };
  
  return orders.length === 0 ? <></> : (
    <>
      <OrderModal isEdit= {isEdit} currentOrder={selectedOrder} show={showModal} onClose={handleCloseOrder} onSubmit={(handleEditOrderSubmit)}/>
      <ul className="list">
        {orders.map((order) => (
          <li key={order.id} className="listItem">
            <SmallButton text="Edit" onClick={() => handleEditOrder(order)} />
            <div className="itemContent">
              <p>
                <span className="status">{order.status}</span>
                <span className="type">{order.type}</span>
                <span className="customer_id"><b>{order.customer_id}</b></span>
              </p>
              {order.assigned_technician || order.scheduled_date || order.completion_date ? 
              (<>
                <div className="partial-hr"></div>
                <p>
                  {order.assigned_technician && <span className="assigned_technician">{order.assigned_technician}</span>}
                  {order.scheduled_date && <span className="scheduled_date">schedule: {formatDate(order.scheduled_date)}</span>}
                  {order.completion_date && <span className="completion_date">completion: {formatDate(order.completion_date)}</span>}
                </p>
                </>)
              : (<></>)}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default OrderList;
