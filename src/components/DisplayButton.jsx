import { useState } from 'react'
import { BiSlider as SortIcon } from "react-icons/bi";
import { MdKeyboardArrowDown as DownIcon } from "react-icons/md";
import OptionsMenu from './OptionsMenu'
import './DisplayButton.css'

const DisplayButton = () => {

    const [optionsMenuVisible, setOptionsMenuVisible] = useState(false)
    const toggleMenu = (event) => {
        const tagName = event.target.tagName.toLowerCase();
        if(tagName != "select") {
            setOptionsMenuVisible(!optionsMenuVisible)
        }
    }

  return (
    <button className="display-button" onClick={toggleMenu}>
        <div className="display-button-wrapper">
            <SortIcon />
            <strong>Display</strong>
            <DownIcon />
        </div>
        { optionsMenuVisible && <OptionsMenu/> }
    </button>
  )
}

export default DisplayButton