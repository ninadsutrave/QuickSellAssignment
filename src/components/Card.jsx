import PropTypes from 'prop-types'
import './Card.css'

const Card = ({ticketId, ticketTitle, available}) => {

   // id, title, status, priority, userName, available
  const userStatusIconColor = available?'green':'grey';

  return (
    <div className="card-wrapper">
        <div className="card-upper-wrapper">
            <div className="ticket-details">
                <span className="ticket-id">{ticketId}</span>
                <div className="user-container">
                    <img/>
                    <div className="user-status-circle" style={{backgroundColor: userStatusIconColor}}></div>
                </div>
            </div>
            <div className="ticket-title-span">
                <img/>
                <h2 className="ticket-title">{ticketTitle}</h2>
            </div>
        </div>
        <div className="card-lower-wrapper">
            <div className="priority-icon-wrapper"><img/></div>
            <div className="tag-wrapper">
                <img/>
                <div className="tag-name">Feature Request</div>
            </div>
        </div>
    </div>
  )
}

Card.propTypes = {
    ticketId: PropTypes.string.isRequired,
    ticketTitle: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    available: PropTypes.bool.isRequired
};
  
export default Card