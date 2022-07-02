import * as styled from './Skill.styled';
import { SkillType } from '../../../types';

const Skill = ({ title, votes }: SkillType) => {
    return (
        <li>
            {title}
            <styled.Votes>{votes}</styled.Votes>
        </li>
    );
};

export default Skill;
