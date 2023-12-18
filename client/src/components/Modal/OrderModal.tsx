import React, { useState } from 'react';
import './OrderModal.css';
import { Order } from '../../types/Order';

interface OrderModalProps {
  show: boolean;
  isEdit: boolean;
  currentOrder: Order | null;
  onClose: () => void;
  onSubmit: (formData: OrderFormState) => void;
}

interface OrderFormState {
  id?: number;
  customer_id: string;
  status: string;
  type: string;
  assigned_technician: string;
  scheduled_date: string;
  completion_date: string;
}

const OrderModal: React.FC<OrderModalProps> = ({ show, isEdit, currentOrder, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<OrderFormState>(
    isEdit && currentOrder ? {
      id: currentOrder.id,
      customer_id: currentOrder.customer_id.toString(),
      status: currentOrder.status || '',
      type: currentOrder.type || '',
      assigned_technician: currentOrder.assigned_technician || '',
      scheduled_date: currentOrder.scheduled_date ? new Date(currentOrder.scheduled_date).toDateString() : '',
      completion_date: currentOrder.completion_date ? new Date(currentOrder.completion_date).toDateString() : ''
    } 
    : {
      customer_id: '',
      status: '',
      type: '',
      assigned_technician: '',
      scheduled_date: '',
      completion_date: ''
    });

  const [errors, setErrors] = useState<Record<keyof OrderFormState, string | null>>({
    id: null,
    customer_id: null,
    status: null,
    type: null,
    assigned_technician: null,
    scheduled_date: null,
    completion_date: null
  });

  if (!show) return null;

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {
      id: null,
      customer_id: !formData.customer_id || isNaN(Number(formData.customer_id)) ? "Customer ID must be a number" : null,
      status: !formData.status ? "Status is required" : null,
      type: !formData.type ? "Type is required" : null,
      assigned_technician: null,
      scheduled_date: null,
      completion_date: null
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: null }));
  };

  const getFilledFormData = () => {
    const newFormData = formData;

    if (!newFormData.id && currentOrder?.id) {
      newFormData.id = currentOrder.id;
    }
    if (!newFormData.assigned_technician && currentOrder?.assigned_technician) {
      newFormData.assigned_technician = currentOrder.assigned_technician;
    }
    if (!newFormData.type && currentOrder?.type) {
      newFormData.type = currentOrder.type;
    }
    if (!newFormData.status && currentOrder?.status) {
      newFormData.status = currentOrder.status;
    }
    if (!newFormData.customer_id && currentOrder?.customer_id) {
      newFormData.customer_id = currentOrder.customer_id.toString();
    }
    if (!newFormData.scheduled_date && currentOrder?.scheduled_date) {
      newFormData.scheduled_date = currentOrder.scheduled_date.toString();
    }
    if (!newFormData.completion_date && currentOrder?.completion_date) {
      newFormData.completion_date = currentOrder.completion_date.toString();
    }
    return newFormData;
  }

  const handleSubmit = (e: React.FormEvent) => {
    const newFormData = getFilledFormData();
    setFormData(newFormData);
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>{isEdit? 'Edit Order' : 'Add Order'}</h3>
        {
          isEdit ?
          <form onSubmit={handleSubmit}>
            <div className="input_field">
              <label htmlFor="customer_id">Customer</label>
              <input name="customer_id" type="text" placeholder={currentOrder?.customer_id?.toString()} value={formData.customer_id} onChange={handleChange} />
            </div>
            <div className="input_field">          
              <label htmlFor="status">Status</label>
              <input name="status" type="text" value={formData.status} placeholder={currentOrder?.status} onChange={handleChange} />
            </div>
            <div className="input_field">
              <label htmlFor="type">Type</label>
              <input name="type" type="text" value={formData.type} placeholder={currentOrder?.type} onChange={handleChange} />
            </div>
            <div className="input_field">
              <label htmlFor="assigned_technician">Technician</label>
              <input name="assigned_technician" type="text" value={formData.assigned_technician} placeholder={currentOrder?.assigned_technician} onChange={handleChange} />
            </div>  
            <div className="input_field">
              <label htmlFor="scheduled_date">Scheduled Date</label>
              <input name="scheduled_date" type="date" value={formData.scheduled_date || currentOrder?.scheduled_date?.toString()} onChange={handleChange} />
            </div>    
            <div className="input_field">
              <label htmlFor="completion_date">Completion Date</label>
              <input name="completion_date" type="date" value={formData.completion_date || currentOrder?.completion_date?.toString()} onChange={handleChange} />
            </div>
            <button type="submit" onClick={handleSubmit}>{'Edit Order'}</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </form>
          : 
          <form onSubmit={handleSubmit}>
            <div className="input_field">
              <label htmlFor="customer_id">Customer</label>
              <input name="customer_id" type="text" value={formData.customer_id} onChange={handleChange} />
            </div>
            <div className="input_field">          
              <label htmlFor="status">Status</label>
              <input name="status" type="text" value={formData.status} onChange={handleChange} />
            </div>
            <div className="input_field">
              <label htmlFor="type">Type</label>
              <input name="type" type="text" value={formData.type} onChange={handleChange} />
            </div>
            <div className="input_field">
              <label htmlFor="assigned_technician">Technician</label>
              <input name="assigned_technician" type="text" value={formData.assigned_technician} onChange={handleChange} />
            </div>  
            <div className="input_field">
              <label htmlFor="scheduled_date">Scheduled Date</label>
              <input name="scheduled_date" type="date" value={formData.scheduled_date} onChange={handleChange} />
            </div>    
            <div className="input_field">
              <label htmlFor="completion_date">Completion Date</label>
              <input name="completion_date" type="date" value={formData.completion_date} onChange={handleChange} />
            </div>
            <button type="submit" onClick={handleSubmit}>{'Add Order'}</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </form>
        }
        {Object.values(errors).some(error => error) && (
          <div className="form-errors">
            {Object.keys(errors).map(key => errors[key as keyof typeof errors] && (
              <p key={key}>{errors[key as keyof typeof errors]}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderModal;