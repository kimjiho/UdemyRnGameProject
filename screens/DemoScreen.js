import { StyleSheet, Text, View } from "react-native";

function DemoScreen() {
    return <View style={styles.rootContainer}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>휴넷 CEO</Text>
        </View>

        <View style={styles.contentContainer}>
            <View style={styles.borderBox}>
                {/* 미래를 준비하는 데일리 인사이트
                휴넷 CEO 멤버쉽 */}

                <Text style={styles.textStyle}>미래를 준비하는 데일리 인사이트</Text>
                <Text style={styles.textStyle}>휴넷 CEO 멤버쉽</Text>
            </View>
        </View>
    </View>
};

export default DemoScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,        
    },

    contentContainer: {
        padding: 12,
    },

    titleContainer: {
        padding: 16,
        backgroundColor: '#efefef',

        borderBottomColor: 'gray',
        borderBottomWidth: 2,        
        elevation: 4,
    },

    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000011'
    },

    borderBox: {
        flexDirection: 'column',

        padding: 16,

        backgroundColor: '#ffffff',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 24,
    },

    textStyle: {
        fontSize: 18,        
        color: '#000000'
    },


});