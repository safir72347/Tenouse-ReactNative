import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Button, Text } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');
const mainController = require('../controllers/main');
import Toast from 'react-native-simple-toast';

// class Home extends React.Component {
function Home ({navigation}) {
  // renderArticles = () => {
  //   return (
    
      

  //     <ScrollView
  //       showsVerticalScrollIndicator={false}
  //       contentContainerStyle={styles.articles}>
        
  //       <Block flex>
  //       {/* <Button><Text>Logout</Text></Button> */}
  //         <Card item={articles[0]} horizontal  />
  //         <Block flex row>
  //           <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
  //           <Card item={articles[2]} />
  //         </Block>
  //         <Card item={articles[3]} horizontal />
  //         <Card item={articles[4]} full />
  //       </Block>
  //     </ScrollView>
  //   )
  // }

  const logout = async () => {
    await mainController.unsetToken();
    Toast.show('Log Out Successful');
    navigation.navigate('Login')
  }

    return (
      <Block flex center style={styles.home}>
        {/* {this.renderArticles()} */}

          <Button title = 'Logout'
          onPress= {() => { logout() }}><Text>Logout</Text></Button>
      </Block>
    );
  
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
