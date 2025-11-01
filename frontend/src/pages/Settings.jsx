import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
    asyncdeleteuser,
    asynclogoutuser,
    asyncupdateuser,
} from "../store/actions/userActions";

const Settings = () => {
    const { user } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            username: user?.username,
            email: user?.email,
            password: user?.password,
        },
    });

    const UpdateHandler = (updatedUser) => {
        dispatch(asyncupdateuser(user?.id, updatedUser));
    };

    const DeleteHandler = () => {
        dispatch(asyncdeleteuser(user.id));
    };

    const LogoutHandler = () => {
        dispatch(asynclogoutuser());
    };

    return (
        <div className="w-full px-6 md:px-20 py-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-10">Settings</h1>
            <form onSubmit={handleSubmit(UpdateHandler)} className="flex flex-col gap-8">
                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">Username</label>
                    <input
                        {...register("username")}
                        className="w-full p-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 text-xl"
                        type="text"
                        placeholder="john-doe"
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">Email</label>
                    <input
                        {...register("email")}
                        className="w-full p-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 text-xl"
                        type="email"
                        placeholder="john@doe.com"
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">Password</label>
                    <input
                        {...register("password")}
                        className="w-full p-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 text-xl"
                        type="password"
                        placeholder="********"
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md text-lg transition"
                    >
                        Update User
                    </button>
                    <button
                        type="button"
                        onClick={LogoutHandler}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-md text-lg transition"
                    >
                        Logout
                    </button>
                    <button
                        type="button"
                        onClick={DeleteHandler}
                        className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md text-lg transition"
                    >
                        Delete User
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Settings;
