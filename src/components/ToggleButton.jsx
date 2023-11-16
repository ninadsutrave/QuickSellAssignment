import { useState } from 'react'
import { useDisplayUpdate } from '../contexts/DisplayContext'
import { BiSlider as SortIcon } from "react-icons/bi";
import { MdKeyboardArrowDown as DownIcon } from "react-icons/md";
import './ToggleButton.css'

const ToggleButton = () => {

    const [optionsMenu, setOptionsMenu] = useState(false)
    const [groupingType, setGroupingType] = useState('status');
    const [orderingType, setOrderingType] = useState('priority');
    const toggleDisplay = useDisplayUpdate()

    const handleMenu = (event) => {
        const tagName = event.target.tagName.toLowerCase();
        if(tagName != "select") {
            setOptionsMenu(!optionsMenu)
        }
    }

    const handleGroupingChange = (event) => {
        setGroupingType(event.target.value);
        toggleDisplay(event.target.value, orderingType)
    };
    
    const handleOrderingChange = (event) => {
        setOrderingType(event.target.value);
        toggleDisplay(groupingType, event.target.value)
    };

  return (
    <button className="toggle-button" onClick={handleMenu}>
        <div className="toggle-button-wrapper">
            <SortIcon />
            <strong>Display</strong>
            <DownIcon />
        </div>
        
        {
            optionsMenu &&
            <div className="options-menu">
                <div className="menu-option">
                    <label className="dropdown-label">Grouping</label>
                    <select value={groupingType} onChange={handleGroupingChange}>
                        <option value="status">Status</option>
                        <option value="user">User</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
            
                <div className="menu-option">
                    <label className="dropdown-label">Ordering</label>
                    <select value={orderingType} onChange={handleOrderingChange}>
                        <option value="priority">Priority</option>
                        <option value="title">Title</option>
                    </select>
                </div>
            </div>
        }
    </button>
  )
}

export default ToggleButton