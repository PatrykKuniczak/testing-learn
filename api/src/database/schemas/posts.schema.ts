import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ collection: "posts" })
export class PostEntity {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, default: Date.now })
  createdAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(PostEntity);