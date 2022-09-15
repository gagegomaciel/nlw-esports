import {
  TouchableOpacity,
  TouchableOpacityProps,
  ImageBackground,
  ImageSourcePropType,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { THEME } from "../../theme";

export interface IGameCardParams {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

interface IGameCardProps extends TouchableOpacityProps {
  data: IGameCardParams;
}

export const GameCard: React.FC<IGameCardProps> = ({ data, ...rest }) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground source={data.cover} style={styles.cover}>
        <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.ads}>{data.ads}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};
