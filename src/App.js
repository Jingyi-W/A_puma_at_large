import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Search from "./components/search";
import ArtworkDetails from "./components/artwork-details";
import Home from "./components/home";
import React from 'react'
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import artworkReducer from "./reducers/artwork-reducer";
import ArtworkList from "./components/artwork-list";
import reviewReducer from "./reducers/review-reducer";



const reducer = combineReducers({artworkReducer: artworkReducer, reviewReducer: reviewReducer})

const store = createStore(reducer)

function App() {
  return (
      <Provider store={store}>
        <div className="container-fluid">
          <BrowserRouter>
            <Route exact={true} path={"/"}>
              <Home />
            </Route>
            <Route exact={true} path={["/search/:keyword"]}>
              <ArtworkList />
            </Route>
            <Route exact={true} path={["/artworks/:artworkId"]}>
              <ArtworkDetails />
            </Route>
          </BrowserRouter>

        </div>
      </Provider>
  );
}

export default App;
