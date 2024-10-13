import React, { useState } from "react";

import { Link } from "react-router-dom";

import { auth, googleProvider } from "../utils/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/action/userAction.js";
import { useToast } from "@/components/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loadingApi, setLoadingApi] = useState(false);

  const [nameUser, setNameUser] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { toast } = useToast();

  const handleRegister = async (authResult) => {
    const { user } = authResult;

    setLoadingApi(true);

    const data = {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    };

    await hanldeSignUp(data);

    setLoadingApi(false);
    if (user) {
      return navigator("/");
    }
  };

  const handleRegisterWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      handleRegister(result);
    } catch (error) {
      console.log("Loi khi dang ky bang google: ", error);
    }
  };

  const hanldeSignUp = async (data) => {
    setLoadingApi(true);

    let res = await dispatch(userRegister(data));

    console.log("res ", res);

    navigator("/");

    setLoadingApi(false);
  };

  const handleLogin = async () => {
    setLoadingApi(true);

    const data = {
      name: nameUser,
      password: password,
    };

    let res = await dispatch(userLogin(data));

    if (res.success == false) {
      toast({
        title: "Thông báo",
        description: res.message,
        action: (
          <ToastAction altText="Goto schedule to undo">Quay lại</ToastAction>
        ),
      });
      return;
    } else {
      navigator("/");

      setLoadingApi(false);
    }
  };

  return (
    <div className="text-center">
      <header className="w-[100%] h-[84px] flex justify-center items-center border-b-2">
        <img className="h-[64px] " src=""></img>
      </header>
      <main className="my-6 justify-center items-center w-[100%]">
        <div className="my-2">
          <div className="flex justify-center items-center">
            <div
              onClick={handleRegisterWithGoogle}
              className="flex w-[432px] space-x-2 items-center justify-center border-2 rounded-2xl hover:border-[#46b193] hover:scale-95 py-1 cursor-pointer"
            >
              <svg
                viewBox="-0.5 0 48 48"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
                className="w-8"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>Google-color</title> <desc>Created with Sketch.</desc>{" "}
                  <defs> </defs>{" "}
                  <g
                    id="Icons"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    {" "}
                    <g
                      id="Color-"
                      transform="translate(-401.000000, -860.000000)"
                    >
                      {" "}
                      <g
                        id="Google"
                        transform="translate(401.000000, 860.000000)"
                      >
                        {" "}
                        <path
                          d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                          id="Fill-1"
                          fill="#FBBC05"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                          id="Fill-2"
                          fill="#EB4335"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                          id="Fill-3"
                          fill="#34A853"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                          id="Fill-4"
                          fill="#4285F4"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <div>Tiếp tục với Google</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center my-4">
          <div className="w-[138px] h-[2px] bg-slate-500"></div>
          <div className="mx-2">OR</div>
          <div className="w-[138px] h-[2px] bg-slate-500"></div>
        </div>
        <div className="w-[100%] flex justify-center items-center flex-col space-y-4">
          <div className="w-[324px] flex ">
            <input
              value={nameUser}
              onChange={(e) => setNameUser(e.target.value)}
              label="Tên tài khoản"
              placeholder="Nhập tên tài khoản"
              className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]"
            />
          </div>
          <div className="relative w-[324px] flex">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Mật khẩu"
              placeholder="Nhập mật khẩu"
              type="password"
              className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]"
            />
          </div>
        </div>
        <div className="w-[100%] flex justify-center items-center mt-6">
          <div className="w-[324px] flex items-center">
            <div className="w-[124px] text-left">
              <div className="mb-2">Quên mật khẩu?</div>
              <div className="flex items-center">
                <label>
                  <input type="checkbox"></input>
                  <span class="checkbox"></span>
                </label>
                <span className="ml-2">Hãy nhớ tôi</span>
              </div>
            </div>
            <div className="ml-16 translate-x-1">
              <button
                type="sumbit"
                className="w-[132px] h-[32px] border-2 rounded-2xl hover:border-green-600 bg-[#46b193] text-white"
                onClick={handleLogin}
              >
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center my-4">
          <div className="w-[138px] h-[2px] bg-slate-500"></div>
          <div className="w-[138px] h-[2px] bg-slate-500"></div>
        </div>
        <div className="mt-4">
          <div className="mb-4">Bạn chưa có tài khoản?</div>
          <Link to="/signup">
            <button className="bg-[#46b193] rounded-2xl px-8 py-1 hover:border-green-600  hover:border-2 text-white">
              Đăng ký
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Login;
