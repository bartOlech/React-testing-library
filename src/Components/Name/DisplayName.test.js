import React from 'react';
import { render, cleanup, fireEvent} from '@testing-library/react';
import DisplayName from './DisplayName';
import { ShowDataProvider } from '../../Context/ShowData.context';

it('insert text in AnnuuncementDescription', () => {
    const { getByTestId } = render(<ShowDataProvider><DisplayName/></ShowDataProvider>) 
    expect(getByTestId('username')).toHaveTextContent('Bart')
})