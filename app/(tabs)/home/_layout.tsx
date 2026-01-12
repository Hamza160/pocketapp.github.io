import {Stack} from "expo-router";
import {COLORS} from "@/utils/Colors";

const HomeLayout = () => {
    return <Stack screenOptions={{
        contentStyle: {
            backgroundColor: COLORS.white,
        }
    }}>
        <Stack.Screen name="index" options={{
            title: "Home",
            headerLargeTitle:true,
            headerLargeTitleShadowVisible:false
        }}/>
    </Stack>
}

export default HomeLayout;
