import { Modal } from '@heroui/react'
import React from 'react'

export const MyModal = ({isOpen,setIsOpen,selectedFood}) => {
    console.log(selectedFood.title,selectedFood.img)
  return (
    <div>
        <Modal.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
          <Modal.Container placement='center'>
            <Modal.Dialog className="w-[80vw] max-w-none">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading>{selectedFood.title}</Modal.Heading>
              </Modal.Header>
              <Modal.Body>
                <img src={'images/' + selectedFood.img} alt={selectedFood.title}
                  className='block max-h-[70vh] w-full object-contain h-auto' />
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
    </div>
  )
}
