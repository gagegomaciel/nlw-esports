import { FlatList, Image, View } from "react-native";
import { styles } from "./styles";
import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";

import { GAMES } from '../../utils/games'

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList 
        data={GAMES}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator
        contentContainerStyle={styles.contentList}
        renderItem={({item, index}) => (
          <GameCard data={item} />
        )}
      />

    </View>
  );
};
