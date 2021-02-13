const { ShardingManager } = require('discord.js')
require('dotenv').config()
const token = 'ODEwMTc2MjY1NTM3NTg1MTgy.YCf1cg.b4oMyS1I_dXBzi8LrUF-7vU2sgQ';
const manager = new ShardingManager('./index.js', { token: token });



manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();