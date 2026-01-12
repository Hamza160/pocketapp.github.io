import {Icon, Label, NativeTabs} from "expo-router/unstable-native-tabs";
import {Platform} from "react-native";
import {COLORS} from "@/utils/Colors";

export default function RootLayout() {
    return (
        <NativeTabs blurEffect="systemChromeMaterial" tintColor={COLORS.textDark}>
            <NativeTabs.Trigger name="home">
                <Label>Home</Label>
                <Icon
                    sf={{default: "house", selected: "house.fill"}}
                    drawable={Platform.OS === "android" ? "ic_menu_home" : undefined} // Use built-in Android icon
                />
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="saves">
                <Label>Saves</Label>
                <Icon
                    sf={{default: "heart", selected: "heart.fill"}}
                    drawable={Platform.OS === "android" ? "ic_menu_preferences" : undefined} // Use built-in Android icon
                />
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="settings">
                <Label>Settings</Label>
                <Icon
                    sf={{default: "gearshape", selected: "gearshape.fill"}}
                    drawable={Platform.OS === "android" ? "ic_menu_preferences" : undefined} // Use built-in Android icon
                />
            </NativeTabs.Trigger>
        </NativeTabs>
    );
}