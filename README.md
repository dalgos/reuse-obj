# reuse-obj

It's object managing tool. You can update properties of base object, also get clone object too.


## Usage

```javascript
import reuseObj from 'reuseObj';

const localState = reuseObj({ count: 1 }); // { count: 1 }
const localStateClone = localState.clone(); // { count: 1 }
const updatedLocalState = localState.update({ count: 2, name: 'reuseObj' }); // { count: 2 }

```

## API

### .clone();

You can get cloned object from base object.

```javascript
import reuseObj from 'reuseObj';

const localState = reuseObj({ count: 1 }); // { count: 1 }
const localStateClone = localState.clone(); // { count: 1 }

```


### .update(otherObject);

You can only update the properties that base object has.

```javascript
import reuseObj from 'reuseObj';

...
componentWillReceiveProps(nextProps) {
  this.setState(prevState => reuseObj(prevState).update(nextProps));
}
...

```
