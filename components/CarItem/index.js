import React from 'react';
import styles from './styles'
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';

const CarItem = (props) => {

    const { name, tagline, taglineCTA, image} = props.car;

    return ( 
        
    // View is like Div in web
    <View style={styles.carContainer}>

      <ImageBackground 
        source={image} 
        style={styles.image} 
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{tagline}
        {' '}
          <Text style={styles.subTitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton 
          type="primary" 
          content={'Custom Order'} 
          onPress={() => { 
            console.warn('Custom Order Pressed');
            }
          } 
        />
        <StyledButton 
          type="secondary" 
          content={'Existing Inventory'} 
          onPress={() => { 
            console.warn('EI Pressed');
            }
          } 
        />
      </View>
    </View>

     );
};
 
export default CarItem;