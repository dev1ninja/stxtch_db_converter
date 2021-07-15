const {db: newdb, sequelize} = require('./new/connect')
const olddb = require('./old/connect').db

void async function db_converter(){
  await sequelize.sync({ force: true })
  const customer_old_db = await olddb.Customer.findAll()
  for(let each of customer_old_db){
    await newdb.Customer.create(each.toJSON())
  }

  const user_old_db = await olddb.User.findAll()
  for(let each of user_old_db){
    await newdb.User.create(each.toJSON())
  }

  const group_old_db = await olddb.Group.findAll()
  for(let each of group_old_db){
    each = each.toJSON()
    await newdb.Group.create(each)
    const image = await newdb.Media.create({url: 'https://stxtch-dev.s3.amazonaws.com/photos/pictureurl/victor-kintanar---_VIX0649_2.jpg', type: 'image'})
    await newdb.GroupMedia.create({groupId: each.id, mediaId: image.id})
    const video = await newdb.Media.create({url: 'https://player.vimeo.com/video/428225141', type: 'video'})
    await newdb.GroupMedia.create({groupId: each.id, mediaId: video.id})    
  }

  const story_old_db = await olddb.Story.findAll()
  for(let each of story_old_db){
    each = each.toJSON()
    await newdb.Story.create(each)
    if(each.pictureUrl){
      const media = await newdb.Media.create({url: each.pictureUrl, type: 'image'})
      await newdb.StoryMedia.create({storyId: each.id, mediaId: media.id})
    }
    if(each.videoUrl){
      const media = await newdb.Media.create({url: each.videoUrl, type: 'video'})
      await newdb.StoryMedia.create({storyId: each.id, mediaId: media.id})
    }
  }

  const homestory_old_db = await olddb.HomeStory.findAll()
  for(let each of homestory_old_db){
    await newdb.HomeStory.create(each.toJSON())
  }

  for(let tag of tags){
    await newdb.Tag.create(tag)
  }

  for(let grouptag of groupTags){
    await newdb.GroupTag.create(grouptag)
  }

  for(let storytag of storyTags){
    await newdb.StoryTag.create(storytag)
  }

}()

const tags = [
  {
    id: 1,
    name: "Cristian",
  },
  {
    id: 2,
    name: "DevLearn",
  },
  {
    id: 3,
    name: "DevLearn",
  },
]

const groupTags = [
  {
    id: 1,
    tagId: 1,
    groupId: 1,
  },
  {
    id: 2,
    tagId: 2,
    groupId: 2,
  }
]

const storyTags = [
  {
    id: 1,
    tagId: 1,
    storyId: 1,
  },
  {
    id: 2,
    tagId: 2,
    storyId: 2,
  }
]