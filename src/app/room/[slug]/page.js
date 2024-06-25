'use client'
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useEffect, useRef } from "react";

const Room = ({ params }) => {
  const appID = process.env.AppID;
  const serverSecret = process.env.serverSecret;
  const ref = useRef(null);

  const meeting = async () => {
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, params.slug, Date.now().toString(), 'Shani');
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: ref.current,
      sharedLinks: [
        {
          name: 'Copy Video Link',
          url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + params.slug,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };

  // call the meeting function
  useEffect(() => {
    meeting();
  }, []);

  return (
    <div ref={ref}>Room</div>
  )
}

export default Room