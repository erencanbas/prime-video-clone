import { Text, Image, FlatList, StyleSheet, Platform, View, TouchableOpacity, ScrollView } from 'react-native';
import PrimeLogo from "../../assets/images/prime_video.png";
import AmazonLogo from "../../assets/images/amazon_logo.png";

import MovieWhell from "../../assets/movies/the_wheel_of_time.png";


import { MOVIESWATCHING } from "../utils/moviesWatching";
import { MOVIESCRIME } from "../utils/moviesCrimes";
import { MOVIESWATCH } from "../utils/moviesWatch";
import { MovieCard } from './components/Cards/';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.primeLogoImg} source={PrimeLogo} />
        <Image style={styles.amazonLogoImg} source={AmazonLogo} />
      </View>



      <View style={styles.category}>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Tv Shows</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Kids</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <TouchableOpacity style={styles.movieImageThumb}>
          <Image style={styles.thumbImage} source={MovieWhell} />
        </TouchableOpacity>

        <Text style={styles.movieText}>Continue Watching</Text>
        <FlatList data={MOVIESWATCHING}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MovieCard moviesURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.movieText}>Crime Movies</Text>
        <FlatList data={MOVIESCRIME}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MovieCard moviesURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.movieText}>Watch in your language</Text>
        <FlatList data={MOVIESWATCH}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MovieCard moviesURL={item.moviesURL} />}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232F3E",
    alignItems: "flex-start",
  },

  header: {
    width: "100%",
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },

  amazonLogoImg: {
    marginTop: -32,
    marginLeft: 30,
  },

  category: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    marginBottom: 15,
  },

  categoryText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFF",
  },

  scrollView: {
    width: "100%"
  },

  movieText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    padding: 15
  },

  movieImageThumb: {
    width: "100%",
    alignItems: "center",
  },

  thumbImage: {
    width: "100%",
  },

  contentList: {
    paddingLeft: 18,
    paddingRight: 30,

  }
});
