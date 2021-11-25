export type Products = {
  _id?: string;
  title: string;
  description: string;
  priorityDelivery: 'low' | 'medium' | 'height' | 'very high';
  checkIfProductIsNotAvailable: boolean | string;
  price: number | string;
}
