import { Provider } from 'react-redux';
import './App.css';
import RouterLists from "./routes/index"
import store from "./Redux/Store"
function App() {
  return (
    <Provider store={store}>    
    <div className="App">
      <RouterLists/>
     </div>
     </Provider>

  );

}

export default App;
