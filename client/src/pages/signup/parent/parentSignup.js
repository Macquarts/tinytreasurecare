import { Container, SimpleGrid, Box, Button } from '@chakra-ui/react';
import { useState } from 'react';

// components
import CareCriteria from './careCriteria';
import CareType from './caretype';
import ExpectedTime from './expectedTime';
import ParentSignupInput from './parentSignupInput';
import ZipCode from './zipcode';

// graphql
import {ADD_USER} from "../../../utils/mutations"
import { useMutation } from '@apollo/client';

export default function ParentSignup() {
  const [currentStep, setcurrentStep] = useState('careType');
  const [careType, setCareType] = useState('');
  const [timeType, setTimeType] = useState('');
  const [ageType, setAgeType] = useState('');
  const [experienceYears, setExperienceYears] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [addUser] = useMutation(ADD_USER);

  const parentObject = {
    careType: 'NANNIES',
    expectedTime: 'now',
    criteria: {
      carerExperience: '3',
      carerGoodwith: 'twotofiveyears',
      pincode: '02453',
    },
    firstName: 'Murali',
    lastName: 'Elumalai',
    email: 'muralismail4u@gmail.com',
    password: '123456',
    type: 'PARENT',
  };

  const handleCareTypeSelect = careType => {
    // alert(careType);
    setCareType(careType);
    console.log(careType);
    setcurrentStep('expectedTime');
    console.log(currentStep);
  };

  const handleTimeTypeSelect = timeType => {
    // alert(timeType);
    setTimeType(timeType);
    setcurrentStep('careCriteria');
  };

  const handleAgeSelect = toddlerAge => {
    // alert(toddlerAge);
    setAgeType(toddlerAge);
  };

  const handleExperienceSelect = experience => {
    // alert(experience);
    setExperienceYears(experience);
  };

  const onCareCriteriaSubmit = () => {
    // alert('on next select');
    setcurrentStep('zipcode');
  };

  const onZipCodeSubmit = zipcode => {
    // alert('on next select');
    setZipCode(zipcode);
    setcurrentStep('parent-signup');
  };
  const onChangeStep = step => {
    setcurrentStep(step);
  };

  const onParentSignUpSubmit = async () => {
    alert('on next select');
    try {
     const { data } = await addUser({
      variables: {
        username: "test120",
        email: "testmail4u@gmail.co",
        password: "12334455",
        type: "PARENT",
        // add remaining data from form
      }
    });
    console.log(data); 
    // usethis data to login User and store token in local storage
    } catch (error) {
     console.log("ERROR OCCURRED SHOW ALERT FOR ERROR",error); 
    }
    
  };

  function renderSwitch() {
    console.log('rendercalled', currentStep);
    if (currentStep == 'expectedTime') {
      console.log('ifcondition', careType);
      return (
        <ExpectedTime
          onTimeTypeSelect={handleTimeTypeSelect}
          value={timeType}
          onChangeStep={onChangeStep}
        />
      );
    } else if (currentStep == 'careCriteria') {
      return (
        <CareCriteria
          value={{ experienceYears: experienceYears, ageType: ageType }}
          onSubmit={onCareCriteriaSubmit}
          onAgeSelect={handleAgeSelect}
          onExperienceSelect={handleExperienceSelect}
          onChangeStep={onChangeStep}
        />
      );
    } else if (currentStep == 'zipcode') {
      return <ZipCode onSubmit={onZipCodeSubmit} onChangeStep={onChangeStep} />;
    } else if (currentStep == 'parent-signup') {
      return (
        <ParentSignupInput
          onSubmit={onParentSignUpSubmit}
          onChangeStep={onChangeStep}
        />
      );
    } else {
      return (
        <CareType
          onCareTypeSelect={handleCareTypeSelect}
          onChangeStep={onChangeStep}
          value={careType}
        />
      );
    }
  }

  return (
    <>
      <Container>{renderSwitch()}</Container>
    </>
  );
}