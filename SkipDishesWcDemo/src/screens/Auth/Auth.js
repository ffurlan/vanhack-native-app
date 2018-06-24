import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Image,
  Animated,
  TouchableOpacity
} from "react-native";

import { connect } from 'react-redux';

import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
import backgroundImage from "../../assets/bg-screen.jpg";
import menuLogo from "../../assets/logo.png";
import { tryAuth, authAutoSignIn } from '../../store/actions/index';


import Icon from 'react-native-vector-icons/Ionicons';

const window = Dimensions.get('window');
const IMAGE_HEIGHT = window.width / 2;
const IMAGE_HEIGHT_SMALL = window.width /7;


class AuthScreen extends Component {
  state = {
    email: ''
  };

  static navigatorStyle = {
    navBarHidden: true
  };

  constructor(props) {
    super(props);
      this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  componentDidMount(){
    this.props.onAutoSignIn();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };

  authHandler = () => {
    const authData = {
        email: this.state.email,
        token: "justAnSampleToken"
    };
    this.props.onTryAuth(authData);
  };

  checkValidEmail = () => {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
      this.state.email
    );
  }

  render() {
    let submitButton = (
        <ButtonWithBackground
        style={styles.register}
        color="#29aaf4"
        onPress={this.authHandler}
        disabled={
          !this.checkValidEmail()
        }
      >
        Access
      </ButtonWithBackground>
    );

    if (this.props.authData.token){
      submitButton = (
        <ButtonWithBackground
        style={styles.register}
        color="#29aaf4"
        onPress={this.checkApprovalHandler}
        disabled={false}
      >
        Continue
      </ButtonWithBackground>
    );
    
    }

    if (this.props.isLoading){
      submitButton = <ActivityIndicator />;
    }

    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
            <Animated.Image source={menuLogo} style={[styles.logo, { height: 120, width: 120, borderRadius: 30 }]} />
              <View style={styles.searchSection}>
                  <Icon style={styles.searchIcon} name="ios-mail" color="black"  size={30} />
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    value={this.state.email}
                    onChangeText={val => this.setState({ email: val })}
                    placeholder="Enter your e-mail address"
                    style={styles.input}
                  />
              </View>
           {submitButton}
        </KeyboardAvoidingView> 
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20
  },
  searchIcon: {
      padding: 10,
  },
  input: {
      backgroundColor: '#fff',
      color: '#424242',
      borderRadius: 10,
      width: "80%",
  },
  logo: {
    height: IMAGE_HEIGHT,
    width: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 20,
    padding:10,
    marginTop:20,
    borderRadius: 20
  },
  register:{
    width:"50%",
    height:50,
    backgroundColor: '#ffae',
    borderRadius: 10,
    marginTop: 20
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 5,
    marginRight: 5
  },
});

const mapStateToProps = state => {
  return {
    authData: state.auth.data
  }
}

const mapDispatchToProps = dispatch => {
    return { 
        onTryAuth: authData => dispatch(tryAuth(authData)),
        onAutoSignIn: () => dispatch(authAutoSignIn())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
