import React, { useEffect, useState } from 'react';
import './Profile.css';

export default function Profile() {
    const [profileData1, setProfileData1] = useState(null);
    const [profileData2, setProfileData2] = useState(null);
    const [profileData3, setProfileData3] = useState(null);
    const [profileData4, setProfileData4] = useState(null);

    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const response1 = await fetch('https://api.github.com/users/SanggulRotuaPakpahan');
                const data1 = await response1.json();
                setProfileData1(data1);
                
                const response2 = await fetch('https://api.github.com/users/mariowibowor');
                const data2 = await response2.json();
                setProfileData2(data2);

                const response3 = await fetch('https://api.github.com/users/Firdi-CE');
                const data3 = await response3.json();
                setProfileData3(data3);

                const response4 = await fetch('https://api.github.com/users/rezaalharis');
                const data4 = await response4.json();
                setProfileData4(data4);
            } catch (error) {
                console.error('Error fetching GitHub profiles:', error);
            }
        };

        fetchProfiles();
    }, []);

    if (!profileData1 || !profileData2 || !profileData3 || !profileData4) {
        return (
            <div style={{ display: "flex", justifyContent: "center", color: "white" }}>
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="profile-container">
            <div className="profile-wrapper">
                <div className="profile-card">
                    <h2>User Profile</h2>
                    <img src={profileData1.avatar_url} alt="Avatar" />
                    <p>{profileData1.name || "No Name"}</p>
                    <p>Followers: {profileData1.followers}</p>
                    <a href={profileData1.html_url} target="_blank" rel="noopener noreferrer">
                        GitHub Profile
                    </a>
                </div>

                <div className="profile-card">
                    <h2>User Profile</h2>
                    <img src={profileData2.avatar_url} alt="Avatar" />
                    <p>{profileData2.name || "No Name"}</p>
                    <p>Followers: {profileData2.followers}</p>
                    <a href={profileData2.html_url} target="_blank" rel="noopener noreferrer">
                        GitHub Profile
                    </a>
                </div>

                <div className="profile-card">
                    <h2>User Profile</h2>
                    <img src={profileData3.avatar_url} alt="Avatar" />
                    <p>{profileData3.name || "No Name"}</p>
                    <p>Followers: {profileData3.followers}</p>
                    <a href={profileData3.html_url} target="_blank" rel="noopener noreferrer">
                        GitHub Profile
                    </a>
                </div>

                <div className="profile-card">
                    <h2>User Profile</h2>
                    <img src={profileData4.avatar_url} alt="Avatar" />
                    <p>{profileData4.name || "No Name"}</p>
                    <p>Followers: {profileData4.followers}</p>
                    <a href={profileData4.html_url} target="_blank" rel="noopener noreferrer">
                        GitHub Profile
                    </a>
                </div>
            </div>
        </div>
    );
}
