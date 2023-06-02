import React, { useEffect } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { routes } from '../../utils/routes';


const UserPage: React.FC = () => {
    const { user } = useTypeSelector(state => state.user);
    const { user: userT, loading, success, error } =
        useTypeSelector(state => state.organize);
    const { getOrganize, logOutUser, clearOrganize } = useActions();
    const navigate = useNavigate()

    const logOut = () => {
        logOutUser();
        clearOrganize();
    }

    useEffect(() => {
        if (!userT.id) {
            getOrganize(user?.uid);
        }
        if (!user) {
            navigate(routes.mai)
        }
        console.log(userT.tasks);

    }, [user, userT])

    return (
        <div>
            <button onClick={logOut}>Выйти</button>
            {user?.email}
            {userT.tasks?.map((task, i) => {
                return (
                    <div key={i.toString()}>
                        <h2>{task.title}</h2>
                        <p>{task.content}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default UserPage;