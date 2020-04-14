import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { XCircleFill } from 'react-bootstrap-icons';

export default function WorkshopDND({ index, onRemove }) {
  const title = `Section ${index + 1} (Drag and Drop)`;

  const removeElement = (e) => {
    onRemove(index);
    e.stopPropagation();
  };

  return (
    <Card className="mb-3 card" key={index}>
      <Accordion.Toggle as={Card.Header} eventKey={`${index}`} className="card-header">
        {title}
        <XCircleFill color="white" size={24} className="float-right" onClick={removeElement} />
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={`${index}`}>
        <Card.Body>
          <h1>DND</h1>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}
