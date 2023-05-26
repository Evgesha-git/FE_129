import { Dispatch } from 'redux';
import { OrganizeActionTypes, OrganizeActions, ITask } from '../../type/organizeType';
import { child, get, ref, set, update } from "firebase/database";
import { db } from '../../utils/dbConfig';

export const getOrganize = (uId: string | null | undefined) => {
    return async (dispatch: Dispatch<OrganizeActions>) => {
        try {
            dispatch({ type: OrganizeActionTypes.FETCH_ORGANIZE });
            const response = await get(child(ref(db), `organize/${uId}`));
            if (response.exists()) {
                dispatch({
                    type: OrganizeActionTypes.GET_ORGANIZE,
                    payload: response.val()
                });
            } else {
                throw new Error()
            }
        } catch (error) {
            dispatch({
                type: OrganizeActionTypes.ERROR_ORGANIZE,
                payload: 'Произошла ошибка',
            });
        }
    }
}

export const setOrgaize = (
    uId: string | null | undefined,
    task: ITask,
    name: string | null | undefined) => {
    return async (dispatch: Dispatch<OrganizeActions>) => {
        try {
            dispatch({ type: OrganizeActionTypes.FETCH_ORGANIZE });
            console.log(db);

            set(ref(db, `organize/${uId}`), {
                id: uId,
                name: name,
                task,
            });
            dispatch({
                type: OrganizeActionTypes.SET_ORGANIZE,
                payload: 'Данные успешно отправлены'
            });
        } catch (error) {
            dispatch({
                type: OrganizeActionTypes.ERROR_ORGANIZE,
                payload: 'Произошла ошибка при отправке данных'
            });
        }
    }
}