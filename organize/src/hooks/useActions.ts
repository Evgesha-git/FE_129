import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import * as organizeActions from '../store/action-creators/organize';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(organizeActions, dispatch);
}