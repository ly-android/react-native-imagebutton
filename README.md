
# react-native-imagebutton

## Getting started

`$ npm install react-native-imagebutton --save`

### Mostly automatic installation

`$ react-native link react-native-imagebutton`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-imagebutton` and add `RNImagebutton.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNImagebutton.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.allen.imagebutton.RNImagebuttonPackage;` to the imports at the top of the file
  - Add `new RNImagebuttonPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-imagebutton'
  	project(':react-native-imagebutton').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-imagebutton/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-imagebutton')
  	```


## Usage
```javascript
import RNImagebutton from 'react-native-imagebutton';

// TODO: What to do with the module?
RNImagebutton;
```
  