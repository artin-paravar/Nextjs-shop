"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
type ERROR = {
  fullname?: string;
  username?: string;
  email?: string;
  password?: string;
  empity?: string;
  notfound?: string;
};
export default function Signup() {
  const router = useRouter();

  const validationErrors: ERROR = {};

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<ERROR>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    //

    if (!formData.fullname.trim()) {
      validationErrors.fullname = "full name is required";
    } else if (formData.fullname.length < 6) {
      validationErrors.fullname = "password should be at least 6 char";
    }
    if (!formData.username.trim()) {
      validationErrors.username = "username is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "password should be at least 6 char";
    }

    setErrors(validationErrors);
  };

  // e.preventDefault();
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    if (
      formData.email === "" &&
      formData.username === "" &&
      formData.fullname === "" &&
      formData.password === ""
    ) {
      validationErrors.password = "password is required";
      validationErrors.username = "username is required";
      validationErrors.fullname = "full name is required";
      validationErrors.email = "email is required";

      setErrors(validationErrors);
    }
    if (
      formData.email !== "" &&
      formData.password !== "" &&
      formData.username !== "" &&
      formData.fullname !== "" &&
      Object.keys(errors).length === 0
    ) {
      // let form: any = document.querySelector("form");
      // let formdata = new FormData(form);
      // console.log(form);
      // let data = Object.fromEntries(formdata);

      // const fetch = async () => {
      //   try {
      //     await axios.post("http://localhost:8000/users", data);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // };
      // fetch();
      console.log("signup");
      router.push("/");
    }
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <form className="max-w-[400px] m-auto p-[20px]  rounded-[5px] shadow-md flex flex-col gap-4">
        <div>
          <label>full name:</label>
          <input
            className="w-full p-[10px] border-state-300 border-[1px] rounded-[5px] text-[16px]"
            name="fullname"
            placeholder=""
            onChange={handleChange}
          />
          {errors.fullname && (
            <span className="text-[#e74c3c] text-[14px] mt-[15px] block">
              {errors.fullname}
            </span>
          )}
        </div>
        <div>
          <label>Email :</label>
          <input
            className="w-full p-[10px] border-state-300 border-[1px] rounded-[5px] text-[16px]"
            name="email"
            placeholder=""
            onChange={handleChange}
          />
          {errors.email && (
            <span className="text-[#e74c3c] text-[14px] mt-[15px] block">
              {errors.email}
            </span>
          )}
        </div>
        <div>
          <label>username:</label>
          <input
            className="w-full p-[10px] border-state-300 border-[1px] rounded-[5px] text-[16px]"
            name="username"
            placeholder=""
            onChange={handleChange}
          />
          {errors.username && (
            <span className="text-[#e74c3c] text-[14px] mt-[15px] block">
              {errors.username}
            </span>
          )}
        </div>
        <div>
          <label>Password:</label>
          <input
            className="w-full p-[10px] border-state-300 border-[1px]  outline-none rounded-[5px] text-[16px]"
            type="password"
            name="password"
            placeholder=""
            onChange={handleChange}
          />
          {errors.password && (
            <span className="text-[#e74c3c] text-[14px] mt-[15px] block">
              {errors.password}
            </span>
          )}
        </div>

        <button
          onClick={handleSubmit}
          type="button"
          className=" rounded-[5px] bg-[#3498db] text-[#fff] p-[10px_15px] border-[none] rounded[5px] text-[16px] cursor-pointer transition-all duration-300"
        >
          Submit
        </button>
        {errors.empity && (
          <span className="text-[#e74c3c] text-[16px]  block text-center">
            {errors.empity}
          </span>
        )}
        {errors.notfound && (
          <span className="text-[#e74c3c] text-[14px]  block text-center">
            {errors.notfound}
          </span>
        )}
        <Link
          className="text-[#3498db] text-center text-[18px]"
          href={"/login"}
        >
          login
        </Link>
      </form>
    </div>
  );
}
