import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <StatusBar backgroundColor="#fff" />
      <Text className="text-3xl font-bold">Welcome</Text>
    </SafeAreaView>
  );
}
