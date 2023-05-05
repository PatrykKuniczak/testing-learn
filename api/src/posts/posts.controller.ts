import { Body, Controller, Get, Param } from "@nestjs/common";
import { PostsService } from "src/posts/posts.service";
import { Post } from "src/database/schemas/posts.schema";

@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {
  }

  @Get()
  async findAll(@Body("lastDate") lastDate: string): Promise<Post[]> {
    return this.postsService.findAll(lastDate);
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Post> {
    return this.postsService.findOne(id);
  }

  // @Put("")
  // async updateAll() {
  //   return this.postsService.updateAll();
  // }
}
