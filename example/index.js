import React from 'react';
import ReactDOM from 'react-dom';
import HanatenaBookmark from '../src/';

class HBComponent extends React.Component {
  render() {
    return (
      <HanatenaBookmark title='Share' width={30} height={30} design='touch' size='large' url='https://eeearl.com' />
    );
  }
}

const App = () => (<HBComponent />)

ReactDOM.render(<App />, document.getElementById('root'));