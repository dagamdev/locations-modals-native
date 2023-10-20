import { View, Modal, VStack, Text, Button } from 'native-base'
import { LOCATIONS } from '../utils/data'

export default function LocationsModal ({ showModal, setShowModal, setShowForm }) {
  return (
    <View>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size='lg'>
        <Modal.Content maxWidth='350'>
          <Modal.CloseButton />
          <Modal.Header>Ubicaciones</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              {LOCATIONS.map(l => <VStack key={l.id}>
                <Text fontWeight='medium' fontSize='md'>{l.name}</Text>
                <Text color='blueGray.400'>{l.address}</Text>
              </VStack>)}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex='1' onPress={() => {
                console.log('Add location')
                setShowModal(false)
                setShowForm(true)
              }}
            >
              Agregar ubicacíon
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  )
}
