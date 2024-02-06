import React from "react";

function HeaderItem({ name, Icon }) {
    return (
        <div className="text-white flex items-center gap-2 text-[13px] font-bold cursor-pointer tracking-widest transition-all hover:underline  hover:text-slate-400">
            <Icon />
            <h2 className="">{name}</h2>
        </div>
    );
}

export default HeaderItem;
