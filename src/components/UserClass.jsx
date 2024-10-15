import React from 'react'

class UserClass extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Mumbai",
                avatar_url: "http://dummy-photo.com"
            }
        }
    } 

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/naincy31")
        const json = await data.json()

        this.setState({
            userInfo: json
        })
    }
    
    render(){
        const {name, location, bio, avatar_url} = this.state.userInfo

        return (
            <div className="user-card">
                <div className="user-img">
                    <img src={avatar_url} alt="" />
                </div>
                <div className="user-info">
                    <h5>Name: {this.state.userInfo.name}</h5>
                    <h6>Location: {location}</h6>
                    <h6>{bio}</h6>
                </div>
            </div>
        )
     }
}

export default UserClass