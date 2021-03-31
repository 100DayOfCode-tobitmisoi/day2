import { useContext } from 'react'
import { GameContext } from '../context/gameContext';

function useFunc() {
    return useContext(GameContext);
}

export default useFunc;
