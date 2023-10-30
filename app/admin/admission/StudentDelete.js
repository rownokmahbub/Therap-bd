import React from "react";
import {AiOutlineDelete} from 'react-icons/ai'
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


export default function StudentDelete() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

 const [backdrop, setBackdrop] = React.useState("blur");
  return (
    <>
     <Tooltip showArrow={true}  offset={15} shadow="20px"  content="Delete">
     <Button className="text-sm font-semibold" onPress={onOpen} color="danger" size="sm">
      <AiOutlineDelete className="text-xl"/>
      
      </Button>
     </Tooltip>
   
      <Modal backdrop={backdrop} isOpen={isOpen} onOpenChange={onOpenChange} placement="center" size='md' isDismissable={false} >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Fill Up All the form</ModalHeader>
              <ModalBody className="">
             <h1 className="text-red-400 font-semibold text-xl">Are you sure want to delete the data ?</h1>
              </ModalBody>
              <ModalFooter className="flex justify-center gap-4">
                <Button color="secondary" variant="flat" onPress={onClose}>
                  No
                </Button>
                <Button color="danger" onPress={onClose}>
                  Yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

