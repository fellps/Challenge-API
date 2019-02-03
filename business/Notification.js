import BusinessResult from '../business/BusinessResult'

const Notification = {
  get: async (ctx) => {
    const notification = {
      code: 'ABC123', // Change the code to receive a new notification
      title: 'New Feature!',
      createdAt: '2019-02-01T00:37:10-02:00',
      summary: 
        `Now you can customize your avatar
        uploading your selfie...`,
      body: 
        `Now you can customize your avatar uploading your selfie.
        <br/><br/>
        Just click on the avatar, take or select a picture and save.
        <br/><br/>
        <img src="img/newfeature.png"/>`
    }
    return BusinessResult.success(ctx, notification)
  }
}

module.exports = Notification
