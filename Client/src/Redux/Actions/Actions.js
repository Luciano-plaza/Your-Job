import { db } from "../../Components/Firebase/credenciales.js";
import axios from "axios";
import {collection, getDocs, query, where} from "firebase/firestore";

export const GET_ALL_EMPLOYEES = "GET_ALL_EMPLOYEES";
export const GET_USER_INFO = "GET_USER_INFO";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export function getAllEmployees() {
  return { type: GET_ALL_EMPLOYEES, payload: ["empleado1", "empleado2"] };
}

export async function getUserInfo(userName) {
  try {
    const userData = await axios.get(`http://localhost:3001/users/${userName}`);
    return {
      type: GET_USER_INFO,
      payload: userData.data,
    };
  } catch (e) {
    console.error("Error: " + e.message);
  }
}

export async function getAllProducts() {
  const collectionRef = collection(db, "products");
  const filtradoActivos = query(collectionRef, where( "active", "==", true));
  const snaps = await getDocs(filtradoActivos);
  const products = []
  for await(const snap of snaps.docs){
    const producto = snap.data();
    producto.id = snap.id;
    const priceSnaps = await getDocs(collection(snap.ref, "prices"));
    producto.prices = priceSnaps.docs[0].data();
    products.push(producto);
  }
  return { type: GET_ALL_PRODUCTS, payload: products };
}
