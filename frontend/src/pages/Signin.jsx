import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { asyncsigninuser } from "../store/actions/userActions";

const Signin = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const SigninHandler = (user) => {
        dispatch(asyncsigninuser(user));
        navigate("/");
    };
    
    return (
        <form onSubmit={handleSubmit(SigninHandler)} className="w-full p-5">
            <input
                {...register("email")}
                className="w-full text-3xl mb-5 p-2 border-b outline-0"
                type="text"
                placeholder="john@doe.doe"
            />
            <input
                {...register("password")}
                className="w-full text-3xl mb-5 p-2 border-b outline-0"
                type="password"
                placeholder="********"
            />
            <button className="text-white rounded mt-5 text-3xl px-5 py-3 bg-red-400">
                Signin User
            </button>
            <p className="mt-3">
                Don't have an account?{" "}
                <Link className="text-blue-400" to="/signup">
                    Signup
                </Link>
            </p>
        </form>
    );
};

export default Signin;
