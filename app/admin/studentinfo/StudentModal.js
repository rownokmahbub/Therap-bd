import React from "react";
import {SiGoogleclassroom} from 'react-icons/si'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";


export default function StudentModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

 const [backdrop, setBackdrop] = React.useState("blur");
  return (
    <>
      <Button className="bg-primary text-md font-semibold shadow-xl shadow-slate-200 dark:shadow-slate-900" onPress={onOpen} color="secondary" size="md">
      <SiGoogleclassroom className="text-xl"/>
      Create Batch
      </Button>
      <Modal backdrop={backdrop} isOpen={isOpen} onOpenChange={onOpenChange} placement="center" size='4xl' isDismissable={false} >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Fill Up All the form</ModalHeader>
              <ModalBody className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-7">
              <Input size="sm" variant="bordered" type="email" label="Email" />
              <Input size="sm" variant="bordered" type="email" label="Email" />
              <Input size="sm" variant="bordered" type="email" label="Email" />
              <Input size="sm" variant="bordered" type="email" label="Email" />
              <Input size="sm" variant="bordered" type="email" label="Email" />
              <Input size="sm" variant="bordered" type="email" label="Email" />
               
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
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

