import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Produto } from "../entities/produto.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class ProdutoService {

    constructor(@InjectRepository(Produto) private ProdutoRepository: Repository<Produto>) {}

    async create(produto: Produto): Promise<Produto> {
        return await this.ProdutoRepository.save(produto)
    }

    async findAll(): Promise<Produto[]> {
        return await this.ProdutoRepository.find();
    }

    async findById(id: number): Promise<Produto> {
        let produto = await this.ProdutoRepository.findOne({
            where: {
                id
            }
        })

        if(!produto)
            throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND)

        return produto
    }

    async findByTitle(titulo: string): Promise<Produto[]> {
        return await this.ProdutoRepository.find({
            where: {
                titulo: ILike(`%${titulo}%`)
            }
        })
    }

    async update(produto: Produto): Promise<Produto> {
        let buscarProduto = await this.findById(produto.id);

        if(!buscarProduto || !produto.id) {
            throw new HttpException('Produto não existe', HttpStatus.NOT_FOUND)
        }

        return await this.ProdutoRepository.save(produto)
    }
}