import React, { useState } from "react";

import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

function LoginControl() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (

        <div>

            {
                isLoggedIn ?

                    <button onClick={() => setIsLoggedIn(false)}>
                        Logout
                    </button>

                    :

                    <button onClick={() => setIsLoggedIn(true)}>
                        Login
                    </button>

            }

            <hr />

            {
                isLoggedIn ?

                    <UserPage />

                    :

                    <GuestPage />
            }

        </div>

    );

}

export default LoginControl;