import React from 'react';
import { useRef } from 'react';
import { Box, Heading, Text, Button, VStack, HStack, Divider, Image, Icon, Input, InputGroup, IconButton, Flex, Grid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';


const CreateCompetitionForm = () => {
  const navigate = useNavigate();
  const [selectedDateTime, setSelectedDateTime] = React.useState(null);
  const [selectedDateTimeEnd, setSelectedDateTimeEnd] = React.useState(null);
  const [startDate, setStartDate] = React.useState('');
  const [startTime, setStartTime] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [endTime, setEndTime] = React.useState('');

  const handleDateTimeChange = (dateTime) => {
    setSelectedDateTime(dateTime);
    setStartDate(dateTime.toISOString().slice(0, 10)); // Set startDate as "YYYY-MM-DD" format
    setStartTime(dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })); // Set startTime as "HH:MM:SS" format
  };
  
  const handleDateTimeChangeEnd = (dateTime) => {
    setSelectedDateTimeEnd(dateTime);
    setEndDate(dateTime.toISOString().slice(0, 10)); // Set endDate as "YYYY-MM-DD" format
    setEndTime(dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })); // Set endTime as "HH:MM:SS" format
  };
  
  const datePickerStyles = {
    width: '100%', // Adjust the width as needed
    backgroundColor: '#494853', // Change the background color
    color: '#ffffff', // Change the text color
    border: 'none', // Remove the border
  };


  // retrieve data to create competition from the form and send it to backend to create competition
  const competitionNameRef = useRef();
  const startDateRef = useRef();
  const startTimeRef = useRef();
  const endDateRef = useRef();
  const endTimeRef = useRef();
  const descriptionRef = useRef();
  
  const formatTime = (time) => {
    const hours = time.getHours().toString();
    const minutes = time.getMinutes().toString()
    return `${hours}:${minutes}`;
  };

  // sending data to backend to create competition using axios to post request /create-competition
  const createCompetition = async (event) => {
    event.preventDefault();
  
    const competitionName = competitionNameRef.current.value;
    const startDate = new Date(startDateRef.current.value);
    const startTime = startTimeRef.current.value;
    const endDate = new Date(endDateRef.current.value);
    const endTime = endTimeRef.current.value;
    const description = descriptionRef.current.value;
   
  
    // Format the dates
    const formattedStartDate = startDate.toISOString().split('T')[0];
    const formattedEndDate = endDate.toISOString().split('T')[0];
  
    // Format the times 00:00 from 00:00:00 format
    const formattedStartTime = startTime.slice(0, 5);
    const formattedEndTime = endTime.slice(0, 5);
    console.log("formatted start time , end time ",  formattedStartTime, formattedEndTime);

  
    // Send the formatted values in the request payload
    const payload = {
      competitionName,
      startDate: formattedStartDate,
      startTime: formattedStartTime,
      endDate: formattedEndDate,
      endTime: formattedEndTime,
      description
    };
  
    // Make the POST request to create the competition
    axios
      .post('http://localhost:3000/create-competition', payload)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

      navigate('/admincompetition');
      
  };
  
  
  // Helper function to format time as "HH:MM"
 // Helper function to format time as "HH:MM"


  
  
  return (
    <Flex ml="150px" direction="column" gap="10px">
      <Heading fontWeight="bold" color="txtw" fontSize="4xl">
        Create Competition
      </Heading>

      <Text color="grey1" fontSize={15} fontStyle="italic">
        Host your own coding contest on CodeSpace. You can practice and compete with friends from your <br />
        organization or school. Select from our library of over coding challenges or create your own.
        Get started by providing the initial details for your contest.
      </Text>

      <Grid templateColumns={{ base: '1fr', md: '1fr 5fr' }} rowGap={10} mt="30px" >
      
          {/* Competition name */}
          <Flex>
          <Heading color="txtw" fontSize="2xl" fontWeight="semibold">
            Competition Name
          </Heading>
          <Text color="red.500">*</Text>
          </Flex>
          <InputGroup>
            <Input ref={competitionNameRef} bg="#494853" borderWidth="0px" w={300}/>
          </InputGroup>
     

          {/* Start time */}
          <Flex>
          <Heading color="txtw" fontSize="2xl" fontWeight="semibold">
            Start Date Time
          </Heading>
          <Text color="red.500">*</Text>
         
          </Flex>
          <HStack>

       
            <DatePicker
             type="hidden"
          selected={selectedDateTime}
          onChange={handleDateTimeChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Select date and time"  
          customInput={<Input  bg="#494853" borderWidth="0px" placeholder='Date(YY MM DD)'  w={400}/>}
        />
           <input
        type="hidden"
        ref={startDateRef}
        value={startDate}
      />
      <input
        type="hidden"
        ref={startTimeRef}
        value={startTime}
      />
          
    
          </HStack>
      

          {/* End time */}
          <Flex>
          <Heading color="txtw" fontSize="2xl" fontWeight="semibold">
            End Date Time
          </Heading>
          <Text color="red.500">*</Text>
          </Flex>
          <HStack>
          <DatePicker
       
          selected={selectedDateTimeEnd} 
          onChange={handleDateTimeChangeEnd}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Select date and time"
          customInput={<Input  bg="#494853" borderWidth="0px" placeholder='Date(YY MM DD)'  w={400}/>}
        />

      <input

        type="hidden"
        ref={endDateRef}
        value={endDate}
      />
      <input
        type="hidden"
        ref={endTimeRef}
        value={endTime}
      />
          </HStack>

         


          {/* Description */}
          <Flex>
          <Heading color="txtw" fontSize="2xl" fontWeight="semibold">
            Description
          </Heading>
          <Text color="red.500">*</Text>
          </Flex>
            <Input w={400} h={200} ref={descriptionRef} bg="#494853" borderWidth="0px" />
       
        

       
          {/* Additional fields */}
          {/* Add additional fields here */}

          {/* Buttons */}
          <HStack gap={5} mb={10}>
         
            <Button bg="btng" color="txtw" onClick={createCompetition}>

              Create
            </Button>
      
          <Link to="/admincompetition">
            <Button bg="btng" color="txtw">
              Cancel
            </Button>
          </Link>
          </HStack>
       
      </Grid>
    </Flex>
  );
};

export default CreateCompetitionForm;
