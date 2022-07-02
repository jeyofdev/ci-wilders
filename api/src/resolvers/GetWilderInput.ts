import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class GetWilderInput {
    @Field(() => ID)
    id!: Number;
}

export default GetWilderInput;
