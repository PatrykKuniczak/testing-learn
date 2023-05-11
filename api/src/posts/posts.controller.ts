import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { HydratedDocument, UpdateWriteOpResult } from 'mongoose';
import { PostEntity } from '../database/schemas/posts.schema';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(
    @Query('pageNumber', ParseIntPipe) pageNumber: number,
    @Query('skipSize', ParseIntPipe) skipSize: number,
  ): Promise<HydratedDocument<PostEntity>[]> {
    return this.postsService.findAll(pageNumber, skipSize);
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<HydratedDocument<PostEntity>> {
    return this.postsService.findOne(id);
  }

  @Post()
  async create(
    @Body() createPostDto: PostEntity,
  ): Promise<HydratedDocument<PostEntity>> {
    return this.postsService.create(createPostDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePostDto: PostEntity,
  ): Promise<UpdateWriteOpResult> {
    return this.postsService.update(id, updatePostDto);
  }
}
