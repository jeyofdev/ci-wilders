import { Field, ID, ObjectType } from 'type-graphql';
import {
    BaseEntity,
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

import Skill from './Skill';

@ObjectType()
@Entity({ orderBy: { id: 'ASC' } })
class Wilder extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id!: Number;

    @Column()
    @Field()
    name!: string;

    @Column()
    @Field()
    city!: string;

    @ManyToMany(() => Skill)
    @JoinTable()
    @Field(() => [Skill], { nullable: true })
    skills!: Skill[];
}

export default Wilder;
