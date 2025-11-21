import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Text,
  ScrollView,
  View,
  FlatList,
  Image,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import { styles } from './Styles';
import { DATA } from './Products';

export default function App() {
  const [likedItems, setLikedItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const removeFromCart = (indexToRemove) => {
    const newCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(newCart);
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      let priceClean = item.price.replace('$', '').replace(',', '.');
      total += parseFloat(priceClean);
    });
    return total.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>Boutique</Text>
        <Pressable onPress={() => setModalVisible(true)}>
            <Text style={styles.cart}>
            Panier: {cartItems.length} {"\u{1F6D2}"}
            </Text>
        </Pressable>
      </View>
      
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.image}
              />
              <Pressable
                onPress={() => {
                  if (likedItems.includes(item.id)) {
                    setLikedItems(
                      likedItems.filter((itemId) => itemId !== item.id)
                    );
                  } else {
                    setLikedItems([...likedItems, item.id]);
                  }
                }}
                style={styles.like}
              >
                <Text style={{ fontSize: 25 }}>
                  {likedItems.includes(item.id) ? "\u2764\uFE0F" : "\u{1F90D}"}
                </Text>
              </Pressable>

              <View style={styles.name_priceContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
              <Text style={styles.description}>{item.description}</Text>
              <Pressable
                style={styles.buttonContainer}
                onPress={() => {
                  setCartItems([...cartItems, item]);
                  Alert.alert("Succès", item.name + " ajouté !");
                }}
              >
                <Text style={styles.button}>Acheter maintenant</Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 20, paddingBottom: 50 }}
          showsVerticalScrollIndicator={false}
        />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Mon Panier {"\u{1F6D2}"}</Text>

            <FlatList 
              data={cartItems}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <View style={styles.cartItem}>
                  <View>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.grayText}>{item.price}</Text>
                  </View>
                  <Pressable onPress={() => removeFromCart(index)}>
                    <Text style={{ fontSize: 20 }}>{"\u{1F5D1}\uFE0F"}</Text>
                  </Pressable>
                </View>
              )}
            />

            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total: {calculateTotal()} $</Text>
              <Pressable
                style={[styles.buttonContainer, styles.closeButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.button}>Fermer</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    
      <StatusBar style="auto" />
    </View>
  );
}
