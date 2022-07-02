import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class DeleteWilderInput {
    @Field(() => ID)
    id!: number;
}

export default DeleteWilderInput;
