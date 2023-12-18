import React, { useState } from 'react';
import { Customer } from '../../../types/Customer';
import './List.css';
import SmallButton from '../../Button/SmallButton';
import { forecastPMCustomer } from '../../../services/customersService';
interface ListProps {
  customers: Customer[];
}

const CustomerList: React.FC<ListProps> = ({ customers }) => {
  const [forecasts, setForecasts] = useState<Record<number, number>>({});

  const handleEditOrder = (customerId: number) => {
        
  };

  const handleRequestForecast = async (customerId: number) => {
    // Wait for the forecast to be fetched before setting the state
    const forecastValue = await forecastPMCustomer(customerId);

    setForecasts(currentForecasts => {
      const newForecasts = { ...currentForecasts, [customerId]: forecastValue };
      return newForecasts;
    });
  };

  return customers.length === 0 ? <></> : (
    <ul className="list">
      {
        customers.map((customer) => (
          <li key={customer.id} className="listItem">
            <SmallButton text="Edit" onClick={() => handleEditOrder(customer.id)} />
            <div className="listItem_left">
              <strong>{customer.name}</strong>
              <div>{customer.contact}</div>
              {isNaN(forecasts[customer.id]) ?
                <button onClick={() => handleRequestForecast(customer.id)}>
                  Get PM Forecast
                </button> 
                : <div>Forecast: {forecasts[customer.id]}</div> }
            </div>
            <div>{customer.logo_url}</div>
          </li>
        ))
      }
    </ul>
  );
};

export default CustomerList;
