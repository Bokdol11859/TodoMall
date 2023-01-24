import Session from './Session.type';

interface Class {
  id: string;
  productId: string;
  title: string;
  status: boolean;
  icon: string;
  sessions: Session[];
}

export default Class;
