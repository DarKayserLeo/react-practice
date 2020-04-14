import React from 'react';

export default function WorkshopQA() {
  return <div>WorkshopQA</div>;
}

//       let qaContent = [];
//       let indexContent = 0;

//       section.multioption.map((option, i) => {
//         qaContent.push(
//           <Form.Group className="mb-5" style={{ position: 'relative' }}>
//             <Form.Control
//               type="text"
//               placeholder="Enter an answer choice"
//               onChange={null}
//               onFocus={() => addOption(index, i)}
//               style={{ position: 'absolute', width: '96%' }}
//             />
//             <XCircleFill
//               size={24}
//               onClick={null}
//               style={{ position: 'absolute', right: '-10', top: '6', width: '4%' }}
//             ></XCircleFill>
//           </Form.Group>
//         );
//         indexContent++;
//       });
//       content.push(
//         <Card className="mb-3 card" key={index}>
//           <Accordion.Toggle
//             as={Card.Header}
//             eventKey={index.toString()}
//             className="card-header"
//             onClick={() => setActiveSection(index)}
//             ref={
//               index === activeSection &&
//               triggerToggle === true &&
//               (lastAction === 'ADD_SECTION' || lastAction === 'REMOVE_SECTION')
//                 ? inputRef
//                 : null
//             }
//           >
//             Section {index + 1} (Quiz)
//             <XCircleFill
//               color="white"
//               size={24}
//               className="float-right"
//               onClick={(e) => {
//                 removeSection(index);
//                 e.stopPropagation();
//               }}
//             />
//           </Accordion.Toggle>
//           <Accordion.Collapse eventKey={index.toString()}>
//             <Card.Body>
//               <Form.Group as={Row}>
//                 <Form.Label column sm={1}>
//                   Q1
//                 </Form.Label>
//                 <Col sm={9}>
//                   <Form.Control
//                     data-tag={index}
//                     type="text"
//                     placeholder="Enter your question"
//                     value={section.text}
//                     onChange={null}
//                   />
//                 </Col>
//                 <Col sm={2}>
//                   <SelectableContext.Provider value={false}>
//                     <DropdownButton title={quizType}>
//                       <Dropdown.Item
//                         onClick={() => {
//                           changeQuizType('Multiple Choice');
//                         }}
//                       >
//                         {' '}
//                         Multiple Choice{' '}
//                       </Dropdown.Item>
//                       <Dropdown.Item
//                         onClick={() => {
//                           changeQuizType('Checkboxes');
//                         }}
//                       >
//                         {' '}
//                         Checkboxes{' '}
//                       </Dropdown.Item>
//                     </DropdownButton>
//                   </SelectableContext.Provider>
//                 </Col>
//               </Form.Group>
//               {qaContent}
//             </Card.Body>
//           </Accordion.Collapse>
//         </Card>
//       );
