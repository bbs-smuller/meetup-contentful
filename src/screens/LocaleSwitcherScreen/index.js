import React, { useContext } from 'react'
import { FlatList, SafeAreaView, Text } from 'react-native'
import withMemo from '../../decorators/WithMemo'
import { GlobalContext } from '../../contexts'
import LocaleSwitcherButton from '../../components/LocaleSwitcherButton'
import styles from './styles'

const LocaleSwitcherScreen = () => {
  const { globalContext } = useContext(GlobalContext)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{globalContext.config.labels.localeSwitcherTitle}</Text>
      <FlatList
        data={globalContext.locales}
        renderItem={({ item }) => <LocaleSwitcherButton locale={item} />}
        keyExtractor={item => item}
      />
    </SafeAreaView>
  )
}

export default withMemo()(LocaleSwitcherScreen)
