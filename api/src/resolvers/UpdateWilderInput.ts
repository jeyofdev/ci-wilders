import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class UpdateWilderInput {
    @Field(() => ID)
    id!: Number;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    city?: string;
}

export default UpdateWilderInput;
