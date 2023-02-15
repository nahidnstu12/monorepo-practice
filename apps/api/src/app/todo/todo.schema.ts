import { model, Schema, Document } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  description?: string;
  status: string
}

const TodoSchema: Schema = new Schema<ITodo>({
  title: { type: String, required: true },
  description: { type: String, required: false },
  status: { type: String, required: true, enum: ['1', '2'] },
});

export const Todo = model<ITodo>('Todo', TodoSchema);
