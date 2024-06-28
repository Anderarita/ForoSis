import { StyleSheet } from "react-native";

export const theme = {
    colors: {
      primary: '#6200EE',
      secondary: '#03DAC5',
      background: '#fdfafa',
      text: '#ffffff',
    },
    spacing: {
      small: 8,
      medium: 16,
      large: 24,
    },
    fonts: {
      large: 32,
      medium: 24,
      small: 16,
    },
  };

export const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingTop: theme.spacing.large,
      },
      fixedHeader: {
        alignItems: 'center',
        marginBottom: theme.spacing.large,
      },
      time: {
        fontSize: theme.fonts.large,
        marginBottom: theme.spacing.large,
        textAlign: 'center',
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginBottom: theme.spacing.medium,
        borderRadius: 20,
      },
      table: {
        flex: 1,
        width: '80%',
        marginTop: theme.spacing.large,
        alignSelf: 'center',
      },
      tableHeader: {
        fontSize: theme.fonts.medium,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: theme.spacing.small,
      },
      tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.text,
        paddingVertical: theme.spacing.small,
      },
      tableCell: {
        fontSize: theme.fonts.small,
        textAlign: 'center',
      },
  });


  