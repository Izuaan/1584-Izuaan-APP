import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput, TouchableOpacity, Button,TouchableHighlight,Alert,Div} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {
  state = {
    text:'',
    todo:[],
    isExpanded: false
  };

  addToDo = () => {
    var newToDo = this.state.text;
    var arrayyy = this.state.todo;
    arrayyy.push(newToDo);
    this.setState({todo:arrayyy, text:""});
  }

  deleteToDo = (t) => {
    var arrayyy = this.state.todo;
    var pos = arrayyy.indexOf(t);
    arrayyy.splice(pos,1);
    this.setState({todo: arrayyy});
  }

  
  clearAll(){
    this.setState({
      todo: []
    })
  }
 
  
  renderToDo = () => {
    return this.state.todo.map(t=> {
      return (
        <View style={{flexDirection:'row', padding:5}}>
        <TouchableOpacity key={t} 
        onPress={() => {this.deleteToDo(t)}}
        style={{
         width:6,
        height:6,
        borderRadius:6, 
        borderWidth:6,
        borderColor:'#006876',
        margin: 4,
        marginTop:8,
        
          }}>
        </TouchableOpacity>
        <Text
        style={styles.todotext}
        onPress={() => {this.deleteToDo(t)}}
        > {t} </Text>
        </View>

      )
    })
  }

  render() {
    
    return ( 
        <LinearGradient colors={['#B9F7FF', '#0000']} style={{flex:1}}>
        <StatusBar barStyle="light-content" />
        <View>
          <TextInput 
          style={styles.input}
          onSubmitEditing={this.addToDo}
          placeholder= "Add a task"
          onChangeText={(text)=> this.setState({text})}
          value={this.state.text}
          placeholderTextColor={'#59ADF9'}
          multiline={true}
          autoCapitalize="sentences"
          underlineColorAndroid="transparent"
          spellCheck={true}
          selectionColor={"blue"}
          maxLength={70}
          returnKeyType="done"
          autoCorrect={true}
          blurOnSubmit={true}
        />
        </View>
        <View styles={styles.tasks}>
        {this.renderToDo()}
        </View>
        <View style={styles.button1}>
        <Button 
          title= "Delete all the items"
          onPress={(e) => this.clearAll()}
          />
          </View>
        
        </LinearGradient>
    );
  }
}

const styles = {
  input:
  {
    marginTop:30,
    paddingTop:50,
    paddingRight:15,
    paddingLeft:15,
    fontSize:20,
    color:"#007AD7",
    fontWeight: '500',
    paddingBottom: 10
  },
  button1: {
    position:'absolute',
    bottom:30,
    right:20,
    zindex:11,
    justifyContent:'center',
    elevation:8,
    paddingRight:15
  },

  todotext: {
    color:'#004E88',
    alignItems: "center",
    fontSize:16,
    fontWeight:500
  }

}
