import {Stack} from "expo-router";
import {COLORS} from "@/utils/Colors";

const SaveLayout = () => {
    return <Stack screenOptions={{
        contentStyle: {
            backgroundColor: COLORS.white,
        }
    }}>
        <Stack.Screen name="index" options={{
            title: "Saves",
            headerLargeTitle: true,
            headerLargeTitleShadowVisible: false,
        }}/>
    </Stack>
}

export default SaveLayout;
