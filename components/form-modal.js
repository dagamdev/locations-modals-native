import { useRef, useState } from 'react'
import { View, Button, FormControl, Input, Modal } from 'native-base'
import { LOCATIONS } from '../utils/data'

export default function FormModal ({ showModal, setShowModal }) {
  const nameRef = useRef(null)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')

  const handleNameChange = (text) => {
    setName(text)
  }

  const handleAddressChange = (text) => {
    setAddress(text)
  }

  const handleSubmit = () => {
    LOCATIONS.push({
      id: Math.floor(Math.random() * 888 + 111) + '',
      name,
      address
    })
    setShowModal(false)
  }

  return (
    <View>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} initialFocusRef={nameRef}>
        <Modal.Content maxWidth='400px'>
          <Modal.CloseButton />
          <Modal.Header>Crea una nueva ubicación</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Nombre</FormControl.Label>
              <Input ref={nameRef} onChangeText={handleNameChange} />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Address</FormControl.Label>
              <Input onChangeText={handleAddressChange} />
            </FormControl>
          </Modal.Body>
          {(name && address) && <Modal.Footer>
            <Button width='full' colorScheme='success' onPress={handleSubmit}>
              Guardar ubicación
            </Button>
          </Modal.Footer>}
        </Modal.Content>
      </Modal>
    </View>
  )
};
