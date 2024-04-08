import {StatisticItem} from '../StatisticItem/StatisticItem'
import css from './Statistics.module.css'
export const Statistics = ({title,stats})=>{
    
    if (stats.lenght===0) {
        return null;
    }
    return(
        <div className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
        {stats.map((stat) => (
             <StatisticItem key={stat.id}
             label={stat.label}
             percentage={stat.percentage}            
             />
        )       
        )} 
        </ul>

        </div>)
}