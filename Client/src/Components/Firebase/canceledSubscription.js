import {db} from "./credenciales";
import { auth } from "./credenciales";
import { deleteDoc, doc} from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import getPaymentsByUID from "./getPaymentsByUID";


async function canceledSubscription(email, element) {
    const result = await signInWithEmailAndPassword( auth, email, "123456");

    let userID = result.user.uid;
    let array = await getPaymentsByUID(userID)

    if( element === "todo" ){
        if(array.length === 1){
            if(array[0].items.length > 1){
                array[0].items.forEach(async element => {
                    await deleteDoc(doc(db, `customers/${userID}/subscriptions`, `${element.subscription}`));
                })
            }
            else{
                await deleteDoc(doc(db, `customers/${userID}/subscriptions`, `${array[0].items[0].subscription}`));
            }
        }
        else{
            array.forEach(async element => {        
                await deleteDoc(doc(db, `customers/${userID}/subscriptions`, `${element.items[0].subscription}`));
            }
            )
        }
    }


    if((element === "Premium User 1") || (element === "Premium Company 1")){
        if(array.length === 1){
            if(array[0].items.length > 1){
                array[0].items.forEach(async element => {
                    await deleteDoc(doc(db, `customers/${userID}/subscriptions`, `${element.subscription}`));
                })
            }
            else{
                if ((array[0].items[0].price.product.name === "Premium User 1") || (array[0].items[0].price.product.name === "Premium Company 1")){ 
                    await deleteDoc(doc(db, `customers/${userID}/subscriptions`, `${array[0].items[0].subscription}`))
                }
            }
        }
        else{
            array.forEach(async element =>{
                if((element.items[0].price.product.name === "Premium User 1")||(element.items[0].price.product.name === "Premium Company 1")){
                    await deleteDoc(doc(db, `customers/${userID}/subscriptions`, `${element.items[0].subscription}`))
                }
            })
        }
    }

    if((element === "Premium User 2") || (element === "Premium Company 2")){
        if(array.length === 1){
            if(array[0].items.length > 1){
                array[0].items.forEach(async element => {
                    await deleteDoc(doc(db, `customers/${userID}/subscriptions`, `${element.subscription}`));
                })
            }
            else{
                if((array[0].items[0].price.product.name === "Premium User 2")||(array[0].items[0].price.product.name === "Premium Company 2")) {
                    await deleteDoc(doc(db, `customers/${userID}/subscriptions`, `${array[0].items[0].subscription}`));
                }
            }
        }
        else{
            array.forEach(async element =>{
                if((element.items[0].price.product.name === "Premium User 2")||(element.items[0].price.product.name === "Premium Company 2")){ 
                    await deleteDoc(doc(db, `customers/${userID}/subscriptions`, `${element.items[0].subscription}`))
                }
            }
            )
        }
    }

}
  
export default canceledSubscription;