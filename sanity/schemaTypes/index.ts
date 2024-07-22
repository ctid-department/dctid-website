import article from './article'
import link from './link'
import navigation from './navigation'
import page from './page'
import richtextModule from './modules/richtext-module'
import heroSplit from './modules/hero.split'
import articlesList from './modules/articles-list'
import imageModule from './modules/image-module'

export const schemaTypes = [
  article,
  page,
  navigation,
  link,
  heroSplit,
  richtextModule,
  articlesList,
  imageModule,
]
