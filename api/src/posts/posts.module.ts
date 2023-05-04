import { Module } from "@nestjs/common";
import { PostsController } from "src/posts/posts.controller";
import { PostsService } from "src/posts/posts.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Post, PostSchema } from "src/database/schemas/posts.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {
}
