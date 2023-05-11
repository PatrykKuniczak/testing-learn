import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HydratedDocument, Model, UpdateWriteOpResult } from 'mongoose';
import { PostEntity } from '../database/schemas/posts.schema';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(PostEntity.name) private readonly postModel: Model<PostEntity>,
  ) {}

  async findAll(
    pageNumber: number,
    skipSize: number,
  ): Promise<HydratedDocument<PostEntity>[]> {
    return this.postModel
      .find()
      .skip(pageNumber >= 1 ? pageNumber * skipSize : 0)
      .limit(skipSize)
      .sort({ createdAt: 1 })
      .exec();
  }

  async findOne(id: string): Promise<HydratedDocument<PostEntity>> {
    return await this.postModel.findById(id).exec();
  }

  async create(
    createPostDto: PostEntity,
  ): Promise<HydratedDocument<PostEntity>> {
    return this.postModel.create(createPostDto);
  }

  async update(
    id: string,
    updatePostEntityDto: PostEntity,
  ): Promise<UpdateWriteOpResult> {
    return this.postModel.updateOne({ _id: id }, updatePostEntityDto).exec();
  }
}
