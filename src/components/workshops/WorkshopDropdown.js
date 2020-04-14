import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { WorkshopType } from '../../models/Workshop';
import { useDispatch } from 'react-redux';
import * as appActions from '../../actions/appAction';

export default function WorkshopDropdown() {
  const dispatch = useDispatch();

  const handlerClick = (action) => {
    dispatch(appActions.setWorkshopType([action]));
  };

  return (
    <DropdownButton id="dropdown-basic-button" title="Add Section">
      <Dropdown.Item onClick={() => handlerClick(WorkshopType.REGULAR)}>Regular</Dropdown.Item>
      <Dropdown.Item onClick={() => handlerClick(WorkshopType.QA)}>Quiz</Dropdown.Item>
      <Dropdown.Item onClick={() => handlerClick(WorkshopType.DND)}>Drag and Drop</Dropdown.Item>
      <Dropdown.Item onClick={() => handlerClick(WorkshopType.DISCUSSION)}>
        Discussion
      </Dropdown.Item>
    </DropdownButton>
  );
}
