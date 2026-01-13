import {Text, View, StyleSheet, Image, Platform, TouchableOpacity, TextInput} from "react-native";
import {Link, Redirect} from "expo-router";
import {KeyboardAvoidingView} from "react-native-keyboard-controller";
import {COLORS} from "@/utils/Colors";
import {AntDesign} from "@expo/vector-icons";

export default function Index() {
    // return <Redirect href={'/(tabs)/saves'}/>;

    const handleSocialSignIn = (provider: string) => {
    }
    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={400}
            style={styles.container}
        >
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Image
                        source={require('@/assets/images/pocket-logo.png')}
                        style={styles.logoIcon}
                    />
                </View>
                <Text style={styles.title}>Log In</Text>
            </View>
            <View style={styles.buttonSection}>
                <TouchableOpacity style={styles.button} onPress={() => handleSocialSignIn("oauth_apple")}>
                    <AntDesign name="apple" size={20} color={'#000'}/>
                    <Text style={styles.buttonText}>Continue with Apple</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleSocialSignIn("oauth_google")}>
                    <AntDesign name="google" size={20} color={'#000'}/>
                    <Text style={styles.buttonText}>Continue with Google</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.divider}>
                <View style={styles.line}/>
                <Text style={styles.orText}>OR</Text>
                <View style={styles.line}/>
            </View>

            <View style={styles.emailSection}>
                <TextInput
                    style={styles.emailInput}
                    placeholder="email"
                    placeholderTextColor={'#999'}
                    keyboardType={'email-address'}
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect={false}

                />
                <TouchableOpacity style={styles.nextButton}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
                <Link href={"/(tabs)/home"} asChild>
                    <TouchableOpacity style={{marginTop: 16, alignSelf: "center"}}>
                        <Text style={{color: COLORS.secondary, fontWeight: "bold"}}>Skip for now</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 30,
        paddingTop: 80,
    },
    header: {
        alignItems: "center",
        marginBottom: 40
    },
    logo: {
        width: 80,
        height: 80,
    },
    logoIcon: {
        width: 80,
        height: 80,
        marginBottom: 30
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: COLORS.textDark
    },
    buttonSection: {
        gap: 12
    },
    buttonText: {
        fontSize: 16,
    },
    button: {
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        borderColor: COLORS.border,
    },
    divider: {
        flexDirection: 'row',
        alignItems: "center",
        marginVertical: 30,
        gap: 8
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.border,
    },
    orText: {
        color: COLORS.textLight,
        fontSize: 14,
    },
    emailSection: {
        marginBottom: 30
    },
    emailInput: {
        borderWidth: 2,
        borderColor: COLORS.primary,
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginBottom: 16
    },
    nextButton: {
        backgroundColor: COLORS.secondary,
        borderRadius: 8,
        paddingVertical: 16,
        alignItems: "center",
    },
    nextButtonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "bold",
    }
})