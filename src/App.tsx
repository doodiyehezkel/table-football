import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Board from './pages/Board';
import NewPlayer from './pages/NewPlayer';
import GameHistory from './pages/GameHistory';
import MainNavigation from "./components/layout/MainNavigation";
import MainPage from "./components/ui/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainNavigation />
        <MainPage>
          <Switch>
            <Route path="/" exact>
              <Board />
            </Route>
            <Route path="/new-player">
              <NewPlayer />
            </Route>
            <Route path="/game-history">
              <GameHistory />
            </Route>
          </Switch>
        </MainPage>
      </BrowserRouter>
    </>
  );
}

export default App;
