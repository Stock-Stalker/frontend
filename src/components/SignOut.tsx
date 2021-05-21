import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteToken } from '../actions/token';

interface Auth {
    deleteToken: () => void;
}

const SignOut: React.FC<Auth> = (props) => {
    const history = useHistory()
    function signOut (e: any) {
        e.preventDefault();
        localStorage.removeItem('token');
        props.deleteToken();
        history.push('/welcome');
    };
    return (
        <button
            className="sign-out text-tertiary"
            onClick={ signOut }
        >
            Sign out
        </button>
    )
}


export default connect(
  null,
  { deleteToken }
) (SignOut)
