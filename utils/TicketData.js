import axios from 'axios'

export const getTicketData = () => {
    return axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
    .then((response) => {
        if(response.data) {
            const ticketData = response.data.tickets.map((ticket) => {
              const users = response.data.users.find((user) => user.id === ticket.userId);

              return {
                id: ticket.id,
                title: ticket.title,
                tag: ticket.tag[0],
                status: ticket.status,
                priority: ticket.priority,
                available: users.available,
                user: users.name
              };
            });
            return ticketData
        } else throw console.error('Response null');
    })
    .catch((err) => console.log(err))
}

export const getPriorityName = (priority) => {
  switch (priority) {
    case 0: return "No Priority";
    case 1: return "Low Priority";
    case 2: return "Medium Priority"; 
    case 3: return "High Priority";
    case 4: return "Urgent";
    default: return ""
  }
}