import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import Main from './Main';
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
