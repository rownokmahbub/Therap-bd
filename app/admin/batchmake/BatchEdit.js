import React from "react";
import {HiMiniPencilSquare} from 'react-icons/hi2'
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
  Tooltip
} from "@nextui-org/react";


export default function BatchEdit() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

 const [backdrop, setBackdrop] = React.useState("blur");
  return (
    <>
      <Tooltip showArrow={true}  offset={15} shadow="20px"  content="Edit">
      <Button className="bg-primary text-sm font-semibold" onPress={onOpen} color="secondary" size="sm">
      <HiMiniPencilSquare className="text-xl"/>
      </Button>
      </Tooltip>
    
      
     
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

