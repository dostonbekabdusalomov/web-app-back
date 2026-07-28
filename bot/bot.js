const { Telegraf } = require('telegraf')
const User = require('../models/User')
const Order = require('../models/Order')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.on('message', async ctx => {
  if (ctx.message.web_app_data) {
    const data = JSON.parse(ctx.message.web_app_data.data)

    let user = await User.findOne({ user_id: ctx.from.id })

    if (!user) {
      user = await User.create({
        user_id: ctx.from.id,
        balance: 50000
      })
    }

    if (user.balance < data.price) {
      return ctx.reply('❌ Mablag‘ yetarli emas')
    }

    user.balance -= data.price
    await user.save()
    //asdasd

    await Order.create({
      user_id: ctx.from.id,
      name: data.name,
      price: data.price
    })

    ctx.reply('✅ Xarid qilindi')
  }
})

module.exports = bot
