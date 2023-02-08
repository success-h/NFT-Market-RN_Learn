import { StatusBar, StatusBarStyle } from "react-native";
import { useIsFocused } from "@react-navigation/native";

interface SProps {
  background: string;
  Barstyle: StatusBarStyle | null | undefined;
  translucent: boolean;
}

const FocusedStatus = ({ background, Barstyle, translucent }: SProps) => {
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar
      barStyle={Barstyle}
      animated={true}
      backgroundColor={background}
      translucent={translucent}
    />
  ) : null;
};

export default FocusedStatus;
