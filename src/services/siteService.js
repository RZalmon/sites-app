import { storageService } from './storageService';
const SITE_KEY = 'sites';

const sites = {
  id1: {
    id: 'id1',
    name: 'Parquet Courts',
    ipAddress: '127.0.0.1',
    platform: 'VMware',
    healthStatus: 'Good',
  },
  id2: {
    id: 'id2',
    name: 'Premier Leauge',
    ipAddress: '172.16.0.9',
    platform: 'Hyper-V',
    healthStatus: 'Warning',
  },
  id3: {
    id: 'id3',
    name: 'Sky Scanner',
    ipAddress: '192.0.0.7',
    platform: 'Public Cloud',
    healthStatus: 'Failure',
  },
};

const getSites = () => {
  let sitesToReturn = storageService.load(SITE_KEY);
  if (!sitesToReturn || !sitesToReturn.length) {
    storageService.save(SITE_KEY, sites);
  }
  sitesToReturn = Object.keys(sites).map(siteId => sites[siteId]);
  return sitesToReturn.length ? sitesToReturn : [];
};

const getSiteById = (id) => {
  const site = sites[id];
  return site;
};

const deleteSite = (id) => {
  delete sites[id];
  storageService.save(SITE_KEY, sites);
  return sites;
};

const saveSite = (site) => {
  if (!site.id) site.id = makeId();
  sites[site.id] = site;
  storageService.save(SITE_KEY, sites);
  return sites;
};

const getEmptySite = () => {
  return {
    name: '',
    ipAddress: '',
    platform: '',
    healthStatus: '',
  };
};

const makeId = (length = 10) => {
    let txt = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

export const siteService = {
  getSites,
  getSiteById,
  deleteSite,
  saveSite,
  getEmptySite,
};
