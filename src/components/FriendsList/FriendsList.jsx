import { FriendItem } from "components/FriendItem/FriendItem";
import css from './FriendsList.module.css'


export const FriendsList = ({friends })=>{
    return(
<ul className={css.friendList}>
{friends.map((friend)=>{
    return<FriendItem key={friend.id}
    avatar={friend.avatar}
    name={friend.name}
    isOnline= {friend.isOnline}
   

    
    />
})}
</ul>


    );

}