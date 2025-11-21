import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#beb8b8ff",
    alignItems: "center",
    justifyContent: "center",
  },
  head: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cart: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  card: {
    borderRadius: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    padding: 10,
    marginBottom: 50,
    backgroundColor: "white",
  },
  image: {
    width: 300,
    height: 240,
    overflow: "hidden",
    resizeMode: "cover",
    borderRadius: 15,
    marginBottom: 15,
  },
  name_priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
    color: "red",
  },
  description: {
    maxWidth: 280,
    marginBottom: 12,
    fontSize: 14,
    color: "gray",
  },
  buttonContainer: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    margin: 13,
  },
  button: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  like: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 5,
  },
  
  modalOverlay: {
    flex: 1, 
    justifyContent: "flex-end", 
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalContent: {
    backgroundColor: "white", 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    padding: 20, 
    height: '70%'
  },
  modalTitle: {
    fontSize: 22, 
    fontWeight: 'bold', 
    textAlign:'center', 
    marginBottom: 20
  },
  cartItem: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 15, 
    borderBottomWidth: 1, 
    borderColor: '#eee', 
    paddingBottom: 10
  },
  grayText: {
    color: 'gray'
  },
  totalContainer: {
    marginTop: 10
  },
  totalText: {
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'right', 
    marginBottom: 10
  },
  closeButton: {
    backgroundColor: 'red', 
    marginTop: 10
  }
});