import React from 'react' 
interface IProps{
    lastLogin:string
}
export class UserInfo extends React.Component<IProps,any>{
    public state={
        username:'',
        email:''
    }
    componentDidMount(){
        const user=localStorage.getItem('userInfo');
        if(user){
            const userInfo=JSON.parse(user)
            this.setState({...userInfo})
        }
        else{
            const responseFromService={
                username:'training',
                email:'training@appknit.io'
            }
            localStorage.setItem('userInfo',JSON.stringify(responseFromService))
            this.setState({...responseFromService})
        }
        console.log('i am subscribing') 
    }
    componentWillMount(){
        console.log('i am unsubscribing')
    }
    render(){
        return(
            <div>
                <div>UserName:- {this.state.username}</div>
                <div>Email:- {this.state.email}</div>
                <div>Date and Time Of Login:- {this.props.lastLogin}</div>
            </div>
        )
    }
}