import styles from "./Message.module.css";
import axios from "axios";
import { format } from "timeago.js";
import { useState, useEffect } from "react";

export default function Message({ message, own, friend }) {
  const [friends, setFriend] = useState(null);
  useEffect(() => {
    if (friend !== null) {
      const getFriend = async () => {
        try {
          if(Number(friend)){
            const res = await axios.get(`/users/id/` + (friend));
            setFriend(res.data);
          } else {
            const res = await axios.get(`/company/` + (friend))
            setFriend(res.data);
          }
        } catch (error) {
          console.error(error);
        }
      };
      getFriend();
    }
  }, [friend]);
  return (
    <div className={own ? styles.messageOwn : styles.message}>
      <div className={styles.messageTop}>
        <img
          className={styles.messageImg}
          src={
            friends?.image
              ? friends?.image
              : "https://vinasderoaabogados.es/wp-content/uploads/2015/11/usuario-sin-foto.gif"
          }
          alt="prueba foto"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://vinasderoaabogados.es/wp-content/uploads/2015/11/usuario-sin-foto.gif";
          }}
        />
        <p className={styles.messageText}>{message.texto}</p>
      </div>
      <div className={styles.messageBottom}>{format(message.hour)}</div>
    </div>
  );
}
