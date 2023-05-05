import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Post } from "src/database/schemas/posts.schema";

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private readonly postModel: Model<Post>) {
  }

  async findAll(lastDate: string): Promise<Post[]> {
    return this.postModel.find().where("createdAt").gte(Date.parse(lastDate)).limit(5).sort({ title: 1 }).exec();
  }

  async findOne(id: string): Promise<Post> {
    return this.postModel.findById(id).exec();
  }

  // async updateAll() {
  //   // const data = await this.findAll();
  //   // return this.postModel.updateMany({ title: /^P(.*?)$/ }, { ...data, createdAt: Date.now() });
  // }
}
