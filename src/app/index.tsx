import SearchBar from "@/components/SearchBar";
import { homeStyles } from "@/styles/home.styles";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {

  return (
    <SafeAreaView style={homeStyles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <ScrollView style={homeStyles.container}>
        <View style={homeStyles.header}>
          <Text style={homeStyles.title}>Dev Tempo 🌤️</Text>
          <Text style={homeStyles.subtitle}>Busque o clima em qualquer lugar!</Text>
        </View>

        <SearchBar/>
        
        <View style={homeStyles.emptyContainer}>
          <Text style={homeStyles.emptyText}>🌍 Digite o nome de uma cidade para começar</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}