import Todo from './Todo.type';

interface Session {
  id: string;
  title: string;
  status: boolean;
  startDate: string;
  expireDate: string;
  orderBy: number;
  todos: Todo[];
}

export default Session;
