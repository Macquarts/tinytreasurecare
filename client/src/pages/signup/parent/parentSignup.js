import { Container, SimpleGrid, Box, Button } from '@chakra-ui/react';
import { useState } from 'react';

// components
import CareCriteria from './careCriteria';
import CareType from './caretype';
import ExpectedTime from './expectedTime';
import ParentSignupInput from './parentSignupInput';
import ZipCode from './zipcode';
import { useHistory } from 'react-router-dom';

// graphql
import { ADD_USER } from '../../../utils/mutations';
import { useMutation } from '@apollo/client';

export default function ParentSignup() {
  const history = useHistory();
  const [currentStep, setcurrentStep] = useState('careType');
  const [careType, setCareType] = useState('');
  const [timeType, setTimeType] = useState('');
  const [ageType, setAgeType] = useState('');
  const [experienceYears, setExperienceYears] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [userInfo, setUserInfo] = useState('');
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
    setcurrentStep('parent-signup');
  };
  const onChangeStep = step => {
    setcurrentStep(step);
  };

  const handleChange = (name, value) => {
    setUserInfo({ ...userInfo, [name]: value });
  };
  const onChangeZipCode = value => {
    setZipCode(value);
  };
  const onParentSignUpSubmit = async () => {
    alert('on next select');
    const { firstName, lastName, email, password } = userInfo || {};

    try {
      const { data } = await addUser({
        variables: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          type: 'PARENT',
          careType: careType,
          timeType: timeType,
          ageType: ageType,
          experienceYears: experienceYears,
          zipCode: zipCode,

          // add remaining data from form
        },
      });
      if (data) {
        localStorage.setItem('authToken', data.addUser.token);
        localStorage.setItem('userType', data.addUser.user.type);
        localStorage.setItem('firstName', data.loginUser.user.firstName);

        history.push('/dashboard/carers');
      }
      console.log(data);
      // usethis data to login User and store token in local storage
    } catch (error) {
      console.log('ERROR OCCURRED SHOW ALERT FOR ERROR', error);
    }
  };

  function renderSwitch() {
    console.log('rendercalled', currentStep);
    console.log('zipCode', zipCode);

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
      return (
        <ZipCode
          onSubmit={onZipCodeSubmit}
          onChangeStep={onChangeStep}
          onChangeZipCode={onChangeZipCode}
          zipCode={zipCode}
        />
      );
    } else if (currentStep == 'parent-signup') {
      return (
        <ParentSignupInput
          onSubmit={onParentSignUpSubmit}
          onChangeStep={onChangeStep}
          handleChange={handleChange}
          userInfo={userInfo}
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