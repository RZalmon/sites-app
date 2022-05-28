import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Select from '../../components/UI/Select/Select';

import { siteService } from '../../services/siteService';
import Card from '../../components/UI/Card/Card';
import Button from '../../components/UI/Button/Button';

const EditSite = (props) => {
  const { siteId } = useParams();
  const navigate = useNavigate();
  const [site, setSite] = useState({});

  const nameInputRef = useRef();
  const ipAddressInputRef = useRef();
  const platformSelectRef = useRef();
  const healthStatusSelectRef = useRef();

  const platformOptions = ['VMware', 'Hyper-V', 'Public Cloud'];
  const healthStatusOptions = ['Good', 'Warning', 'Failure'];

  const deleteHandler = () => {
      siteService.deleteSite(site.id);
      navigate('/');
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredIPAddress = ipAddressInputRef.current.value;
    const enteredPlatform = platformSelectRef.current.value;
    const enteredHealthStatus = siteId
      ? site.healthStatus
      : healthStatusSelectRef.current.value;

    const siteToSave = {
      id: siteId ? site.id : '',
      name: enteredName,
      ipAddress: enteredIPAddress,
      platform: enteredPlatform,
      healthStatus: enteredHealthStatus,
    };
    siteService.saveSite(JSON.parse(JSON.stringify(siteToSave)));
    navigate('/');
  };

  useEffect(() => {
    setSite(
      siteId ? siteService.getSiteById(siteId) : siteService.getEmptySite()
    );
  }, [siteId]);

  return (
    <div>
      <h1>{siteId ? 'Edit ' + site.name + ' site' : 'Add new Site'} </h1>
      {siteId && (
        <Button onClick={deleteHandler}>
          Delete
        </Button>
      )}
      <Card>
        <form onSubmit={submitHandler}>
          <Input
            ref={nameInputRef}
            label="Name"
            input={{
              id: 'name_' + site.id,
              type: 'text',
              defaultValue: site.name ? site.name : '',
            }}
          />
          <Input
            ref={ipAddressInputRef}
            label="IP Address"
            input={{
              id: 'ipAddress_' + site.id,
              type: 'text',
              defaultValue: site.ipAddress ? site.ipAddress : '',
            }}
          />
          <Select
            ref={platformSelectRef}
            label="platform"
            select={{
              id: 'ipAddress_' + site.id,
              options: platformOptions,
            }}
          />
          {!siteId && (
            <Select
              ref={healthStatusSelectRef}
              label="Health Status"
              select={{
                id: 'healthStatus_' + site.id,
                options: healthStatusOptions,
              }}
            />
          )}
          <button>Submit</button>
        </form>
      </Card>
    </div>
  );
};
export default EditSite;
