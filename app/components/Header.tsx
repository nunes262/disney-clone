"use client";

import React, { useState } from "react";
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { RiMovie2Fill } from "react-icons/ri";
import logo from "../assets/Images/logo.png";
function Header() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name: "INÍCIO",
            icon: HiHome,
        },
        {
            name: "PESQUISA",
            icon: HiMagnifyingGlass,
        },
        {
            name: "MINHA LISTA",
            icon: HiPlus,
        },
        {
            name: "ORIGINAIS",
            icon: HiStar,
        },
        {
            name: "FILMES",
            icon: RiMovie2Fill,
        },
        {
            name: "SERIES",
            icon: HiTv,
        },
    ];

    return (
        <div className="flex items-center justify-between p-4 fixed top-0 left-0 w-full">
            <div className="flex gap-8 items-center">
                <img
                    src={logo.src}
                    className="w-[80px] md:w-[120px] object-cover"
                />
                <div className="hidden md:flex gap-11 text-center items-center justify-center">
                    {menu.map((item) => (
                        <HeaderItem name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className="flex md:hidden gap-6 text-center items-center justify-between">
                    {menu.map(
                        (item, index) =>
                            index < 3 && (
                                <HeaderItem name={""} Icon={item.icon} />
                            )
                    )}
                    <div
                        className="md:hidden"
                        onClick={() => setToggle(!toggle)}
                    >
                        <HeaderItem name={""} Icon={HiDotsVertical} />
                        {toggle ? (
                            <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 py-4">
                                {menu.map(
                                    (item, index) =>
                                        index > 2 && (
                                            <HeaderItem
                                                name={item.name}
                                                Icon={item.icon}
                                            />
                                        )
                                )}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            <img
                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                className="w-[40px] rounded-full cursor-pointer"
            />
        </div>
    );
}

export default Header;
