import { IsNotEmpty } from 'class-validator';
import { Categoria } from 'src/categoria/entities/categoria.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'tb_produtos'})
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 120, nullable: false })
    titulo: string;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    descricao: string;

    @Column()
    lancamento: Date;

    @ManyToOne(()=> Categoria,(Categoria)=> Categoria.plataforma, {
        onDelete:"CASCADE"
    })
    Categoria: Categoria[]
}