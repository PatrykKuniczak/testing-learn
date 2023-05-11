import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'posts' })
export class PostEntity {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, default: new Date().toISOString })
  createdAt: string;
}

export const PostSchema = SchemaFactory.createForClass(PostEntity);
