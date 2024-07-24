import article from './article'
import link from './link'
import navigation from './navigation'
import page from './page'
import richtextModule from './modules/richtext-module'
import heroSplit from './modules/hero.split'
import articlesList from './modules/articles-list'
import imageModule from './modules/image-module'
import event from './event'
import eventsList from './modules/events-list'
import profileCard from './modules/profile-card'

export const schemaTypes = [
  article,
  event,
  page,
  navigation,
  link,
  heroSplit,
  richtextModule,
  articlesList,
  eventsList,
  imageModule,
  profileCard,
]
