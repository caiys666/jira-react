import { Button, Card } from "antd";
import { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";

export const UnauthenticatedApp = () => {
  const [isregister, setIsRegister] = useState(false);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        {isregister ? <RegisterScreen /> : <LoginScreen />}
        <Button onClick={() => setIsRegister(!isregister)}>
          切换到{isregister ? "登录" : "注册"}
        </Button>
      </Card>
    </div>
  );
};
