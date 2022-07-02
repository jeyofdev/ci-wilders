import { LayoutType } from '../../../types';
import * as styled from './Layout.styled';

const Layout = ({ children }: LayoutType) => {
    return (
        <styled.Main>
            <styled.Header>
                <styled.Container>
                    <h1>Wilders Book</h1>
                </styled.Container>
            </styled.Header>

            <styled.Container>{children}</styled.Container>

            <styled.Footer>
                <styled.Container>
                    <p>&copy; 2020 Wild Code School</p>
                </styled.Container>
            </styled.Footer>
        </styled.Main>
    );
};

export default Layout;
