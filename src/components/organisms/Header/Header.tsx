import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
  subtitle?: string;
  logo: string; // URL or local path to the logo image
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, logo }) => {
  return (
    <View style={styles.header}>
      <Image source={{ uri: logo }} style={styles.logo} />
      <View>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: '#f8f8f8',
    verticalAlign: 'top'
  },
  logo: {
    width: 300,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default Header;