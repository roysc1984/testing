import React from 'react';
import 'react-native';
import {Home} from '../Home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('test Home', () => {
  it('renders correctly', () => {
    renderer.create(<Home />);
  });
});
