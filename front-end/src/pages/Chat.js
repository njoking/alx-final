/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";

const Chat = () => {
  useEffect(() => {
    (async () => {
      // Initialize Dead Simple Chat SDK
      const sdk = new window.DSChatSDK(
        "6pZqI74l4",
        "chat-frame",
        "pub_6b417337455f63414c666f365230666a6c68784b6b6253664250374e57635657742d424c42703662736c343246586846"
      );
      await sdk.connect();

      sdk.on("message", (message) => {
        console.log("New Message Arrived", message);
      });

      sdk.join({
        uniqueUserIdentifier: "10001",
      });

      sdk.sendMessage("Hello World");
    })();
  }, []);

  return (
    <div>
      <iframe
        src="https://deadsimplechat.com/6pZqI74l4"
        width="100%"
        height="600px"
      ></iframe>
    </div>
  );
};

export default Chat;
