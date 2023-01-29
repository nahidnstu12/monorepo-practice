import { model, Schema, Document } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  description: string;
}

const TodoSchema: Schema = new Schema<ITodo>({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export const Todo = model<ITodo>('Todo', TodoSchema);

