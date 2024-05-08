import { useEffect } from "react";

function LoginSuccessNotification({ onClose }) {
  useEffect(() => {
    console.log("Notification :visable");
    const timer = setTimeout(() => {
      console.log("notification closing ");
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
      You are logged in!
    </div>
  );
}

export default LoginSuccessNotification;
