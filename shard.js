const { ShardingManager } = require('discord.js')
require('dotenv').config()
const token = 'Nzk5Nzc5NDk1NTgxODQzNTc1.YAIisg.YU_BVmghFfx85SKuAtEWoPic7FY';
const manager = new ShardingManager('./index.js', { token: token });



manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();