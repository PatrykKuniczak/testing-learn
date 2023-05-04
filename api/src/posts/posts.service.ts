import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Post } from "src/database/schemas/posts.schema";

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private readonly postModel: Model<Post>) {
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async findOne(id: string): Promise<Post> {
    return this.postModel.findById(id).exec();
  }
}
