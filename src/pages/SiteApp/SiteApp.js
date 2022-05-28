import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import classes from './SiteApp.module.css';
import SiteList from '../../components/Site/SiteList/SiteList';
import { siteService } from '../../services/siteService';
import Button from '../../components/UI/Button/Button';

const SiteApp = () => {
  const [sites, setSites] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const loadedSites = siteService.getSites();
    setSites(loadedSites);
  }, [])

  return (
    <div className={classes}>
      <Button onClick={() => navigate('/edit')}>
        Add new site
      </Button>
      {!!sites.length && <SiteList sites={sites}/>}
    </div>
  );
};
export default SiteApp;
