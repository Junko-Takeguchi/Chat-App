import {useRecoilValue, useSetRecoilState} from "recoil";
import {userDataSelector, userState} from "../Store/userAtom.js";
import {useEffect} from "react";

function InitState() {
    const setUser = useSetRecoilState(userState);
    const user = useRecoilValue(userDataSelector);

    useEffect(() => {
        const updateUserState = async () => {
            try {
                // Update the 'userState' atom with the data from the selector
                setUser({
                    userId: user._id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                });
            } catch (error) {
                console.error('Error updating user state:', error);
            }
        };

        updateUserState();
    }, [user, setUser]);

    return <></>;
}
export default InitState;