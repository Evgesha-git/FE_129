import react, { useState, FormEvent } from 'react';
import { auth } from '../../utils/dbConfig';
import { GoogleAuthProvider, User, signInWithPopup } from 'firebase/auth';
import { useActions } from '../../hooks/useActions';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import React from 'react';

const MainPage: React.FC = () => {
    const { setOrgaize, getOrganize } = useActions()
    const { user, loading, success, error } = useTypeSelector(state =>
        state.organize);
    const [title, setTitle] = useState<string>('');
    const [contnt, setContent] = useState<string>('');
    const [userAuth, setUserAuth] = useState<User | null>();

    const login = async () => {
        const provider = new GoogleAuthProvider();
        const { user } = await signInWithPopup(auth, provider);
        setUserAuth(user);
    }

    const addTask =async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const task = {
            id: Date.now().toString(),
            title,
            content: contnt,
            date: new Date().toString()
        }

        setOrgaize(userAuth?.uid, task, userAuth?.displayName)
    }

    return userAuth ? (
        <div>
            <form onSubmit={addTask}>
                <input
                    type="text"
                    onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) =>
                            setTitle(e.target.value)
                    }
                    value={title}
                />
                <textarea
                    onChange={
                        (e: React.ChangeEvent<HTMLTextAreaElement>) =>
                            setContent(e.target.value)
                    }
                    value={contnt}
                ></textarea>
                <button type="submit">Отправить</button>
            </form>
        </div>
    ) : (
        <button onClick={() => login()}>Войти через Google</button>
    )
}

export default MainPage;