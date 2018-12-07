
# react-native-imagebutton

## Getting started

`$ npm install react-native-imagebutton --save`

## Usage
```javascript
import {Imagebutton} from 'react-native-imagebutton';
```
#### props
-   width: PropTypes.number.isRequired, //the component size
-   height: PropTypes.number.isRequired,
-   text: PropTypes.string.isRequired, //show text on the componet
-   activeOpacity: PropTypes.number,  //default 0.3 
-   fontSize: PropTypes.number,
-   textColor: PropTypes.string,
-   onPress: PropTypes.func,
-   paddingTop: PropTypes.number, //text marging top
-   paddingLeft: PropTypes.number, //text marging left
-   paddingRight: PropTypes.number, //text marging right
-   paddingBottom: PropTypes.number,//text marging bottom
-   textAlignVertical: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),//text vertical position,default center
-   textAlignHorizontal: PropTypes.oneOf(['flex-start', 'center', 'flex-end']) //text horizontal position,default center

#### use the ImageButton Component
```javascript

_share=()=>{
    
};

<ImageButton style={styles.btn}
        width={250}
        height={64}
        fontSize={20}
        textColor="#ffe490"
        paddingTop={4}
        textAlignHorizontal="flex-start"
        onPress={this._share.bind(this)}
        source={require('../images/join_reward_normal.png')}
        text="share"
      />
```


