import React, { useCallback, useState } from 'react'
import { Alert, Modal, Text, TouchableHighlight, View } from 'react-native'
import withMemo from '../../decorators/WithMemo'

const ModalScreen = () => {
  // state

  const [modalVisible, setModalVisible] = useState(false)

  // memo

  const openModal = useCallback(() => {
    setModalVisible(true)
  }, [])

  const closeModal = useCallback(() => {
    setModalVisible(false)
  }, [])

  const modalClosed = () => {
    Alert.alert('Modal has been closed.')
  }

  // render

  return (
    <View style={{ marginTop: 22 }}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={modalClosed}
      >
        <View style={{ marginTop: 22 }}>
          <View>
            <Text>Hello World!</Text>
            <TouchableHighlight onPress={closeModal}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <TouchableHighlight onPress={openModal}>
        <Text>Show Modal</Text>
      </TouchableHighlight>
    </View>
  )
}

export default withMemo()(ModalScreen)
