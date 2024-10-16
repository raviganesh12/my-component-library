import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface FooterProps {
  logo: string; // URL or local path to the logo image
  footerText: string;
}

const Footer: React.FC<FooterProps> = ({ logo, footerText }) => {
  return (
    <View style={styles.footer}>
      <Image source={{ uri: logo }} style={styles.logo} />
      <Text style={styles.footerText}>{footerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: '#f8f8f8',
    verticalAlign: 'bottom'
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  footerText: {
    fontSize: 16,
    color: '#666',
  },
});

export default Footer;