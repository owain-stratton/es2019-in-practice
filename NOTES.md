# Lesson Notes

## Try/Catch

Optional binding of the `error` in `try/catch` statements:

#### Example 

- *Before*

  ```javascript
  try {
    // some code
  } catch(error) {
    // you must have the error in the parameter of the catch statement
    // regardless of whether you use it 
  }
  ```

- *After*

```javascript
 try {
    // some code
  } catch {
    // notice the ommitted error binding
  }
```

## Stable Sort

Stable sorting of arrays. This maintains the same order of the input array if the result of the sort comparison means there is no difference to sort upon. 

#### Example
```javascript
const data = [
  { "student": "Alicia ", "id": 1, "teachers": "jim , bob", "scores": [97, 93, [93, 97]] },
  { "student": "Bobby  ", "id": 2, "teachers": "alice , bob", "scores": [99, 91, [98, 92]] },
  { "student": "Carlos ", "id": 3, "teachers": "tiff , lexy", "scores": [97, 90, [97, 96]] },
]

const mapped = this.records.map(record => transformRecord(record))
mapped.sort((a, b) => a.average - b.average)

// Notice that as the average is the same the order of the input array is maintained
console.log(mapped)
/*
[
  { "student": "Alicia ", "id": 1, "teachers": "jim , bob", "scores": [97, 93, [93, 97]] },
  { "student": "Bobby  ", "id": 2, "teachers": "alice , bob", "scores": [99, 91, [98, 92]] },
  { "student": "Carlos ", "id": 3, "teachers": "tiff , lexy", "scores": [97, 90, [97, 96]] },
]
*/
```

## Array.flat()

**Array.prototype.flat** 😮

```javascript
const nestedArray = [1, 2, 3, [4, 5]]
const flattArray = nestedArray.flat()
// [1, 2, 3, 4, 5]

const nestedArray = [1, 2, [3, 4, [5, 6]]];
const flattArray = nestedArray.flat()
// [1, 2, 3, 4, [5, 6]]

const nestedArray = [1, 2, [3, 4, [5, 6]]];
const flattArray = nestedArray.flat(2)
// [1, 2, 3, 4, 5, 6]

const nestedArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const flattArray = nestedArray.flat(Infinity) 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```


## String.trimEnd()

**String.prototype.trimEnd**

#### Example

```javascript
const string = "jim , bob"
string.split(',').map(teacher => teacher.trimEnd()).join(',')
// "jim, bob"
// notice the removal of the space after jim only :)
```

## Array.flatMap()

**Array.prototype.flatMap**

Equivalent to using `map()` and `flat()` (depth 1) with more syntactic sugar. 

#### Example 1

```javascript
const array = [
  { "am": 1, "pm": 10, "id": "a" },
  { "am": 2, "pm": 4, "id": "b" },
  { "am": 3, "pm": 12, "id": "a" },
  { "am": 1, "pm": 7, "id": "b" }
]

const counts = array.flatMap(record => [record.am, record.pm])
// counts = [1, 10, 2, 4, 3, 12, 1, 7]
```

#### Example 2

```javascript
const selectedId = 'a'
const array = [
  { "am": 1, "pm": 10, "id": "a" },
  { "am": 2, "pm": 4, "id": "b" },
  { "am": 3, "pm": 12, "id": "a" },
  { "am": 1, "pm": 7, "id": "b" }
]

const counts = array.flatMap(record => selectedId === record.id ? [record.am, record.pm] : []) 
// counts = [1, 10, 3, 12]
// Note returning an empty array within the map function will be like "Don't give me anything back for this record"
```

## Symbol.description

**Symbol.prototype.description** 

This is a read-only property meaning the strings returned are safe from mutation and keeping values collision free.

#### Example

```javascript
const string = Symbol('Oakwood')
// string.description = 'Oakwood'

console.log(Symbol('Oakwood') === Symbol('Oakwood'))
// False
```

## Object.fromEntries()

**Object.fromEntries**

This method takes a list of key-value pairs and returns a new object whose properties are given by those entries. 

#### Example

```javascript
const myMap = new Map([[ 'team', 'Oakwood' ] ['goal', 'build cool shit' ]])
const myObject = Object.fromEntries(myMap)
// myObject = { team: 'Oakwood', goal: 'build cool shit' }
```
