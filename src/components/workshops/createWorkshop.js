import React, { useEffect, useRef, useState } from "react"
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectableContext from 'react-bootstrap/SelectableContext';
import { 
    Plus,
    XCircleFill,
} from 'react-bootstrap-icons';
import SunEditor, {buttonList} from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

import { connect } from "react-redux";

const CreateWorkshop = ({sections, activeSection, lastAction, addSection, removeSection, setActiveSection, triggerToggle, addOption}) => {
    const inputRef = useRef(null);
    const [quizType, setQuizType] = useState('Quiz Type');
    let content = [];
    
    useEffect(() => {
        if(inputRef.current !== null ){
            inputRef.current.click()
        }        
    });

    function changeQuizType(type){
        setQuizType(type);
    }

    sections.map( ( section, index ) => {
        if(section.type === 'regular' || section.type === 'discussion'){
            content.push(<Card className="mb-3 card" key={index}>
                <Accordion.Toggle as={Card.Header} eventKey={index.toString()} className='card-header' onClick={() => setActiveSection(index)} ref={(index === activeSection) && (triggerToggle === true) && (lastAction === 'ADD_SECTION' || lastAction === 'REMOVE_SECTION') ? inputRef : null}>
                    Section {index+1} {section.type === 'regular' ? '(Regular)' : '(Discussion)'}
                    <XCircleFill color="white" size={24} className="float-right" onClick={(e) => { removeSection(index); e.stopPropagation();} }/>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body>
                        <SunEditor setOptions={
                            {
                                height: 250,
                                buttonList: [
                                    ['undo', 'redo', 'font', 'fontSize'],
                                    ['bold', 'italic', 'underline', 'strike'],
                                    ['align', 'list'],
                                    ['link', 'image', 'video']
                                ],
                            }
                        }/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>);
        }else if(section.type === 'qa'){
            let qaContent = [];
            let indexContent = 0;
            
            section.multioption.map( ( option, i ) => {
                qaContent.push(
                    <Form.Group  className="mb-5" style={{position: 'relative'}}>
                        <Form.Control type="text" placeholder="Enter an answer choice"  onChange={null} onFocus={() => addOption(index, i)} style={{position: 'absolute', width: '96%'}} />
                        <XCircleFill size={24} onClick={null} style={{position: 'absolute', right: '-10', top: '6', width: '4%'}} ></XCircleFill>
                    </Form.Group>
                );
                indexContent++;
            });
            content.push(<Card className="mb-3 card" key={index}>
                <Accordion.Toggle as={Card.Header} eventKey={index.toString()} className='card-header' onClick={() => setActiveSection(index)} ref={(index === activeSection) && (triggerToggle === true) && (lastAction === 'ADD_SECTION' || lastAction === 'REMOVE_SECTION') ? inputRef : null}>
                    Section {index+1} (Quiz)
                    <XCircleFill color="white" size={24} className="float-right" onClick={(e) => { removeSection(index); e.stopPropagation();} }/>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body>
                        <Form.Group as={Row}>
                            <Form.Label column sm={1}>
                                Q1
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control data-tag={index} type="text" placeholder="Enter your question" value={section.text} onChange={null} />
                            </Col>
                            <Col sm={2}>
                                <SelectableContext.Provider value={false} >
                                    <DropdownButton  title={quizType}>
                                        <Dropdown.Item onClick={() => { changeQuizType('Multiple Choice') }}> Multiple Choice </Dropdown.Item>
                                        <Dropdown.Item onClick={() => { changeQuizType('Checkboxes') }}> Checkboxes </Dropdown.Item>
                                    </DropdownButton>
                                </SelectableContext.Provider>
                            </Col>
                        </Form.Group>
                        {qaContent}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>)
        }else if(section.type === 'dnd'){
            content.push(<Card className="mb-3 card" key={index}>
                <Accordion.Toggle as={Card.Header} eventKey={index.toString()} className='card-header' onClick={() => setActiveSection(index)} ref={(index === activeSection) && (triggerToggle === true) && (lastAction === 'ADD_SECTION' || lastAction === 'REMOVE_SECTION') ? inputRef : null}>
                    Section {index+1} (Drag and Drop)
                    <XCircleFill color="white" size={24} className="float-right" onClick={(e) => { removeSection(index); e.stopPropagation();} }/>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body>
                        <h1>DND</h1>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>)
        }
    })

    return (<div className="container">
        
        <Accordion>
            {content}
        </Accordion>
        <DropdownButton id="dropdown-basic-button" title="Add Section">
            <Dropdown.Item onClick={() => addSection({type: 'regular'})}>Regular</Dropdown.Item>
            <Dropdown.Item onClick={() => addSection({type: 'qa'})}>Quiz</Dropdown.Item>
            <Dropdown.Item onClick={() => addSection({type: 'dnd'})}>Drag and Drop</Dropdown.Item>
            <Dropdown.Item onClick={() => addSection({type: 'discussion'})}>Discussion</Dropdown.Item>
        </DropdownButton>
    </div>)
}

const mapStateToProps = state => ({
    sections: state.sections,
    activeSection: state.activeSection,
    lastAction: state.lastAction,
    triggerToggle: state.triggerToggle,
});

const mapDispatchToProps = dispatch => ({
    addSection(section) {
        dispatch({
            type: 'ADD_SECTION',
            section
        })
    },
    removeSection(index) {
        dispatch({
            type: 'REMOVE_SECTION',
            index
        })
    },
    setActiveSection(index) {
        dispatch({
            type: 'SET_ACTIVE_SECTION',
            index
        })
    },
    addOption(indexSection, indexOption) {
        dispatch({
            type: 'ADD_OPTION',
            indexSection,
            indexOption
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkshop)