import classes from './SiteItem.module.css';
import Card from '../../UI/Card/Card';
import { Link } from 'react-router-dom';

const SiteItem = ({ site }) => {
  return (
    <Card className="site-item">
      <h3>{site.name}</h3>
      <p>{site.ipAddress}</p>
      <p>{site.platform}</p>
      <div>{site.healthStatus}</div>
      <Link to={'/edit/' + site.id}>Edit</Link>
    </Card>
  );
};
export default SiteItem;
