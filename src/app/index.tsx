import SearchBar from "@/components/SearchBar";
import { useLocation } from "@/hooks/useLocation";
import { homeStyles } from "@/styles/home.styles";
import { useRouter } from "expo-router";
import { ActivityIndicator, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const { getCurrentLocation, loading } = useLocation()
  const router = useRouter()

  const handleSearch = (cityName: string) => {
    router.push({
      pathname: "/details",
      params: { cityName }
    })
  }

  const handleLocation = async () => {
    console.log(await getCurrentLocation())
  }

  return (
    <SafeAreaView style={homeStyles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <ScrollView style={homeStyles.container}>
        <View style={homeStyles.header}>
          <Text style={homeStyles.title}>Dev Tempo 🌤️</Text>
          <Text style={homeStyles.subtitle}>Busque o clima em qualquer lugar!</Text>
        </View>

        <SearchBar onSearch={handleSearch} />

        <TouchableOpacity onPress={handleLocation} style={homeStyles.gpsButton}>
          {loading ? <ActivityIndicator size={"large"} /> : <Text style={homeStyles.gpsText}>Usar Minha Localização</Text>}
        </TouchableOpacity>

        <View style={homeStyles.emptyContainer}>
          <Text style={homeStyles.emptyText}>🌍 Digite o nome de uma cidade para começar</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}