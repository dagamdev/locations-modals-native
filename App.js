import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import { NativeBaseProvider, Text, Pressable, Box } from 'native-base'
import LocationsModal from './components/locations-modal'
import FormModal from './components/form-modal'

export default function App () {
  const [showLocations, setShowLocations] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const hadnleClickLocations = () => {
    setShowLocations(true)
  }

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <StatusBar style='auto' />

        <Box padding='4'>
          <Pressable onPress={hadnleClickLocations} color='red.500'>
            <Text color='red.500' fontSize='xl'>Ubicaciones</Text>
          </Pressable>
          <LocationsModal
            showModal={showLocations} setShowModal={setShowLocations}
            setShowForm={setShowForm}
          />
          <FormModal showModal={showForm} setShowModal={setShowForm} />
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}
