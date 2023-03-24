### Setup Stores
There is also another possible syntax to define stores. Similar to the Vue Composition API's setup function, we can pass
in a function that defines reactive properties and methods and returns an object with the properties and methods we want
to expose.

```js
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

return { count, name, doubleCount, increment }
})
```
In Setup Stores:

- ref()s become state properties
- computed()s become getters
- function()s become actions
Setup stores bring a lot more flexibility than Option Stores as you can create watchers within a store and freely use
any composable. However, keep in mind that using composables will get more complex when using SSR.