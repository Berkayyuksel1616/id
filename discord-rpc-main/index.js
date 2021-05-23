var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Aramıza Katıl",
assets : {
large_image : "unknown",
large_text : "Squaddie" // bu gözükmeyebilir!!
},
buttons : [{label : "Discord" , url : "https://discord.gg/4NxZ9xMXZ5"}]
}
})
})
client.login({ clientId : "846012925663903824" }).catch(console.error);