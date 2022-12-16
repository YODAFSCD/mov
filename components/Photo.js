import { useState } from 'react';
import { FlatList, Image, Platform, Pressable} from 'react-native';

export default function Photo({ onSelect, onCloseModal }) {
    const [francia] = useState([
      require('../assets//images/emoji1.jpeg'),
      require('../assets/images/emoji2.png'),
      require('../assets/images/emoji3.jpg'),
      require('../assets/images/emoji4.png'),
      require('../assets/images/emoji5.jpg'),
      require('../assets/images/emoji6.jpg'),
    ]);
    return (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
          data={francia}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item, index }) => {
            return (
              <Pressable
                onPress={() => {
                  onSelect(item);
                  onCloseModal();
                }}>
                <Image source={item} key={index} style={styles.image} />
              </Pressable>
            );
          }}
        />
      );
    }