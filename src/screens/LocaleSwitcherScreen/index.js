import React, { useContext } from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import withMemo from '../../decorators/WithMemo'
import { GlobalContext } from '../../contexts'
import LocaleSwitcherButton from '../../components/LocaleSwitcherButton'
import styles from './styles'

const LocaleSwitcherScreen = () => {
  const { globalContext } = useContext(GlobalContext)

  // render

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{globalContext.config.labels.localeSwitcherTitle}</Text>
      <View style={styles.localesContainer}>
        <FlatList
          data={globalContext.locales}
          renderItem={({ item }) => <LocaleSwitcherButton locale={item} />}
          keyExtractor={item => item}
        />
      </View>
    </SafeAreaView>
  )
}

export default withMemo()(LocaleSwitcherScreen)
