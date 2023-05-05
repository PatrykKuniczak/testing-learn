import { Injectable } from "@nestjs/common";
import { HydratedDocument, Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { PostEntity } from "src/database/schemas/posts.schema";

@Injectable()
export class PostsService {
  constructor(@InjectModel(PostEntity.name) private readonly postModel: Model<PostEntity>) {
  }

  async findAll(lastDate: string): Promise<HydratedDocument<PostEntity>[]> {
    return this.postModel.find().where("createdAt").gt(Date.parse(lastDate)).limit(5).sort({ title: 1 }).exec();
  }

  async findOne(id: string): Promise<HydratedDocument<PostEntity>> {
    return await this.postModel.findById(id).exec();
  }

  // async updateAll() {
  //   // const data = await this.findAll();
  //   // return this.postModel.updateMany({ title: /^P(.*?)$/ }, { ...data, createdAt: Date.now() });
  // }
}
