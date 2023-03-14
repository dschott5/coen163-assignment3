import React from "react";
import '../stylesheets/ChannelPreviewCard.css';
import {SlUser} from 'react-icons/sl';
import {MdVerified} from 'react-icons/md';
import {HiOutlineUsers} from'react-icons/hi';
import {MdMusicNote} from'react-icons/md';
import {BiUserPlus} from 'react-icons/bi';

function ChannelPreviewCard ({username, title, viewercount, song}) {
    return (
        <div className="channel-preview-card">
            <div className="title">
                <p> {title} </p>
            </div>
            <div className="information-section">
                <div className="profile-section">
                    <p className="icon"><SlUser/></p>
                    <p>{username} <MdVerified/></p>
                    <p className="follow"> <BiUserPlus/></p>
                </div>
                <div className="session-section">
                    
                    <p className="live">● Live</p>
                    <p><HiOutlineUsers/> {viewercount} listeners</p>
                    <p className="now-playing"> <MdMusicNote/> Now Playing: </p>
                    <p className="song"> {song} </p>
                </div>
            </div>
        </div>
    );
};

export default ChannelPreviewCard;