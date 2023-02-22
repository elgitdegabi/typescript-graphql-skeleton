import {BaseEntity, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm"
import {ObjectType, Field, Int} from "type-graphql"

/**
 * 
 */
@Entity()
@ObjectType()
export class Product extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number

    @Field(() => String)
    @Column()
    name!: string
    
    @Field(() => String)
    @Column()
    description!: string
    
    @Field(() => Int)
    @Column({type: "int", default: 0})
    quantity!: number
    
    @Field(() => String)
    @CreateDateColumn({type: "timestamp", update: false})
    createTS!: string
    
    @Field(() => String)
    @UpdateDateColumn({type: "timestamp", update: true})
    updateTS!: string
}
