// import { useState, useEffect } from 'react';
// import { Player } from '../types/Order';
// import { api } from '../services/api';
// import { useCache } from '../services/cache';

// interface UsePlayerDataProps {
//   filterText: string;
// }

// export const usePlayerData = ({ filterText }: UsePlayerDataProps) => {
//   const [players, setPlayers] = useState<Player[]>([]);
//   const { getCachedData, setCachedData } = useCache<Player[]>();

//   useEffect(() => {
//     const fetchPlayers = async () => {
//       try {
//         const cachedPlayers = getCachedData('players');

//         if (cachedPlayers) {
//           setPlayers(cachedPlayers);
//         } else {
//           const response = await api.get(`/players?search=${filterText}`);
          
//           const fetchedPlayers = response.data.data;
//           setPlayers(fetchedPlayers);
//           setCachedData('players', fetchedPlayers);
//         }
//       } catch (error) {
//         console.error('Error fetching players:', error);
//       }
//     };

//     fetchPlayers();
//   }, [filterText, getCachedData, setCachedData]);

//   return { players };
// };
// export {}

import { useState, useEffect } from 'react';
import { Order } from '../types/Order';
import { getOrders } from '../services/ordersService';
import { useCache } from '../services/cache';

interface UseOrderDataProps {
  filterText: string;
}

export const useOrderData = ({ filterText }: UseOrderDataProps) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const { getCachedData, setCachedData } = useCache<Order[]>();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const cachedOrders = getCachedData('orders');

        if (cachedOrders) {
          setOrders(cachedOrders);
        } else {
          const fetchedOrders = await getOrders(filterText);
          setOrders(fetchedOrders);
          setCachedData('orders', fetchedOrders);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [filterText, getCachedData, setCachedData]);

  return { orders };
};
