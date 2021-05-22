# FAB.js
Simple way to create awesome looking Floating Action Buttons

## How to use
### Add the file to the `<HEAD>` of yout HTML file.
Upload the file to your server and add it.
```html
<head>
  ...
  <script type="text/javascript" src="FAB.js"></script>
</head>
```

### Create A Floating Action Button
the ```FAB``` class takes 5 parameters:
- `parent` : The parent element. The FAB will be inside of this element.
- `location` : The four possible options are `FAB.TOPLEFT`, `FAB.TOPRIGHT`, `FAB.BOTTOMLEFT`, `FAB.BOTTOMRIGHT`.
- `color` : The background color. For example: `'white'` or `'#2b36ff'`.
- `icon`: The src of the icon that will be displayed inside it.
- `acion` : The function that will run when the button is clicked.

A simple FAB:
```javascript
//add.svg is available

let fab = new FAB(document.body, FAB.BOTTOMRIGHT, '#2b36ff', "add.svg", function(){
	console.log('clicked the button!');
});
```
