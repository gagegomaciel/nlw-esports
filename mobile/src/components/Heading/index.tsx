import { View, Text, ViewProps } from 'react-native'
import { styles } from './styles'

interface IHeadingProps extends ViewProps {
  title: string
  subtitle: string
}

export const Heading: React.FC<IHeadingProps> = ({ title, subtitle, ...rest }) => {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}