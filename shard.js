const { ShardingManager } = require('discord.js')
require('dotenv').config()
const token = 'Nzk5Nzc5NDk1NTgxODQzNTc1.YAIisg.mp3aYxzAQZ0ktD571u_hkPqPAYI';
const manager = new ShardingManager('./main.js', { token: token });



manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();