import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'

const DisplayContext = React.createContext()
const DisplayUpdateContext = React.createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useDisplay = () => {
    return useContext(DisplayContext)
}

// eslint-disable-next-line react-refresh/only-export-components
export const useDisplayUpdate = () => {
    return useContext(DisplayUpdateContext)
}

export const DisplayProvider = ({ children }) => {
    const [groupingType, setGroupingType] = useState('status')
    const [orderingType, setOrderingType] = useState('priority')

    const toggleDisplay = (grouping, ordering) => {
        if(grouping !== null) setGroupingType(grouping)
        if(ordering !== null) setOrderingType(ordering)
    }

    return (
        <DisplayContext.Provider value={{groupingType, orderingType}}>
            <DisplayUpdateContext.Provider value={toggleDisplay}>
                {children}
            </DisplayUpdateContext.Provider>
        </DisplayContext.Provider>
    )
}

DisplayProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
