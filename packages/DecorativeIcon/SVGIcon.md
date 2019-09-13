### Naming Convention

The convention for icon names is to capitalize the beginning of each word or abbreviation.
For example the icon for Remote control is `RemoteControl`, the icon for USB cable is `UsbCable` and the icon for TV is `Tv`

```jsx
<Box between={3}>
  <Text>
    <RemoteControl /> Remote control
  </Text>

  <Text>
    <UsbCable /> USB cable
  </Text>
  <Text>
    <Tv /> TV
  </Text>
</Box>
```

The variants `default`, `alternative` and `inverted` can be used based on the design of the context in which the icon lives.

```jsx
<Box between={3}>
  <Text>
    <Accessible variant="alternative" /> Accessibility is key
  </Text>
  <Text>
    <Heart variant="default" size={48} /> This is a big heart
  </Text>
</Box>
```

Check out the table below a full list of SVG Icons and their usage guidelines.
