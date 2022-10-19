import { Controller, Get, Put, Post, Delete, HttpCode, HttpStatus, Body, Param, ParseIntPipe } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from '../service/produto.service';

@Controller('/jogo')
export class ProdutoController {

    constructor(private readonly ProdutoService: ProdutoService) {}

    @Post()
    @HttpCode(HttpStatus.OK)
    public create(@Body() produto: Produto): Promise<Produto> {
        return this.ProdutoService.create(produto)
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    public getAll(): Promise<Produto[]> {
        return this.ProdutoService.findAll()
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    public getOne(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
        return this.ProdutoService.findById(id)
    }

    
    @Get('/titulo/:title')
    @HttpCode(HttpStatus.OK)
    public getTitle(@Param('titulo') titulo: string): Promise<Produto[]> {
        return this.ProdutoService.findByTitle(titulo)
    }

    @Put('/:id')
    @HttpCode(HttpStatus.OK)
    update(@Body() produto: Produto): Promise<Produto> {
        return this.ProdutoService.update(produto) //Lembrando que o ProdutoService referencia ao constructor
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    public delete(): any {
        return null
    }
    
}