import cron from 'node-cron'

export default defineNitroPlugin(() => {
  cron.schedule("*/2 * * * * *", function() {
    console.log("running a task every 2 seconds");
  })
})
