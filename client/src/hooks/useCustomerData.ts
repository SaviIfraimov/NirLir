import { useState, useEffect } from 'react';
import { Customer } from '../types/Customer';
import { getCustomers } from '../services/customersService';
import { useCache } from '../services/cache';

interface UseCustomerDataProps {
  filterText: string;
}

export const useCustomerData = ({ filterText }: UseCustomerDataProps) => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const { getCachedData, setCachedData } = useCache<Customer[]>();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const cachedCustomers = getCachedData('customers');

        if (cachedCustomers) {
          setCustomers(cachedCustomers);
        } else {
          const fetchedCustomers = await getCustomers(filterText);
          setCustomers(fetchedCustomers);
          setCachedData('customers', fetchedCustomers);
        }
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, [filterText, getCachedData, setCachedData]);

  return { customers };
};
