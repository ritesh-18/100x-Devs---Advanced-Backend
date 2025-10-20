import { useEffect, useState } from "react";
import "./App.css";

function useSocket() {
  const [socket, setSocket] = useState<any>(null);
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3000");
    socket.onopen = () => {
      console.log("Socket conencted");
      setSocket(socket);
    };
      socket.onerror = (err) => {
      console.error(" WebSocket error:", err);
    };
       socket.onclose = () => {
      console.log("Socket disconnected");
    };

    return () => {
      socket?.close();
    };
  }, []);
  return socket;
}

function App() {
  // const [socket , setsocket]=useState<null | WebSocket>(null);
  const [messageData, setMsgData] = useState("");
  // useEffect(()=>{
  //  const socket=new WebSocket('ws://localhost:3000')
  //  socket.onopen=()=>{
  //   console.log("connected")
  //      setsocket(socket);

  //  }
  //  setCount(count+1)
  //  console.log("count is " , count)
  //  socket.onmessage=(message)=>{
  //   console.log("Recived Message " , message.data)
  //   setMsgData(message.data)
  //  }
  //  return ()=>{
  //   socket.close();
  //  }

  // }, [])
  //Custom hooks (useSocket)

  const socket = useSocket();

 
  useEffect(()=>{
   if(!socket)return;
   socket.onmessage=(message:any)=>{
    setMsgData(message)
   }
      
  },[socket])
   if (!socket) {
    return <div>Connecting to socket service...</div>;
  }



  return (
    <>
      <h1>Hello buddy</h1>
      <p>message value is :{messageData}<br/></p>
    </>
  );
}

export default App;
