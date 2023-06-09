import React from "react";
import '../stylesheets/ChannelSearchCard.css';
import {SlUser} from 'react-icons/sl';
import {MdVerified} from 'react-icons/md';
import {HiOutlineUsers} from'react-icons/hi';
import {MdMusicNote} from'react-icons/md';

function ChannelSearchCard ({name, viewercount, playing}) {
    return (
        <div className="channel-search-card">
            <div className="icon-container">
                <SlUser/>
            </div>
            <div className="title-container">
                <a href="/user">
                    <h1>{name} <MdVerified/></h1>
                </a>
                <p className="live">● Live</p>
                <p><HiOutlineUsers/> {viewercount} listeners</p>
                <p className="playing"> <MdMusicNote/> {playing}</p>
            </div>
        </div>
    );
};

export default ChannelSearchCard