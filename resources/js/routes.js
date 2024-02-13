import ExampleComponent from './components/ExampleComponent.vue'
import HomePageComponent from './components/HomePageComponent.vue'
import AboutPageComponent from './components/AboutPageComponent.vue'

export const routes = [
  {
    path:"/example",
    name: "example",
    component: ExampleComponent
  },
  {
    path:"/",
    name: "home",
    component: HomePageComponent
  },
  {
    path:"/about",
    name: "about",
    component: AboutPageComponent
  }
]