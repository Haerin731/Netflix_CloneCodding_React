import './ProfilePage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from 'react';

const names = ["베티", "키즈"]
const imgSources = [
    "https://occ-0-3077-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41",
    "https://occ-0-3077-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABV5QMl3XdlLGk7lVqErjXtqQUV9RDRhGn4YZzKk2XPtqMJbmE6UMzGRPTeDeUpETn6V3XocrWHYZvp4a6CwYFr7Oi3cZ.png?r=acf",
]

const ProfilePage = () => {
    useEffect(()=>{
        console.log("프로필 컴포넌트 생성");
        return () => {
            console.log("프로필 컴포넌트 소멸");
        }
    }, []);

    return (
        <div class="home">
            <div class="header">
                <div class="logo">NETFLIX</div>
            </div>
            <div class="empty-space">
            </div>
            <div class="list-profile">
                <div class="message">
                    넷플릭스를 시청할 프로필을 선택하세요
                </div>
                <Profiles/>
                <div class="profile-manager">
                    프로필 관리
                </div>
            </div>
            <div class="empty-space">
            </div>
        </div>
    );
}

const Profile = ({src, name, link}) => {
    return (
        <Link to={link}>
            <div class="profile">
                <img src={src} alt="" />
                <div class="name">{name}</div>
            </div>
        </Link>
    );
}

const Profiles = () => {
    return (
        <div class="profiles">
            <Profile src = {imgSources[0]} name={names[0]} link="./Home/베티"/>
            <Profile src = {imgSources[1]} name={names[1]} link="./Home/키즈"/>
            <div class="profile">
                <FontAwesomeIcon class="addIcon" icon={faPlusCircle} className="search" />
                <div class="name">프로필 추가</div>
            </div>
        </div>
    );
}

export default ProfilePage;
