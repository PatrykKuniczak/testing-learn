import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { PostsService } from "src/posts/posts.service";
import { PostEntity } from "src/database/schemas/posts.schema";
import { HydratedDocument } from "mongoose";

@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {
  }

  @Get()
  async findAll(@Body("lastDate") lastDate: string): Promise<HydratedDocument<PostEntity>[]> {
    return this.postsService.findAll(lastDate);
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<HydratedDocument<PostEntity>> {
    return this.postsService.findOne(id);
  }

  // @Put("")
  // async updateAll() {
  //   return this.postsService.updateAll();
  // }
}
