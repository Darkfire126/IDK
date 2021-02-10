const { ShardingManager } = require('discord.js')
require('dotenv').config()
const token = 'Nzk5Nzc5NDk1NTgxODQzNTc1.YAIisg.mp3aYxzAQZ0ktD571u_hkPqPAYI';
const manager = new ShardingManager('./index.js', {
   token,
    totalShards: 2
});

manager.spawn();
manager.on('shardCreate', shard => console.log(`Shard #${shard.id} is online!.`));