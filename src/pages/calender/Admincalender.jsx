// import { Calendar } from '@fullcalendar/core';
import FullCalender, { formatDate} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import './calender.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { Box, List, ListItem, ListItemText, ListItemIcon, Button, Container, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Link } from 'react-router-dom';

const Admincalender = () => {
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt('Please enter a new title for your event');
        const calendarApi = selected.view.calendar;
        calendarApi.unselect(); // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dasteStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        }
    };

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
            selected.event.remove();
        }
    };

    return (
    
    <Box pt="20px">

        <Navbar />

        <Box className="mainbox">
        <Box className='boxx'>
            
        </Box>

            {/* Sidebar */}

            <Box flex="1 1 20%" p="25px" borderRadius="4px" className='side'>
                <Typography variant="h6" className='type' >
                    All Known appointments: ({currentEvents.length})
                </Typography>
                    
                <List className='type2'>
                    
                    {currentEvents.map((event) => (
                        <ListItem key={event.id} sx={{margin: "1px", borderRadius: "2px"}}>
                            <NotificationsNoneIcon className="icon" />
                            <ListItemText primary={event.title} secondary={<Typography className='type1'>{formatDate(event.start, {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                                
                            })}</Typography>}/>
                            
                        </ListItem>
                    ))}
                </List>
                
            </Box>

            {/* Calender */}
            <Box flex="80%" ml="15px" pb="180px" mr="15px" >
                <FullCalender
                    height="85vh"
                    padding-right="10px"
                    margin="10px"
                    defaultView="dayGridMonth"
                    plugins={[ dayGridPlugin , timeGridPlugin, listPlugin, interactionPlugin]}
                    header={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet={(events) => setCurrentEvents(events)}
                    initialEvents={[
                        { id: '1234', title: 'Event Now', start: new Date() },
                        { id: '12345', title: 'All day event', date: "2022-11-01" },
                        { id: '12345', title: 'All day event', date: "2022-11-30" },
                        { id: '12345', title: 'Timed event', date: "2022-11-11" },
                        { id: '12345', title: 'Timed event', date: "2022-11-11" },
                        { id: '12345', title: 'All day event', date: "2022-11-17" },
                        
                    ]}

                    

                    
                    />
            </Box>

            
        </Box>
        <Button variant="contained" color="success" >
            <Link to="/adminhome">Back to Dashboard</Link>

        </Button>
        
        
    </Box>
    
);

}

export default Admincalender;