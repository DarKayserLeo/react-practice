import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { XCircleFill } from 'react-bootstrap-icons';
import SunEditor from 'suneditor-react';

export default function WorkshopRegular({ index, type, onRemove }) {
  const sunEditorOptions = {
    height: 250,
    buttonList: [
      ['undo', 'redo', 'font', 'fontSize'],
      ['bold', 'italic', 'underline', 'strike'],
      ['align', 'list'],
      ['link', 'image', 'video'],
    ],
  };

  const title = `Section ${index + 1} ${type === 'regular' ? '(Regular)' : '(Discussion)'}`;

  const removeElement = (e) => {
    onRemove(index);
    e.stopPropagation();
  };

  return (
    <Card className="mb-3 card">
      <Accordion.Toggle as={Card.Header} eventKey={`${index}`} className="card-header">
        {title}
        <XCircleFill color="white" size={24} className="float-right" onClick={removeElement} />
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={`${index}`}>
        <Card.Body>
          <SunEditor setOptions={sunEditorOptions} />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}
