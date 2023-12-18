export interface Order {
  id: number;
  status: string;  // e.g., 'In Progress', 'Done', 'Cancelled'
  customer_id: number;
  type: string; // e.g., 'preventive maintenance', 'installations and repairs'
  created_at: Date;
  updated_at?: Date;
  scheduled_date?: Date;
  completion_date?: Date;
  assigned_technician?: string;
}
  