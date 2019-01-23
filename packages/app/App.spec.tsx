import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {AppToken} from './App';

describe('<App />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppToken />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});

