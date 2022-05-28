import classes from './SiteList.module.css';
import SiteItem from '../SiteItem/SiteItem';

const SiteList = ({sites}) =>{
    
    return sites.map(site => <SiteItem key={site.id} site={site} />)
}
export default SiteList;