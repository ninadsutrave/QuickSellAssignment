import axios from 'axios'

export const getTickets = () => {
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

export const getPriority = (priorityName) => {
  switch (priorityName) {
    case "No Priority": return 0;
    case "Low Priority": return 1;
    case "Medium Priority": return 2;
    case "High Priority": return 3;
    case "Urgent": return 4;
    default: return null;
  } 
}

export const getAvailability = (userName) => {
  return axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
  .then((response) => {
      if(response.data) {
          const user = response.data.users.find((user) => user.name === userName);
          if(user) {
            return user.available
          }
      } else throw console.error('Response null');
  })
  .catch((err) => console.log(err))
}