# ROM (Rewritable Object Model)

It's object managing tool. You can update properties of base object, also get clone object too.


## Usage

```javascript
import ROM from 'ROM';

const localState = ROM({ count: 1 }); // { count: 1 }
const localStateClone = localState.clone(); // { count: 1 }
const updatedLocalState = localState.update({ count: 2, name: 'ROM' }); // { count: 2 }

```

## API

### .clone();

You can get cloned object from base object.

```javascript
import ROM from 'ROM';

const localState = ROM({ count: 1 }); // { count: 1 }
const localStateClone = localState.clone(); // { count: 1 }

```


### .update(otherObject);

You can only update the properties that base object has.

```javascript
import ROM from 'ROM';

...
componentWillReceiveProps(nextProps) {
  this.setState(prevState => ROM(prevState).update(nextProps));
}
...

```
