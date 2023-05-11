import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from 'posts/posts.module';
import * as process from 'process';

@Module({
  imports: [
    PostsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URL, { dbName: 'Posts-Base' }),
  ],
})
export class AppModule {}