import { Module } from "@nestjs/common";
import { PostsModule } from "src/posts/posts.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import * as process from "process";

@Module({
  imports: [PostsModule, ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URL, { dbName: "Posts-Base" })
  ]
})
export class AppModule {
}