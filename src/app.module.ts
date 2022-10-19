import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produto/entities/produto.entity';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [ProdutoModule, TypeOrmModule.forRoot({
    type: 'mysql',
    port: 3306,
    database: 'db_loja_jogos',
    username: 'root',
    password: 'root',
    entities: [Produto],
    synchronize: true
  })],
})
export class AppModule {}
