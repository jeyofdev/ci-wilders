import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import App from './components/pages/app/App';
import { GET_WILDERS } from './queries/queries';
import { GetWildersType } from './types';

describe('App and home', () => {
    const GET_WILDERS_MOCKS: MockedResponse<GetWildersType> = {
        request: { query: GET_WILDERS },
        result: {
            data: {
                wilders: [
                    {
                        id: 1,
                        name: 'john',
                        city: 'London',
                        skills: [],
                    },
                    {
                        id: 2,
                        name: 'Johnny',
                        city: 'Paris',
                        skills: [],
                    },
                ],
            },
        },
    };

    const renderApp = () => {
        render(
            <MockedProvider mocks={[GET_WILDERS_MOCKS]}>
                <App />
            </MockedProvider>
        );
    };

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        renderApp();
    });

    it('renders title and subtitle', () => {
        const title = screen.getByRole('heading', { level: 1 });
        expect(title.textContent).toEqual('Wilders Book');

        const subtitle = screen.getByRole('heading', { level: 2 });
        expect(subtitle.textContent).toEqual('Liste des wilders');
    });

    describe('initially', () => {
        it('render a loading indicator', () => {
            renderApp();

            const loader = screen.getAllByRole('progressbar')[0];
            expect(loader).toBeInTheDocument();

            const loading = screen.getAllByTestId('loader')[0];
            expect(loading).toBeInTheDocument();
        });
    });

    describe('after wilders have been fetched', () => {
        it('renders wilders list', async () => {
            renderApp();

            // const wilderList = await waitFor(() => screen.getByRole('list'));
            const wilderList = await screen.findByTestId('wilderList');

            const wilders = within(wilderList).getAllByRole('article');

            const firstWilder = within(wilders[0]).getByRole('heading', {
                level: 3,
            });

            const firstWilderCity = within(wilders[0]).getByText('London');

            expect(wilderList).toBeInTheDocument();
            expect(wilders).toHaveLength(2);
            expect(firstWilder.textContent).toEqual('john');
            expect(firstWilderCity).toBeInTheDocument();
        });
    });
});
