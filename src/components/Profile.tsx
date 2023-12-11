import React from 'react';
import s from "./Profile.module.css";

export const Profile = () => {
    return (
        <div className={s.content}>
        <div className="bg">
            <img src="https://static.vecteezy.com/system/resources/previews/006/668/859/non_2x/retro-black-alarm-clock-dissolving-into-a-little-particles-for-time-can-not-return-and-never-wait-anyone-time-management-concept-free-photo.jpg" alt="" />
        </div>
        <div className="">
            ava + discription
        </div>
        <div className="">
            my post
            <div className="">New post</div>
        </div>
        <div className="posts">
            <div className={s.item}>post 1</div>
            <div className={s.item}>post 2</div>
        </div>
    </div>
    )
}