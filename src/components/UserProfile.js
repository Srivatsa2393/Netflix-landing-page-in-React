import React, { Component } from 'react';

class UserProfile extends Component{
    render () {
        return(
            <div className="UserProfile">
                <div className="User">
                    <div className="name">Srivatsa</div>
                    <div className="image">
                        <img src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAP8AAAAJDhmN2EzN2MwLTYzMGItNDIxOS05YjJlLWVjZDdhNDRhZTQ5ZQ.jpg" alt="profile" />
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;