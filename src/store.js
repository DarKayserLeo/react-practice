import { createStore } from "redux";

const initialState = {
    user: { 
        name: 'none'
    },
    sections: []
}

const reducer = (state = initialState, action) => {
    if(action.type === 'ADD_SECTION'){
        const sectionType = action.section.type; 
        
        if(!('sections' in state)) state = {...state, sections: [], activeSection: 0}
        console.log(state.sections)
        if(sectionType === 'regular' || sectionType === 'qa' || sectionType === 'dnd' || sectionType === 'discussion'){
            let multioption = [];
            if(sectionType === 'qa')
                multioption = ['']
            return {
                ...state,
                sections: state.sections.concat({...action.section, header: null, content: null, multioption}),
                activeSection: state.sections.length,
                lastAction: action.type,
                triggerToggle: true
            }
        }
        
        return {
            user: {name: 'leonel'}
        }
    }

    if(action.type === 'REMOVE_SECTION'){
        const index = action.index;
        let activeSection = state.activeSection;
        let triggerToggle = true;

        if(index < activeSection)
            activeSection--;
        else
            triggerToggle = false;

        return {
            ...state,
            sections: state.sections.filter((section, i) => i !== index),
            activeSection,
            lastAction: action.type,
            triggerToggle
        }
    }

    if(action.type === 'SET_ACTIVE_SECTION'){
        const index = action.index;
        
        return {
            ...state,
            activeSection: index,
            lastAction: action.type
        }    
    }

    if(action.type === 'ADD_OPTION'){
        const indexSection = action.indexSection;
        const indexOption = action.indexOption;
        let sections = state.sections;
        let section = sections[indexSection];
        let multioption = section.multioption;
        
        if(indexOption === multioption.length - 1){
            sections[indexSection].multioption.push("algo");
        }

        console.log(state)

        return {
            ...state,
            sections
        }
    }

    return state;
}

export default createStore(reducer)