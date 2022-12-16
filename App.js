import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const PlaceholderImage = require('./assets/images/fondo2.jpg');

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.imageContainer}>
     <ImageViewer placeholderImageSource={PlaceholderImage}/>
    </View>
    <View style={styles.footerConteiner}>
      <Button theme="primary" label="Francia"/>
      <Button theme="primary"  label="Argentina"/>
      <Button theme="primary"  label="Croacia"/>
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 20,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  footerConteiner: {
    flex: 2 / 3,
    alignItems: 'center',
  },


});
