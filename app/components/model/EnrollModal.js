'use client'
import React, { useState } from "react";
import { PiStudentDuotone } from "react-icons/pi";
import axios from "axios";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Select,
  SelectItem,
  Input,
  Link,
} from "@nextui-org/react";

export default function EnrollModal({ size }) {
  
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
const [form,setForm]= useState({
  studentId:'',
  studentName_bn:'',
  studentName_en:'',
  fatherName:'',
  fatherPhone:'',
  motherName:'',
  motherPhone:'',
  studentPhone:'',
  perLocality:'',
  perUnion:'',
  perpostOffice:'',
  perThana:'',
  perDistrict:'',
  preLocality:'',
  preUnion:'',
  prepostOffice:'',
  preThana:'',
  preDistrict:'',
  currentInstitution:'',
  address:'',
  inShift:'',
  class:'',
  time:'',
  academicYear:'',



})
const handleInputChange=(e)=>{
  const {name , value} =e.target;
  setForm({...form, [name]: value})
}
const handleSubmit = async () => {
  try {
    const response = await fetch("http://localhost:4000/v1/student/admit", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  
      },
      body: JSON.stringify({
        studentId: form.studentId,
        studentName_en: form.studentName_en,
        class: form.class,
        academicYear: form.academicYear,
        time: form.time,
        studentName_bn: form.studentName_bn,
        fatherName: form.fatherName,
        motherName: form.motherName,
        fatherPhone: form.fatherPhone,
        motherPhone: form.motherPhone,
        studentPhone: form.studentPhone,
        presentAddress: {
          locality: form.perLocality,
          union: form.perUnion,
          postOffice: form.perpostOffice,
          thana: form.perThana,
          district: form.perDistrict,
        },
        permanentAddress: {
          locality: form.preLocality,
          union: form.preUnion,
          postOffice: form.prepostOffice,
          thana: form.preThana,
          district: form.preDistrict,
        },
        institutionalInformation: {
          currentInstitution: form.currentInstitution,
          address: form.address,
          shift: form.inShift,
        },
      }),
    });

    if (response.ok) {
      console.log('Data sent successfully.');
      // You can perform further actions here if needed.
    } else {
      console.error('Failed to send data to the API. Status:', response.status);
      const errorData = await response.json(); // Read the error response body
      console.error('Error data:', errorData);
    }
  } catch (error) {
    console.error('Error sending data to the API:', error);
  }
};

  const [backdrop, setBackdrop] = React.useState("blur");
  const shift = [
    {label: "Morning", value: "morning"},
    {label: "Noon", value: "noon"},
    {label: "Evening", value: "evening"},
  ];
  const batchclass = [
    {label: "Class 6", value: "class 6"},
    {label: "Class 7", value: "class 7"},
    {label: "Class 8", value: "class 8"},
    {label: "Class 9", value: "class 9"},
    {label: "Class 10", value: "class 10"},
    {label: "Inter 1st", value: "inter 1st"},
    {label: "Inter 2nd", value: "inter 2nd"},
  
  ]
  return (
    <>
      <Button
        className="bg-primary text-md font-semibold shadow-lg dark:shadow-sm shadow-slate-200 dark:shadow-slate-900"
        onPress={onOpen}
        color="secondary"
        size={size}
      >
        <PiStudentDuotone className="text-xl" />
        Admit Now
      </Button>
      <Modal
        backdrop={backdrop}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior='inside'
        placement="center"
        size="4xl"
        isDismissable={false} className='bg-slate-50 dark:bg-slate-900'
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Fill Up All the form
              </ModalHeader>
              <ModalBody className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7">
                <Input
                  size="sm"
                  variant="bordered"
                  type="text"
                  label="নাম বাংলায়"
                  name="studentName_bn"
              value={form.studentName_bn}
              onChange={handleInputChange}
                />
                <Input
                  size="sm"
                  variant="bordered"
                  type="text"
                  label="Name English"
                  name="studentName_en"
              value={form.studentName_en}
              onChange={handleInputChange}
                />
                <Input
                  size="sm"
                  variant="bordered"
                  type="text"
                  label="Father Name"
                  name="fatherName"
              value={form.fatherName}
              onChange={handleInputChange}
                />
                <Input
                  size="sm"
                  variant="bordered"
                  type="text"
                  label="Father Number"
                  name="fatherPhone"
              value={form.fatherPhone}
              onChange={handleInputChange}
                />
                <Input
                  size="sm"
                  variant="bordered"
                  type="text"
                  label="Mother Name"
                  name="motherName"
              value={form.motherName}
              onChange={handleInputChange}
                />
                <Input
                  size="sm"
                  variant="bordered"
                  type="text"
                  label="Mother Number"
                  name="motherPhone"
              value={form.motherPhone}
              onChange={handleInputChange}
                />
                 <Input
                  size="sm"
                  variant="bordered"
                  type="text"
                  label="Student Number"
                  name="studentPhone"
              value={form.studentPhone}
              onChange={handleInputChange}
                />
                 <Input
                  size="sm"
                  variant="bordered"
                  type="text"
                  label="Permanent Village"
                  name="perLocality"
              value={form.perLocality}
              onChange={handleInputChange}
                />
                 <Input
                  size="sm"
                  variant="bordered"
                  type="text"
                  label="Permanent Pouroshova"
                  name="perUnion"
              value={form.perUnion}
              onChange={handleInputChange}
                />
                 <Input
                  size="sm"
                  variant="bordered"
                  type="text"
                  label="Permanent PostOffice"
                  name="perpostOffice"
              value={form.perpostOffice}
              onChange={handleInputChange}
                />
                 <Input
                  size="sm"
                  variant="bordered"
                  type="text"
                  label="Permanent Thana"
                  name="perThana"
              value={form.perThana}
              onChange={handleInputChange}
                />
                 <Input
                  size="sm"
                  variant="bordered"
                  type="text"
                  label="Permanent Zela"
                  name="perDistrict"
              value={form.perDistrict}
              onChange={handleInputChange}
                />

<Input
                  size="sm"
                  variant="bordered"
                  type="text"
                  label="Present Village"
                  name="preLocality"
              value={form.preLocality}
              onChange={handleInputChange}
                />
                 <Input
                  size="sm"
                  variant="bordered"
                  type="text"
                  label="Present Pouroshova"
                  name="preUnion"
              value={form.preUnion}
              onChange={handleInputChange}
                />
                 <Input
                  size="sm"
                  variant="bordered"
                  type="text"
                  label="Present PostOffice"
                  name="prepostOffice"
              value={form.prepostOffice}
              onChange={handleInputChange}
                />
                 <Input
                  size="sm"
                  variant="bordered"
                  type="text"
                  label="Present Thana"
                  name="preThana"
              value={form.preThana}
              onChange={handleInputChange}
                />
                 <Input
                  size="sm"
                  variant="bordered"
                  type="text"
                  label="Present Zela"
                  name="preDistrict"
              value={form.preDistrict}
              onChange={handleInputChange}
                />
                 <Input
                  size="sm"
                  variant="bordered"
                  type="text"
                  label="Protisthan"
                  name="currentInstitution"
              value={form.currentInstitution}
              onChange={handleInputChange}
                />
                 <Input
                  size="sm"
                  variant="bordered"
                  type="text"
                  label="Pritisthan Address"
                  name="address"
              value={form.address}
              onChange={handleInputChange}
                />
                          <Select 
            size='sm' variant="bordered"
            label="Shift" 
            className="w-full" 
            name="inShift"
              value={form.inShift}
              onChange={handleInputChange}
          >
            {shift.map((sf) => (
              <SelectItem key={sf.value} value={sf.value}>
                {sf.label}
              </SelectItem>
            ))}
          </Select>
          <Select 
            size='sm' variant="bordered"
            label="Class" 
            className="w-full" 
            name="class"
              value={form.class}
              onChange={handleInputChange}
          >
            {batchclass.map((sf) => (
              <SelectItem key={sf.value} value={sf.value}>
                {sf.label}
              </SelectItem>
            ))}
          </Select>
                 <Input
                  size="sm"
                  variant="bordered"
                  type="time"
                  label="Time"
                  name="time"
              value={form.time}
              onChange={handleInputChange}
                />
                 <Input
                  size="sm"
                  variant="bordered"
                  type="text"
                  label="Year"
                  name="academicYear"
              value={form.academicYear}
              onChange={handleInputChange}
                />

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={handleSubmit}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
