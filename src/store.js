import { configureStore } from '@reduxjs/toolkit'
import titleReducer from './title/titleSlice'
import navReducer from './nav/navSlice'
import articleReducer from './article/articleSlice'

export default configureStore({
  reducer: {
      title: titleReducer,
      nav: navReducer,
      article: articleReducer
  },
})