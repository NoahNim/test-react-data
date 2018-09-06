import React from 'react';
import Content from './Content.jsx';
import Home from './Home.jsx';
// import HashRouter from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/list' component={Content} />
      </Switch>
    </div>
  );
}
/*
App.propTypes = {
  example: PropTypes.string,
};
*/

export default App;

/*
propTypes Examples
exampleArray: PropTypes.array,
exampleBoolean: PropTypes.bool,
exampleFunction: PropTypes.func,
exampleNumber: PropTypes.number,
exampleObject: PropTypes.object,
exampleString: PropTypes.string,
exampleSymbol: PropTypes.symbol,
exampleReactElement: PropTypes.element,
exampleArrayOfNumbers: PropTypes.arrayOf(PropTypes.number),
exampleArrayOfStrings: PropTypes.arrayOf(PropTypes.string),
exampleClassTypeProp: PropTypes.instanceOf(ExampleClassName),
optionalEnum: PropTypes.oneOf(['ExampleClass', 'AnotherExampleClass']),
*/
