import css from "./FriendItem.module.css";
import clsx from 'clsx';

export const FriendItem =({avatar,name,isOnline})=>{

   
    return(
        <li className={css.item}>
            <span className={clsx(css.status, isOnline ? css.online  : css.offline )}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );

}


