import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'suneditor/dist/css/suneditor.min.css';

import { useSelector, useDispatch } from 'react-redux';
import WorkshopDropdown from './WorkshopDropdown';
import WorkshopRegular from './WorkshopRegular';
import { WorkshopType } from '../../models/Workshop';

import * as appActions from '../../actions/appAction';
import WorkshopQA from './WorkshopQA';
import WorkshopDND from './WorkshopDND';

const CreateWorkshop = () => {
  const workshopTypes = useSelector((state) => state.app.workshopTypes);
  const dispatch = useDispatch();

  const removeElement = (index) => {
    dispatch(appActions.removeWorkshopType(workshopTypes, index));
  };

  const mapWorkshop = (type, index) => {
    switch (type) {
      case WorkshopType.REGULAR:
      case WorkshopType.DISCUSSION:
        return <WorkshopRegular key={index} index={index} type={type} onRemove={removeElement} />;
      case WorkshopType.QA:
        return <WorkshopQA key={index} index={index} type={type} onRemove={removeElement} />;
      case WorkshopType.DND:
        return <WorkshopDND key={index} index={index} type={type} onRemove={removeElement} />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <Accordion>{workshopTypes.map(mapWorkshop)}</Accordion>
      <WorkshopDropdown />
    </div>
  );
};

export default CreateWorkshop;
