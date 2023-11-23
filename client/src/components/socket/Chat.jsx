import {
  ArrowLeftCircleIcon,
  EllipsisHorizontalCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import { Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import socket from "./socket";
import { useNavigate, Link } from "react-router-dom";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      from: "test",
      message: "contoh yaa",
    },
  ]);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("koneksi dengan server", socket);

    socket.on("hello", (payload) => {
      console.log(payload);
    });

    socket.on("new-message", (payload) => {
      // nambahin ke list messages
      setMessages([...messages, payload]);
    });
  }, []);

  const handlerDisconnect = async () => {
    console.log("ini yaa");
    socket.disconnect();
    navigate("/");
  };

  const sendMessage = () => {
    socket.emit("sendMessage", { from: user, message: message });
    setMessages([
      ...messages,
      {
        from: user,
        message: message,
      },
    ]);
    setMessage("");
  };

  return (
    <>
      <div className="fixed bg-gray-500/20 backdrop-blur-[2px] z-10 h-screen w-screen items-center">
        <div className="absolute bg-gradient-to-br from-bk-200/90 to-gray-900/90 w-[450px] right-0 h-[100dvh] z-20 shadow-xl text-white p-10 backdrop-blur-sm ">
          <div className="flex flex-col mb-4">
            {/* Header Chat */}
            <div className="flex flex-row relative space-x-3 justify-start items-center h-16">
              <button onClick={handlerDisconnect}>
                <ArrowLeftCircleIcon className="w-8 h-8 text-gray-600 hover:text-white transition-all" />
              </button>
              <div className="flex bg-white w-12 h-12 rounded-full">
                <img src="" alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold">Group Project Chat</h1>
                <p className="text-xs">2 Members Online</p>
              </div>
              <div className="absolute right-0">
                <EllipsisHorizontalCircleIcon className="text-gray-600 w-8 h-18 hover:text-white transition-all" />
              </div>
            </div>
          </div>

          {/* Chat Block Text */}
          <div className="flex mb-4">
            <div className="flex flex-col bg-gradient-to-b from-gray-900 to-bk-200 backdrop-blur-md h-[70dvh] w-full rounded-xl space-y-4 justify-end p-6">
              {/* Chat Block Row */}
              <div className="flex w-full flex-col items-end space-y-1">
                {messages.map(({ from, message }) => {
                  return (
                    <>
                      <div className="flex max-w-[250px] bg-bk-300 rounded-lg p-4">
                        {/* <p>Sounds Good let's jump to the project next month</p> */}
                        <p>{message}</p>
                      </div>
                      <p className="text-sm">{from}</p>
                    </>
                  );
                })}
              </div>

              {/*  */}
              <div className="flex w-full flex-col items-start space-y-1">
                <div className="flex max-w-[250px] bg-gray-800 rounded-lg p-4">
                  <p>Okay will be there soon</p>
                </div>
                <p className="text-sm">Sabhirah</p>
              </div>
            </div>
          </div>

          {/* Chat Send Text Area */}
          <div className="flex w-full h-[50px] rounded-xl relative items-center">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg p-4 bg-white/10"
            />
            <button onClick={sendMessage} className="absolute right-3 ">
              <PaperAirplaneIcon className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
